# Backlog — Digitale Ersthilfe

Offene Punkte, nach Priorität. Legende:
🔴 **P1** blockierend/rechtlich · 🟠 **P2** wichtig · 🟢 **P3** nice-to-have
👤 = braucht redaktionelle/menschliche Entscheidung (kann nicht automatisiert werden)

---

## 🔴 P1 — Vor dem öffentlichen Go-Live

- [ ] 👤 **Datenschutzerklärung: Abschnitt zum Erklärvideo** ergänzen — das Video wird bei
  Wiedergabe von GitHub (githubusercontent.com, Microsoft) geladen; IP-Übermittlung
  transparent machen (Rechtsgrundlage, ggf. Consent). Alternativ Video self-hosten.
- [ ] 👤 **Rechtsdaten gegenprüfen.** Impressum wurde aus dem RadiusOne-Projekt übernommen
  (Novum Analytica GmbH, Kurfürstendamm 194, 10707 Berlin; GF Benjamin Stein,
  Rainhard Z. Bengez; HRB 265538 B; USt DE362600306; inhaltlich verantwortlich
  Maria Jackson). Vor Go-Live gegen die maßgebliche Quelle (novumanalytica.com/impressum)
  final verifizieren; Kontakt-E-Mail ist hier `info@` (RadiusOne nutzt `kontakt@`).

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

## 🟠 P2 — Video-Diffusion (YouTube & Social)

- [ ] 👤 **Erklärvideos auf YouTube** (und später PeerTube/Vimeo) hochladen — für Reichweite
  und damit LLMs/Suchmaschinen sie zitieren können. Danach hier einbetten mit
  **DSGVO-freundlicher „Click-to-Load"-Fassade** (`youtube-nocookie.com`, kein Laden vor
  Klick, lokales Poster). Muster kann ich bauen, sobald Kanal + Video-IDs existieren.
- [ ] `VideoObject`-Schema je Video um `embedUrl`/`contentUrl` (YouTube) und `duration` ergänzen.
- [ ] 👤 **Social-Kanäle** (YouTube, ggf. TikTok/Instagram/Mastodon): sobald vorhanden, in
  Organization-Schema `sameAs` eintragen und im Footer verlinken. Idee für knappe Ressourcen:
  ein Kurzclip pro Leitfaden vertikal schneiden, plattformübergreifend zweitverwerten.

## 🟠 P2 — Hosting (Aufgabe 5)

- [ ] **GitHub Pages** aktivieren (Branch `main`, root); `CNAME`-Datei für die Produktiv-Domain.
- [ ] **Codeberg Pages** einrichten.
- [ ] **Produktiv-Domain** `digitale-ersthilfe.novumanalytica.com`: DNS (CNAME), HTTPS/Zertifikat.
  (Canonical/OG/Sitemap sind bereits konsistent auf diese Domain gesetzt.)
- [ ] Nach Go-Live **Sitemap in Google Search Console** und Bing Webmaster Tools einreichen.

## 🟢 P3 — Politur & Technik

- [ ] **Sichtbare Breadcrumb-Leiste** in den Seitenkopf (Schema `BreadcrumbList` ist bereits da;
  sichtbare Variante fehlt noch — Google mag beides deckungsgleich).
- [ ] 👤 **FAQ-Abschnitte** auf `leitfaden-stalking` und `leitfaden-account-hack` ergänzen
  (sichtbar + `FAQPage`-Schema) — stärkster AEO-Hebel; Inhalt redaktionell.
- [ ] **„Verwandte Leitfäden"**-Verlinkung am Ende jedes Leitfadens (laterales Interlinking).
- [ ] **Responsive Bilder** (`srcset`/WebP) für die Infografiken; `latin-ext`-Font-Subset prüfen.
- [ ] `schema.org thumbnailUrl/contentUrl` im Phishing-Leitfaden auf lokale/finale URLs umstellen.
- [ ] Echtes **favicon.ico** (Multi-Size) zusätzlich zu PNG/SVG.
- [ ] **CI**: Link-Checker + automatisiertes A11y/Lighthouse-Audit (WCAG-AA, Core Web Vitals).

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
- Impressum vollständig ausgefüllt (Rechtsdaten aus RadiusOne-Projekt übernommen,
  § 5 DDG, EU-Streitschlichtung/Verbraucherschlichtung ergänzt).
- BSI/CSN-Formulierung site-weit vereinheitlicht (10 Stellen): CSN-Teilnahme, aber
  nicht Teil des BSI, kein Auftrag, Inhalte/Meinungen nicht vom BSI autorisiert.
- Kontakt-E-Mail auf `digitale-ersthilfe@novumanalytica.com` umgestellt (thematisch zuordenbar).
- **SEO/AEO/Auffindbarkeit** (Canonical-Domain: digitale-ersthilfe.novumanalytica.com):
  - `robots.txt` (KI-Bots wie GPTBot/ClaudeBot/PerplexityBot ausdrücklich erlaubt),
    `sitemap.xml`, **`llms.txt`** (kuratierte Inhaltskarte für LLMs) angelegt.
  - `<link rel="canonical">`, Open-Graph inkl. **OG-Image** (1200×630) und Twitter Cards
    auf allen 11 Seiten; Domain site-weit auf die Produktiv-Domain vereinheitlicht.
  - `BreadcrumbList`-Schema auf allen Unterseiten; `image` in HowTo/Article ergänzt;
    Organization um `logo` und `contactPoint` erweitert. Alle 26 JSON-LD-Blöcke valide.
  - Performance/Core Web Vitals: Font-`preload`, Infografiken von 2752px/~650 KB auf
    1400px/~300 KB verkleinert, `width`/`height` an Bildern (CLS behoben).
