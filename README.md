# Stjernepilot – Gangetabell-spill (PWA)

Et progressivt web-app-spill der barn lærer gangetabellen ved å skyte ned asteroider.

## Filer
- `index.html` – Selve spillet
- `manifest.json` – PWA-konfigurasjon
- `sw.js` – Service worker for offline-bruk
- `icons/` – App-ikoner

## Installasjon på telefon

For at PWA-en skal kunne installeres, må den serves over HTTPS (eller localhost). Her er de vanligste måtene:

### Alternativ 1: GitHub Pages (gratis, anbefalt)
1. Lag en gratis konto på github.com
2. Lag et nytt offentlig "repository"
3. Last opp alle filene (med samme mappestruktur)
4. Gå til Settings → Pages, og aktiver GitHub Pages fra "main" branch
5. Etter et minutt får du en URL som `https://brukernavn.github.io/repo-navn/`
6. Åpne URL-en i Chrome på Android eller Safari på iPhone

### Alternativ 2: Netlify Drop (enklest)
1. Gå til https://app.netlify.com/drop
2. Dra hele mappen `pwa-app` inn på siden
3. Du får umiddelbart en HTTPS-URL du kan åpne på telefonen

### Alternativ 3: Lokal test
Hvis du vil teste på din egen PC først:
```
cd pwa-app
python3 -m http.server 8000
```
Åpne deretter `http://localhost:8000` i nettleseren.

## Installere som app på telefonen

### Android (Chrome)
1. Åpne URL-en i Chrome
2. Trykk på menyen (tre prikker) → "Legg til på startskjermen" eller "Installer app"
3. Appen dukker opp som et ikon på startskjermen

### iPhone (Safari)
1. Åpne URL-en i Safari (må være Safari, ikke Chrome)
2. Trykk på Del-knappen (firkant med pil opp)
3. Velg "Legg til på Hjem-skjerm"

Etter installasjon fungerer spillet helt uten internett.

## Tilpasninger
Du kan enkelt redigere `index.html` for å:
- Endre vanskelighetsprogresjon (søk etter `maxFactor` i koden)
- Legge til flere romskip (`SHIPS`-arrayen)
- Endre farger og tema
