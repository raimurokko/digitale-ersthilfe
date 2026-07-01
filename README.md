# Digitale Ersthilfe

Schnelle Hilfe bei digitaler Gewalt, Stalking, Hacking und Online-Betrug.
Einfache Anleitungen für Betroffene. Ein freiwilliger Service von [Novum Analytica](https://novumanalytica.com).

## Was ist das?

Eine barrierefreie, mobile-first Webseite mit Schritt-für-Schritt-Anleitungen
für Menschen, die von digitaler Gewalt betroffen sind. Alle Texte sind in
einfacher Sprache geschrieben und können vorgelesen werden.

**Zielgruppen:**
- Betroffene (Laien) — schnelle, verständliche Soforthilfe
- Digitale Ersthelferinnen und Ersthelfer
- CSN-Praktikerinnen und -Praktiker des BSI Cyber-Sicherheitsnetzwerks
- Vorfallexpertinnen und -experten

## Wichtiger Hinweis

Dies ist ein **freiwilliger, unabhängiger Service**. Er wird **nicht** durch das
Bundesamt für Sicherheit in der Informationstechnik (BSI) bereitgestellt,
finanziert oder betrieben. Es besteht **kein offizieller Zusammenhang** mit dem BSI.

Alle Inhalte dienen der Erstinformation und ersetzen keine professionelle
Rechtsberatung, IT-Forensik oder polizeiliche Ermittlung.

## Funktionen

- **Triage-Einstieg** — „Was ist passiert?" führt direkt zum passenden Leitfaden
- **Click-to-Call** — Kontaktstellen mit einem Tipp anrufen
- **Vorlesefunktion** — Alle Texte per Web Speech API vorlesen lassen
- **Barrierefreiheit** — Große Schrift, hoher Kontrast, WCAG 2.1 AA, Vorlesen
- **PWA / Offline** — Als App installierbar, funktioniert ohne Internet
- **schema.org** — Strukturierte Daten für Suchmaschinen und AI (HowTo, FAQPage, ItemList, ContactPage)
- **Leichte Sprache** — Sprachniveau A2/B1

## Datenschutz by Design

- **Keine externen Requests.** Schriften (Inter, Plus Jakarta Sans) sind als
  Variable Fonts **lokal eingebunden** (`assets/fonts/`) — keine Verbindung zu
  Google Fonts. Infografiken werden lokal ausgeliefert.
- **Kein Tracking, keine Cookies, keine Analyse-Tools.**
- Das Erklärvideo (im separaten Materialien-Repo) lädt erst nach aktivem
  Tippen auf „Wiedergabe" und ist mit einem Hinweis versehen.
- Einstellungen der Barrierefreiheit werden nur lokal im Browser
  (`localStorage`) gespeichert.

## Design

Ruhige, warme Gestaltung („Fürsorge statt Behörde"): gedämpftes Teal als
Primärfarbe, warme Neutraltöne, weiche Rundungen, klare Hierarchie. Alle Farben
sind als CSS Custom Properties (Design-Tokens) in `css/style.css` definiert und
haben Dark-Mode- und Hoher-Kontrast-Varianten. Siehe [DESIGN.md](DESIGN.md).

## Seiten

| Seite | Beschreibung |
|---|---|
| `index.html` | Startseite mit Triage-Einstieg und Soforthilfe-Nummern |
| `leitfaeden.html` | Übersicht aller Leitfäden |
| `kontaktstellen.html` | Alle Kontaktstellen mit Click-to-Call (Akkordeon-Kategorien) |
| `leitfaden-account-hack.html` | Leitfaden: Konto gehackt |
| `leitfaden-stalking.html` | Leitfaden: Stalking |
| `leitfaden-echo-stalking.html` | Leitfaden: Überwachung durch Amazon Echo |
| `leitfaden-phishing-signal-whatsapp.html` | Leitfaden: Phishing auf Signal/WhatsApp |
| `leitfaden-vertrauliche-beweissicherung.html` | Leitfaden: Vertrauliche Beweissicherung |
| `fachinfo.html` | Ressourcen für Fachkräfte |
| `ueber-uns.html` | Über das Projekt und Disclaimer |
| `impressum.html` | Impressum und Datenschutzerklärung |

## Technik

- Pures HTML, CSS, JavaScript — kein Framework, kein Build-Tool
- Mobile-first CSS mit Custom Properties (`css/style.css`)
- Vanilla JS (`js/app.js`): Navigation, Vorlesen, A11y-Panel, PWA-Registrierung
- Service Worker (`sw.js`) für Offline-Fähigkeit — Cache-first
- Lokale Variable Fonts mit `font-display: swap`

## Lokal starten

Es ist kein Build nötig. Ein beliebiger statischer Server genügt:

```bash
python3 -m http.server 8137
# dann http://localhost:8137 öffnen
```

## Struktur

```
.
├── index.html, leitfaeden.html, kontaktstellen.html, fachinfo.html, …
├── css/style.css          # Design-System + @font-face
├── js/app.js              # Vanilla JS
├── sw.js, manifest.json   # PWA
├── assets/
│   ├── fonts/             # lokale Variable Fonts (woff2)
│   ├── icons/             # App-Icons + favicon (aus icon.svg generiert)
│   └── images/            # lokal gehostete Infografiken
└── docs/                  # Link-, Tool- und Materialien-Listen
```

## Materialien

Die Fach-Materialien (PDFs, Videos, Infografiken) werden in einem **separaten
Repository** gepflegt und sind hier bewusst **nicht** eingecheckt (Größe):

- **GitHub:** [raimurokko/digitale-ersthilfe-materialien](https://github.com/raimurokko/digitale-ersthilfe-materialien)
- **Codeberg:** [raimu/digitale-ersthilfe-materialien](https://codeberg.org/raimu/digitale-ersthilfe-materialien)

## Spiegel & Hosting

Dieses Repository wird auf mehreren Plattformen gepflegt und gehostet:

- **GitHub:** [raimurokko/digitale-ersthilfe](https://github.com/raimurokko/digitale-ersthilfe) (+ GitHub Pages)
- **Codeberg:** raimu/digitale-ersthilfe (+ Codeberg Pages) — folgt
- **Produktiv:** https://digitale-ersthilfe.novumanalytica.com — folgt

Siehe [CONTRIBUTING.md](CONTRIBUTING.md) für die Sync-Anleitung und
[BACKLOG.md](BACKLOG.md) für offene Punkte.

## Hinweis zu KI-Unterstützung

Inhalte werden durch KI-gestützte Softwareverfahren auf Lesbarkeit und Ausdruck geprüft.
Bilder und Infografiken können KI-generiert oder KI-überarbeitet sein.
Alle Inhalte haben originär menschliche Autorinnen und Autoren und werden
redaktionell gegengelesen.

## Lizenz

Siehe [LICENSE](LICENSE).

## Mitmachen

Siehe [CONTRIBUTING.md](CONTRIBUTING.md).
