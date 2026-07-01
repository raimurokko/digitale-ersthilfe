# Backlog — Digitale Ersthilfe

Offene Punkte, nach Priorität. Legende:
🔴 **P1** blockierend/rechtlich · 🟠 **P2** wichtig · 🟢 **P3** nice-to-have
👤 = braucht redaktionelle/menschliche Entscheidung (kann nicht automatisiert werden)

---

## 🔴 P1 — Vor dem öffentlichen Go-Live

- [ ] 👤 **Impressum-Pflichtangaben ausfüllen** (`impressum.html`). Aktuell Platzhalter:
  Straße/Hausnummer, PLZ/Ort, Name der Geschäftsführung, Telefonnummer, Amtsgericht,
  HRB-Nummer, USt-IdNr., Name + Adresse der/des Datenschutzverantwortlichen.
  → Ohne vollständiges Impressum ist die Seite in DE nicht rechtskonform (§ 5 DDG / § 18 MStV).
- [ ] 👤 **Widerspruch BSI-Bezug klären.** `ueber-uns.html` schreibt „Novum Analytica ist
  **Teil** des Cyber-Sicherheitsnetzwerks (CSN) des BSI", während Disclaimer/README
  „**kein offizieller Zusammenhang** mit dem BSI" betonen. Formulierung vereinheitlichen
  (z. B. „nimmt am CSN teil" vs. „ist kein Angebot des BSI"), sonst irreführend.
- [ ] 👤 **Datenschutzerklärung: Abschnitt zum Erklärvideo** ergänzen — das Video wird bei
  Wiedergabe von GitHub (githubusercontent.com, Microsoft) geladen; IP-Übermittlung
  transparent machen (Rechtsgrundlage, ggf. Consent). Alternativ Video self-hosten.

## 🟠 P2 — Inhalte & Reichweite

- [ ] 👤 **Fehlende Leitfäden schreiben** (in `fachinfo.html` als „In Vorbereitung" angekündigt):
  - Stalkerware-Erkennung auf Android und iOS (deckt Triage „Mein Gerät verhält sich seltsam" besser ab)
  - Account Recovery bei Identitätsdiebstahl (Google, Apple, Microsoft)
  - Phishing-Erkennung und forensische E-Mail-Analyse
  - IoT-Sicherheit und Smart-Home-Absicherung
  - Rechtssichere Dokumentation digitaler Gewalt
- [ ] **Materialien-Repo** separat auf GitHub **und** Codeberg pushen; Dateiname mit
  führendem Leerzeichen korrigieren (`TLP-CLEAR _Beweissicherung_Leitfaden_Amazon_Echo…pdf`).
- [ ] **Codeberg- und GitLab-Spiegel** einrichten (Remotes + Sync, siehe CONTRIBUTING.md).
- [ ] **OG-Image** (`assets/`) für Social-Sharing/Vorschau hinterlegen und in `<meta og:image>` verlinken.
- [ ] **sitemap.xml** und **robots.txt** ergänzen (SEO/AEO).

## 🟠 P2 — Hosting (Aufgabe 5)

- [ ] **GitHub Pages** aktivieren (Branch `main`, root). Custom Domain vorbereiten.
- [ ] **Codeberg Pages** einrichten.
- [ ] **Produktiv-Domain** `digitale-ersthilfe.novumanalytica.com`: DNS (CNAME), HTTPS/Zertifikat,
  `CNAME`-Datei bzw. Pages-Konfiguration. Canonical-URL in schema.org/OG prüfen
  (aktuell teils `https://digitale-ersthilfe.de` hinterlegt — auf finale Domain vereinheitlichen).

## 🟢 P3 — Politur & Technik

- [ ] **Infografiken optimieren** — `assets/images/*.jpg` sind 2752×1536 (~650 KB).
  Auf sinnvolle Anzeigegröße herunterrechnen und/oder WebP anbieten.
- [ ] **schema.org `thumbnailUrl`/`contentUrl`** im Phishing-Leitfaden auf finale
  Domain bzw. lokale Assets umstellen.
- [ ] Echtes **favicon.ico** (Multi-Size) zusätzlich zu den PNG/SVG-Icons.
- [ ] **Link-Checker in CI** (intern + extern) gegen tote Links.
- [ ] Kontrast-/A11y-Audit automatisieren (z. B. axe/Lighthouse in CI), WCAG-AA verifizieren.
- [ ] Prüfen, ob `latin-ext`-Font-Subset überhaupt gebraucht wird (aktuell nur `latin` geladen).

---

## ✅ In dieser Iteration erledigt

- DSGVO: Google Fonts entfernt, Schriften lokal als Variable Fonts eingebunden (0 externe Requests, verifiziert).
- Redesign „warm & beruhigend" (Teal + warme Neutraltöne) über Design-Tokens, inkl. Dark Mode & Hoher Kontrast.
- Neue Übersichtsseite `leitfaeden.html`; „Leitfäden" in Navigation überall darauf verlinkt.
- `aria-current`-Bug behoben (Leitfaden-Seiten markierten fälschlich Echo-Stalking als aktiv).
- Triage-Zuordnung korrigiert: „überwacht/stalkt mich" → allgemeiner Stalking-Leitfaden (war vorher nirgends verlinkt).
- Phishing-Infografiken lokal gehostet; Video auf `preload="none"` + lokalem Poster + Hinweis.
- PWA-Icons + Favicon aus `icon.svg` generiert (waren referenziert, fehlten physisch); Manifest aktualisiert.
- Service-Worker-Cache um Fonts/Icons/Übersichtsseite erweitert (Offline vollständig).
- Datenschutzerklärung an lokale Schriften angepasst; Altlast `code.html` entfernt.
- README aktualisiert, BACKLOG angelegt.
