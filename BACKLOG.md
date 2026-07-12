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

## 🔴🟠 Neue Leitfäden — bedarfs-priorisiert (kritische Content-Review)

> Reihenfolge nach **Häufigkeit + Leidensdruck** der Betroffenen, nicht nach
> vorhandenem Material. Alle redaktionell (👤); Recherche-/Entwurfs-Auftrag siehe
> [docs/leitfaden-auftrag.md](docs/leitfaden-auftrag.md).

**🔴 MUST — hier fehlt Betroffenen aktuell konkrete Hilfe:**
- [ ] 👤 **Bildbasierte Gewalt / NCII** (Rachepornos, Deepfakes, intime Bilder verbreitet):
  Takedown-Wege (StopNCII.org, „Take It Down" für Minderjährige, Plattform-Meldung),
  Beweissicherung, Rechtsweg (§§ 201a, 33 KUG u. a. — prüfen).
- [ ] 👤 **Sextortion / Sexerpressung**: Regeln (nicht zahlen, nicht löschen, Beweise
  sichern, anzeigen), Plattform-Meldung, Beratung.
- [ ] 👤 **Stalkerware / Spyware auf dem Handy**: Erkennen + **sicheres** Entfernen —
  mit Warnung, dass Entfernen die überwachende Person alarmieren kann; Sicherheitsplan.
- [ ] 👤 **Digitale Trennung**: Konten/Standort/Familienfreigabe/Smart-Home/Abos nach
  Trennung von gewalttätiger Person absichern (roter Faden für IPV-Betroffene).

**🟠 SHOULD:**
- [ ] 👤 **Cybermobbing / Hass im Netz — Handlungsleitfaden**: dokumentieren, bei Plattform
  nach DSA/NetzDG melden, Anzeige (§§ 185 ff.). (Triage „online belästigt" führt bisher
  nur auf Kontaktstellen, ohne Leitfaden.)
- [ ] 👤 **Kinder & Jugendliche**: Cybergrooming, Cybermobbing — für Eltern und Jugendliche.
- [ ] 👤 **Doxing**: veröffentlichte Daten — Takedown, DSGVO-Löschung, Meldung.
- [ ] Sichtbares **„Stand / geprüft am"-Datum** auf jedem Leitfaden (Datum steckt bisher
  nur im Schema `dateModified`).

**🟢 NICE:** Fake-Shops/Online-Betrug-Leitfaden · SIM-Swapping · Romance Scam ·
Account-Recovery (Google/Apple/Microsoft) · IoT/Smart-Home · rechtssichere Dokumentation ·
Sprachversionen (EN + Leichte Sprache, dann TR/AR/RU/UK) · PDF-Einzeiler pro Leitfaden.

- [ ] **Materialien-Repo** separat auf GitHub **und** Codeberg pushen; Dateiname mit
  führendem Leerzeichen korrigieren (`TLP-CLEAR _Beweissicherung_Leitfaden_Amazon_Echo…pdf`).
- [ ] **Codeberg- und GitLab-Spiegel** einrichten (Remotes + Sync, siehe CONTRIBUTING.md).

## 🟠 P2 — Video-Diffusion (YouTube & Social)

- [x] **Echo-Leitfaden**: Erklärvideo (`youtube.com/watch?v=zBPo3I_zDuo`) als
  DSGVO-Click-to-Load-Fassade (`youtube-nocookie.com`, lädt erst nach Klick, lokales
  Poster) eingebunden; `VideoObject`-Schema ergänzt. Wiederverwendbare Fassade
  (`.video-fassade[data-yt-id]` + `initVideoFassaden()` in app.js).
- [ ] 👤 **Phishing-Leitfaden**: eigene YouTube-Video-ID hinterlegen (die Fassade dort
  verlinkt bislang nur den Kanal). Dann auf dieselbe Click-to-Load-Fassade umstellen
  und `VideoObject` wieder ergänzen.
- [x] Echo-`VideoObject`: exaktes `uploadDate` (2026-03-26) und `duration` (PT5M29S) eingetragen.
- [ ] **Automatismus: Multi-Plattform-Distribution.** Pipeline, die aus einem neuen
  YouTube-Video automatisch Zuschnitte für **TikTok, Instagram (Reels), Facebook,
  Mastodon** (und weitere) erzeugt: vertikaler 9:16-Crop, Untertitel/Captions,
  Titel/Beschreibung + Link zum passenden Leitfaden, Thumbnail. Ziel: „ein Dreh →
  viele Kanäle" bei knappen Personalressourcen. Kandidaten prüfen (ffmpeg-Zuschnitt,
  Auto-Untertitel, Publer/Metricool/Buffer o. ä. für das Cross-Posting).
- [ ] 👤 **Weitere Social-Kanäle** (TikTok/Instagram/Facebook/Mastodon): sobald vorhanden,
  in Organization-`sameAs` und Footer ergänzen (YouTube ist bereits eingetragen).

## 🟠 P2 — Suche & Assistenz

- [ ] **Suchfeld** auf der Seite (löst die im Schema bewusst weggelassene `SearchAction` ein):
  clientseitige Volltextsuche über die Leitfäden/Kontaktstellen (z. B. vorab generierter
  JSON-Index + kleine JS-Suche wie Lunr/Pagefind — kein Server, DSGVO-freundlich, offline-fähig).
  Danach `WebSite`-`potentialAction`/`SearchAction` im Schema nachziehen.
- [ ] 👤 **Kleiner, lokaler „Frage-Antwort"-Assistent** auf Basis unseres Datenvorrats
  (Leitfäden/FAQ) — Idee zur Abwägung: kleines RAG/LLM, das Fragen aus unseren Inhalten
  beantwortet. Anmerkung: Die großen LLMs können das vermutlich ohnehin gut (u. U. besser);
  Nutzen vs. Aufwand/Betrieb/DSGVO später bewerten. Vorerst nur Notiz.

## 🟠 P2 — Hosting (Aufgabe 5)

- [x] **GitHub-Action** für Pages-Deployment angelegt und erfolgreich gelaufen —
  **Site ist live**: https://raimurokko.github.io/digitale-ersthilfe/
  (`configure-pages` hat Pages automatisch aktiviert; jeder Push auf `main` deployt).
- [ ] 👤 **DNS setzen** für die Produktiv-Domain: `digitale-ersthilfe.novumanalytica.com`
  als CNAME auf `raimurokko.github.io` zeigen lassen. Danach übernimmt GitHub die
  `CNAME`-Datei aus dem Repo; „Enforce HTTPS" in den Pages-Settings aktivieren.
  Hinweis: Service-Worker-Cache und Manifest nutzen Root-Pfade (`/…`) — korrekt für
  die Root-Custom-Domain; auf dem `github.io`-Unterpfad ist nur die PWA/Offline-Schicht
  eingeschränkt, die Seiten selbst funktionieren.
- [ ] **Codeberg Pages** einrichten (Spiegel).
- [ ] Nach Go-Live **Sitemap in Google Search Console** und Bing Webmaster Tools einreichen.

## 🟢 P3 — Politur & Technik

- [ ] 👤 **Postfach `security@novumanalytica.com`** einrichten/routen (in `security.txt` als
  Kontakt hinterlegt); `Expires`-Datum jährlich erneuern.
- [ ] **Sichtbare Breadcrumb-Leiste** in den Seitenkopf (Schema `BreadcrumbList` ist bereits da;
  sichtbare Variante fehlt noch — Google mag beides deckungsgleich).
- [ ] **„Verwandte Leitfäden"**-Verlinkung am Ende jedes Leitfadens (laterales Interlinking;
  Stalking-Leitfaden verlinkt bereits Account-Hack und Echo-Stalking).
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
- **FAQ** (sichtbar + `FAQPage`-Schema, deckungsgleich) auf `leitfaden-stalking` und
  `leitfaden-account-hack` ergänzt — aus dem Bestand abgeleitet. Struktur-Prinzip
  „Kurz erklärt + FAQ ist Pflicht" in DESIGN.md (Abschnitt 8) festgehalten.
- **Video**: GitHub-mp4-Einbettung entfernt (Video auf GitHub war ungeeignet); durch
  DSGVO-freundliche **YouTube-Fassade** ersetzt (`@novumanalytica`, lädt nichts vor Klick).
  YouTube in Organization-`sameAs` und in allen Fußzeilen verlinkt.
- **`security.txt`** (RFC 9116) unter `/.well-known/` und im Root angelegt.
- **Safety-Layer**: „Schnell verlassen"-Button (alle Seiten, `location.replace`, kein
  Zurück, doppeltes Esc als Notausgang) + Startseiten-Hinweis „unbeobachtet surfen".
- **Verbraucherzentrale-Links** integriert: Phishing-Radar, Fakeshop-Finder + Warnliste,
  Musterbriefe (digitale Welt / Datenschutz) sowie die Ratgeber „Erste Hilfe bei
  gehackten Onlinekonten" und „Ihre Daten, Ihre Rechte (DSGVO)" — jeweils an
  passender Stelle (Kontaktstellen, Phishing- und Account-Hack-Leitfaden).
- **Entscheidung (VZ-Warnungen):** Keine 1:1-Direktanzeige. Recherche ergab keinen
  offiziellen Feed/keine offene Lizenz; tägliche Eigen-Zusammenfassung wäre zu
  aufwändig. Daher nur Verlinkung. Klärung einer möglichen Kooperation erfolgt
  telefonisch durch das Team (kein schriftlicher Anfrage-Entwurf nötig).
