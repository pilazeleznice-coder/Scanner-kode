# Scanner kód

Firemní generátor a čtečka osmimístných kódů CODE 128. Vytváří vouchery, ověřuje je, vede archiv a umožňuje export průhledného PNG a SVG. Je také propojený s evidencí náhradních dílů STK.

## Použití

Produkční aplikace: https://scanner-kode.vercel.app/

Přihlaste se stejným účtem Evidence-app jako v Evidenci STK. Kódy a jejich údaje se ukládají v Supabase pod přihlášeným uživatelem a synchronizují se mezi zařízeními. V podporovaném mobilním prohlížeči lze aplikaci přidat na plochu. Kamera používá nativní BarcodeDetector v prohlížečích, které ho podporují, a vyžaduje HTTPS. Osmimístné číslo lze také zadat ručně.

## Náhradní díly z Evidence STK

V formuláři nového dílu vygenerujte kód a uložte díl. Čáry nesou osmimístné číslo; úplné údaje dílu jsou v soukromém záznamu, který čtečka po naskenování načte. Zobrazí druh dílu, zařízení, odborné označení, zásobu, počet na opravu, cenu, stav, odkazy, další kódy, poznámku a zmenšený náhled fotografie. Kód dílu se opakovaným skenováním nespotřebuje. V archivu ho najdete filtrem „Náhradní díly STK“ a stáhnete jako průhledné PNG nebo SVG.

Pokud Evidence STK pracuje offline nebo se zápis nepodaří, u dílu zůstane označení k opakovanému odeslání. V čtečce začne fungovat až po úspěšném uložení do společné databáze.
