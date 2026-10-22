# helseveiledere.no

En enkel, responsiv rekrutteringsside for Marta Opland, sertifisert helseveileder fra ABEL Instituttet. Nettstedet er laget med ren HTML, CSS og minimal JavaScript og er klart for publisering på GitHub Pages når punktene i sjekklisten under er avklart.

## Filstruktur

```text
/
├── index.html
├── personvern.html
├── css/style.css
├── js/main.js
├── img/hero.png
├── img/marta.png
├── CNAME
├── robots.txt
├── sitemap.xml
├── .gitignore
└── README.md
```

## Forhåndsvis lokalt

Du kan åpne `index.html` direkte i en nettleser. For en mer realistisk lokal test kan du starte en enkel webserver fra prosjektmappen:

```powershell
python -m http.server 8000
```

Åpne deretter `http://localhost:8000/`. Ingen installasjon eller bygging er nødvendig.

## Publisering med GitHub Pages

1. Last opp filene til standardgrenen i GitHub-repositoriet.
2. Gå til **Settings → Pages** i GitHub.
3. Velg **Deploy from a branch**, standardgrenen og mappen `/ (root)`.
4. Vent til GitHub Pages har publisert siden.
5. Bekreft at domenet i `CNAME` er `helseveiledere.no`, og konfigurer DNS hos domeneleverandøren etter GitHubs anvisninger.
6. Aktiver **Enforce HTTPS** når sertifikatet er klart.

## Bilder og profilfarger

- **Hero-bilde:** `img/hero.png`
- **Marta-bilde:** `img/marta.png`
- **Blå profil:** Juster de sentrale CSS-variablene `--primary`, `--accent`, `--primary-dark`, `--primary-light`, `--background`, `--surface`, `--text`, `--muted`, `--border` og `--white` øverst i `css/style.css` dersom fargene skal finjusteres.

## Kontaktskjemaet

Skjemaet er koblet til Formspree:

```html
action="https://formspree.io/f/xeeyprpa"
```

Skjemaet inneholder navn, e-post, valgfritt telefonnummer, det valgfrie feltet «Eventuelle spørsmål eller aktuelle opplysninger», samtykke og emnefeltet «Ny forespørsel fra helseveiledere.no». Formspree viser en tydelig bekreftelse eller feilmelding etter innsending. Skjemaet lagrer eller logger ikke innholdet lokalt.

## Innhold

Hovedbudskapet er «Med fokus på helhetlig helse og bærekraftige endringer». Tilbudet er «Gratis kartleggingssamtale på 45 minutter».

## Før lansering

- [ ] Test en komplett Formspree-innsending uten reelle eller sensitive helseopplysninger.
- [ ] Test e-postlevering til `marta.opland@abel.no`.
- [ ] Korrekturles alt innhold.
- [ ] Test nettstedet på mobil, nettbrett og desktop.
- [ ] Kontroller alle lenker og filbaner.
- [ ] Aktiver GitHub Pages og det egendefinerte domenet.
- [ ] Bekreft at HTTPS er aktivert.

## Tekniske merknader

Nettstedet bruker ingen informasjonskapsler, analyseverktøy, sporing eller eksterne biblioteker. Menyen og skjemaets midlertidige status bruker JavaScript; alt sentralt innhold og kontaktalternativene er fortsatt tilgjengelige uten JavaScript.
