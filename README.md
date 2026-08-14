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

## Kreditering
- Bakgrunnsmusikk: ["mallet in space"](https://freesound.org/people/plagasul/sounds/253379/) av plagasul, lisensiert under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- Ku-lyder (ni ulike, valgt tilfeldig): CC BY 4.0-opptak av [toddtruax](https://freesound.org/people/toddtruax/sounds/144820/), [mokasza](https://freesound.org/people/mokasza/sounds/810758/), [confusion_music](https://freesound.org/people/confusion_music/sounds/103426/) og [FiveBrosStopMosYT](https://freesound.org/people/FiveBrosStopMosYT/sounds/558709/), samt 5 opptak under CC0 (offentlig eiendom) fra Julalvr, GoombaGuy, DiArchangeli, JarredGibb og TheKingOfGeeks360
- UFO-lyder (ni ulike, valgt tilfeldig): CC BY-NC 3.0-opptak av [richmstudios](https://freesound.org/people/richmstudios/sounds/317015/) og [Romeo_Kaleikau](https://freesound.org/people/Romeo_Kaleikau/sounds/588252/), samt 7 opptak under CC0 (offentlig eiendom) fra Rickplayer, Nerdwizard78, FunnyVoices, SCICOFILMS.com, menegass, SpeedY og Leszek_Szary
- Grisely (seks ulike, valgt tilfeldig): CC BY 4.0-opptak av [JarredGibb](https://freesound.org/people/JarredGibb/sounds/233174/) og [DrinkingWindGames](https://freesound.org/people/DrinkingWindGames/sounds/865014/), samt 4 opptak under CC0 (offentlig eiendom) fra JarredGibb og qubodup
- Prosjekt: https://github.com/K-blip7/Stjernepilot
