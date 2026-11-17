# Scanner kód

Instalovatelná PWA pro vytváření jednorázových voucherů, čárové kódy CODE 128, export PNG/SVG, kontrolu a lokální evidenci.

## Nasazení
V GitHub Settings → Pages nastavte Deploy from a branch, branch `main`, folder `/ (root)`. Adresa: https://pilazeleznice-coder.github.io/Scanner-kode/

V mobilním Chrome otevřete web a vyberte Instalovat aplikaci / Přidat na plochu.

## Bezpečnost
Toto je DEMO s localStorage, nikoliv bezpečný produkční voucher systém. Stav není sdílen mezi zařízeními, data se mohou ztratit a lze je lokálně upravit. Před vydáváním reálných voucherů přidejte přihlášení a serverovou databázi s atomickým uplatněním.

Kamera používá nativní BarcodeDetector pouze v podporovaných prohlížečích a vyžaduje HTTPS.
