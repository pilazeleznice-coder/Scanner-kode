import io
import json
import re
from http.server import BaseHTTPRequestHandler

import xlwt


def build_workbook(codes):
    workbook = xlwt.Workbook()
    sheet = workbook.add_sheet("Kody")
    for row, code in enumerate(codes):
        sheet.write(row, 0, code)
    output = io.BytesIO()
    workbook.save(output)
    return output.getvalue()


class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if not 1 <= length <= 32768:
                raise ValueError
            codes = json.loads(self.rfile.read(length))
            if not isinstance(codes, list) or not 1 <= len(codes) <= 1000:
                raise ValueError
            if any(not isinstance(code, str) or not re.fullmatch(r"[0-9]{8}", code) for code in codes):
                raise ValueError
        except ValueError:
            self.send_error(400, "Invalid barcode batch")
            return

        data = build_workbook(codes)
        self.send_response(200)
        self.send_header("Content-Type", "application/vnd.ms-excel")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(data)
