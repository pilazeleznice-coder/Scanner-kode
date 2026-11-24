# Scanner kód

Instalovatelná PWA pro vytváření jednorázových voucherů, čárové kódy CODE 128, export PNG/SVG, kontrolu a lokální evidenci.

## Nasazení
V GitHub Settings → Pages nastavte Deploy from a branch, branch `main`, folder `/ (root)`. Adresa: https://pilazeleznice-coder.github.io/Scanner-kode/

V mobilním Chrome otevřete web a vyberte Instalovat aplikaci / Přidat na plochu.

## Bezpečnost
Toto je DEMO s localStorage, nikoliv bezpečný produkční voucher systém. Stav není sdílen mezi zařízeními, data se mohou ztratit a lze je lokálně upravit. Před vydáváním reálných voucherů přidejte přihlášení a serverovou databázi s atomickým uplatněním.

Kamera používá nativní BarcodeDetector pouze v podporovaných prohlížečích a vyžaduje HTTPS.

## Náhradní díly z Evidence STK

Kód typu „Náhradní díl“ je osmimístný CODE 128. Číslo odkazuje na privátní záznam stejného účtu v Evidence-app; po načtení čtečka zobrazí kategorii, zařízení, označení, zásobu, potřebu na opravu, cenu, stav, odkazy, poznámku, další kódy a zmenšený náhled fotografie. Kód dílu se opakovaným skenováním nespotřebuje. V archivu ho najdete filtrem „Náhradní díly STK“ a lze ho stáhnout jako průhledné PNG nebo SVG. Přihlášení v obou aplikacích musí být pod stejným účtem Evidence-app.
