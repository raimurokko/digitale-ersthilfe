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

**🔴 MUST — Status: freigegeben und LIVE ✅**
> Alle vier MUST-Leitfäden sind redaktionell freigegeben und live geschaltet:
> in `leitfaeden.html` (Karten + ItemList), `sitemap.xml`, Service-Worker (v5),
> Startseiten-Triage (Gerät → Stalkerware) und `llms.txt` eingebunden; `noindex`
> und ENTWURF-Banner entfernt. **Weiterhin offen:** die in den (jetzt entfernten)
> Redaktions-Anhängen markierten Punkte bleiben gültig — insb. Deepfake-Rechtslage
> (im Umbruch), §§, Telefonnummern und Menü-Pfade **periodisch gegenprüfen**.
- [x] **Bildbasierte Gewalt / NCII**, **Sextortion**, **Stalkerware**, **Digitale Trennung** — live.

Frühere Beschreibung (alle erledigt / live):
- [x] 👤 **Bildbasierte Gewalt / NCII** (Rachepornos, Deepfakes, intime Bilder verbreitet):
  Takedown-Wege (StopNCII.org, „Take It Down" für Minderjährige, Plattform-Meldung),
  Beweissicherung, Rechtsweg (§§ 201a, 33 KUG u. a. — prüfen).
- [x] 👤 **Sextortion / Sexerpressung**: Regeln (nicht zahlen, nicht löschen, Beweise
  sichern, anzeigen), Plattform-Meldung, Beratung. (Zusätzlich: Abschnitt Fake-Sextortion-Mail.)
- [x] 👤 **Stalkerware / Spyware auf dem Handy**: Erkennen + **sicheres** Entfernen —
  mit Warnung, dass Entfernen die überwachende Person alarmieren kann; Sicherheitsplan.
- [x] 👤 **Digitale Trennung**: Konten/Standort/Familienfreigabe/Smart-Home/Abos nach
  Trennung von gewalttätiger Person absichern (roter Faden für IPV-Betroffene).

**🟠 SHOULD:** — Entwürfe erstellt (noindex, unverlinkt), **Faktencheck erledigt**, Freigabe ausstehend
- [x] **Cybermobbing / Hass im Netz** — Entwurf `leitfaden-cybermobbing.html`.
  ✓ Faktencheck 12.07.2026: NetzDG zum 14.05.2024 aufgehoben, DSA seit 17.02.2024 (dt.
  Umsetzung DDG), Bundesnetzagentur = Koordinator für digitale Dienste (dsc.bund.de) —
  **bestätigt**. §§ 185/186/187/241/130 StGB, HateAid 030 252 088 38, Weisser Ring 116 006
  (tägl. 7–22) bestätigt.
- [x] **Kinder & Jugendliche** (Cybergrooming/Cybermobbing) — Entwurf
  `leitfaden-kinder-jugend.html`. ✓ Faktencheck 12.07.2026: § 176b StGB („Vorbereitung des
  sexuellen Missbrauchs", 3 Mon.–5 J.), Nummer gegen Kummer 116 111 / Eltern 0800 111 0 550
  bestätigt (die alternative 0800 111 0 333 ist ebenfalls gültig).
- [x] **Doxing** — Entwurf `leitfaden-doxing.html`. ✓ Faktencheck 12.07.2026: § 126a StGB
  (seit 22.09.2021), § 51 BMG (Sperre 2 J., verlängerbar), § 238 StGB, Art. 17 DSGVO bestätigt.
  **HateAid-Nummer jetzt verifiziert** (030 252 088 38) → im Entwurf ergänzbar.
- [x] Diese drei Entwürfe redaktionell **freigegeben** und live geschaltet (12.07.2026):
  ENTWURF-Banner/`noindex`/Redaktions-Anhang entfernt; in Übersicht (Karte + ItemList),
  sitemap.xml, sw.js (v12), llms.txt, README und Startseiten-Triage (Cybermobbing + Doxing)
  eingetragen; Aktualitätsdatum = Freigabedatum.
- [x] Sichtbares **„zuletzt überprüft / aktualisiert"-Datum** auf jedem Leitfaden (oben unter dem
  Titel + Kasten am Ende, `.beitrag-datum`) **und** Website-weit auf `ueber-uns.html#aktualitaet`;
  Schema `datePublished`/`dateModified` ergänzt.

**Themen-Roadmap neue Leitfäden — Stand 13.07.2026: alle priorisierten Themen LIVE ✅**
In dieser Iteration von **13 auf 19 Leitfäden** ausgebaut; jeder faktengeprüft, live
geschaltet und in Übersicht (Karte + ItemList), sitemap.xml, sw.js, llms.txt, README und
Startseiten-Triage eingebunden.

🔴 _Top-Lücken (erledigt):_
- [x] **Handy verloren/gestohlen** (`leitfaden-handy-verlust.html`) — live 12.07.2026.
- [x] **Identitätsdiebstahl / Fake-Profil** (`leitfaden-identitaetsdiebstahl.html`) — live 12.07.2026.
- [x] **Online-Betrug: Fake-Shops & Anlage-/Krypto-Betrug** (`leitfaden-online-betrug.html`) — live 12.07.2026.

🟠 _Wichtig (erledigt):_
- [x] **Ransomware / Gerät gesperrt oder verschlüsselt** (`leitfaden-ransomware.html`) — live 13.07.2026.
- [x] **Romance/Love Scam** (`leitfaden-romance-scam.html`) — live 13.07.2026.
- [x] **SIM-Swapping** (`leitfaden-sim-swapping.html`) — live 13.07.2026.

🟢 _Kurz (erledigt):_
- [x] **Fake-Sextortion-Massenmail** — als Abschnitt „Sonderfall: Webcam-Erpressung" im Sextortion-Leitfaden (13.07.2026).
- [x] **Deepfake-/Voice-Clone-Schockanruf** (`leitfaden-schockanruf.html`, „Enkeltrick 2.0") — live 13.07.2026.

**🟢 Weitere Themen-Ideen (offen, niedrige Prio):** Account-Recovery (Google/Apple/Microsoft) ·
IoT/Smart-Home · rechtssichere Dokumentation · gehackter Messenger-Account (WhatsApp-Code-Betrug) ·
Kryptowallet-Diebstahl · Fake-Gewinnspiele/Abo-Fallen.

## 🟢 Alltagshilfe & Entwarnung (digitale Grundbildung)

> **Idee (13.07.2026):** Neben den Krisen-Leitfäden sollten wir auch die **wiederkehrenden
> Alltagssorgen** rund um Technik aufgreifen — Fragen, die viele Menschen umtreiben und die
> oft als „Werde ich überwacht/gehackt?" missverstanden werden, obwohl die Ursache meist
> **harmlos und alltäglich** ist.
>
> **Wichtige Rahmung — Einordnen, nicht verharmlosen:** Erst **Entwarnung + Erklärung**
> („das ist normal, und so prüfen Sie es"), aber **immer** ein klarer Pfad „Wann ist es doch
> ein Warnzeichen?" mit Verweis auf den passenden Krisen-Leitfaden. Betroffene von Stalking/
> Beziehungsgewalt dürfen sich nicht abgewimmelt fühlen. Ruhiger, ermutigender Ton, einfache
> Sprache. Format: kurze FAQ-/Einordnungs-Leitfäden oder eine Sammelseite „Häufige Sorgen —
> erste Einordnung" (ggf. mit einfacher Entscheidungshilfe „harmlos oder Warnzeichen?").

- [ ] **a) „Komische Zeichen/Symbole am Bildschirm"** (Statussymbole, Akku-/Firmware-Update-
  Hinweise, Benachrichtigungen) — erklären, was normale Symbole bedeuten; Entwarnung.
- [ ] **b) „Mein WLAN ist langsam"** — Alltagsursachen (Entfernung/Wände, Auslastung, veralteter
  Router, Router-Neustart, Kanalwahl) statt „gehackt"; einfache Selbsthilfe.
- [ ] **c) „Im Router sehe ich komische Gerätenamen"** (Android TV, „Bluetooth des TV", IoT/
  Smart-Home) — meist harmlose eigene Geräte; erklären, wie man Geräte zuordnet — und **wann**
  es doch ein Warnzeichen ist → Verweis [Echo-Überwachung] / [Stalkerware].
- [ ] **d) „Backup und Updates sind essenziell"** — Grundlagen-Leitfaden: regelmäßige Backups
  + Updates schützen vor Datenverlust, Ransomware und Sicherheitslücken → Verweis [Ransomware].
- [ ] **e) „Handy-Akku wird schnell leer"** — häufigste Ursachen sind **normal**: Bluetooth/WLAN/
  GPS an, Hintergrund-Apps, Display-Helligkeit, alter Akku — **nicht nur** Spionage-Software;
  Entwarnung + wann doch prüfen → Verweis [Stalkerware].
- [ ] **f) „Neustart/Herunterfahren hilft"** — Grundlagen: viele Probleme löst ein Neustart;
  regelmäßiges Herunterfahren ist gesund; wie man richtig neu startet.
- [ ] **g) „Kein Zugriff mehr auf mein Google-/Apple-/Microsoft-Konto"** — Account-Recovery-
  Leitfaden (Wiederherstellungswege der Anbieter, Backup-Codes, was ohne Zugriff geht);
  ergänzt [Konto gehackt].
- [ ] **h) Weitere wiederkehrende Alltagsfragen** laufend sammeln (z. B. „Speicher voll",
  „Pop-ups/Werbung", „Update lädt nicht", „Kamera-/Mikrofon-Symbol leuchtet", „unbekannte
  Abbuchung im App-Store", „SMS von unbekannter Nummer") — aus Nutzerfragen/Beratung speisen.

## 🟢 Eigene Werkzeuge & Tool-Reviews

- [ ] **Eigenes „Vorfall-Tagebuch" (digitale Doku-Hilfe) erwägen** — als schlanke, lokale
  PWA/Formular (DSGVO-konform, ohne Server; Export als PDF). Hintergrund: Die frühere
  **NO-STALK-App des Weißen Rings wurde zum 01.06.2025 eingestellt** → es fehlt eine
  niedrigschwellige digitale Dokumentationshilfe. **Naming beachten:** „Stalking-Tagebuch"
  ist ambivalent und kann abschreckend wirken — neutraler benennen (z. B. „Vorfall-Protokoll",
  „Beweis-Tagebuch", „Doku-Helfer"). Über mehrere Leitfäden nutzbar (Stalking, Cybermobbing,
  Doxing, Bildbasierte Gewalt, Betrug).
- [ ] **AirGuard-Review** (aktuell im Stalking-Leitfaden verlinkt): im Text kurz erklären,
  **was** es ist — kostenlose Open-Source-App der TU Darmstadt, die fremde Bluetooth-Tracker
  (AirTags, Samsung SmartTags, Tile) findet. **Achtung:** letztes Update Mai 2025 (v1.4) —
  Pflegezustand bei nächster Prüfung erneut checken. **Ergänzen/alternativ:** die in **iOS**
  („Wo ist?") und **Android** („Unbekannte Tracker finden") **eingebauten** Tracker-Warnungen —
  oft ausreichend und stets aktuell; ggf. Bordmittel priorisieren.

## 🟠🟢 Reichweite & Zugänglichkeit

> Sammelstelle für Reichweiten- und Zugänglichkeitsoptimierungen. Hinweis: Die Bestandstexte
> sind bereits **einfache Sprache**; „Leichte Sprache" ist die strengere Extra-Stufe.

- [x] **Sprach-Audit „einfache/zugängliche Sprache"** über alle 19 Leitfäden + Startseite +
  Kontaktstellen durchgeführt (13.07.2026), Verständlichkeits-Fixes eingepflegt.
- [x] **„Verwandte Leitfäden"** — laterale Verlinkung am Ende jedes Leitfadens (13.07.2026).
- [ ] **„Alles Erwähnte verlinken"** — Gesetze (gesetze-im-internet.de), Behörden/Portale, Apps
  und interne Leitfäden konsequent klickbar machen (Vertrauens-/Einstiegsportal-Effekt).
  Im **Stalking-Leitfaden umgesetzt** (13.07.2026: §§ 238/185/201a/202a/223/241 StGB, SGB XIV,
  Gewaltschutzgesetz, Familiengericht-Finder justiz, NO STALK, Stalking-Tagebuch, AirGuard,
  interne Verweise). **TODO: gleiches Muster auf die übrigen Leitfäden ausrollen.** Nur
  **sichtbaren** Text verlinken — kein `<a>` in JSON-LD-Schema-Strings.
- [ ] **Leichte Sprache** (formal): eigene, streng vereinfachte Fassung je Leitfaden
  (ein Gedanke pro Satz, Worterklärungen, Bilder).
- [ ] **Sprachversionen**: EN zuerst, dann TR/AR/RU/UK (`hreflang`, Sprachumschalter).
- [ ] **PDF-Merkblatt/Einzeiler** pro Leitfaden (druck-/aushangfähig; wichtig für ältere
  Zielgruppen, z. B. Schockanruf/Enkeltrick).
- [ ] **Vorlese-Audio/Podcast-Fassung** je Leitfaden (Audiodatei zusätzlich zum Browser-Vorlesen).
- [ ] **Sichtbare Breadcrumb-Leiste** im Seitenkopf (Schema `BreadcrumbList` ist bereits vorhanden).
- [ ] **Responsive Bilder** (`srcset`/WebP) für Infografiken.

**Erledigt am 12.07.2026 (Ressourcen/Links, kein eigener Leitfaden nötig):**
- [x] Online-Wache als **klickbarer** Link in allen anzeigenden Leitfäden vereinheitlicht
  (`portal.onlinewache.polizei.de/de/`).
- [x] **Datenleck-Check** (HPI ILC + Have I Been Pwned) auch zentral in `kontaktstellen.html`
  (IT-Sicherheit) — war bisher nur im Account-Hack-Leitfaden.
- [x] **StopNCII.org** (Erwachsene) im Sextortion-Leitfaden ergänzt (war nur „Take It Down"/Minderjährige).
- [x] **Fachanwender-Tool-Lückenliste** angelegt: `docs/tools-fachanwender-luecken.md`
  (CLI-Bordmittel mac/Win/Linux, Mobilgeräte-Forensik, Malware-/Timeline-Forensik, OSINT).

- [ ] **Materialien-Repo** separat auf GitHub **und** Codeberg pushen; Dateiname mit
  führendem Leerzeichen korrigieren (`TLP-CLEAR _Beweissicherung_Leitfaden_Amazon_Echo…pdf`).
- [ ] **Codeberg- und GitLab-Spiegel** einrichten (Remotes + Sync, siehe CONTRIBUTING.md).
  Die CI-Link-Check-Configs (`.gitlab-ci.yml`, `.woodpecker/linkcheck.yml`) liegen bereits im
  Repo und greifen automatisch nach dem Spiegeln.

## 🔴 P1 — Erklärvideos ausbauen (starke Nutzernachfrage)

> **Erkenntnis aus der Praxis:** Die Erklärvideos kommen sehr gut an — viele Menschen
> schauen lieber ein kurzes Video, als Text zu lesen. Video ist damit ein
> **Priorität-1-Kanal**, nicht nur Beiwerk.

- [ ] 👤 **Pro Leitfaden ein kurzes Erklärvideo** (YouTube `@novumanalytica`), zuerst für
  die vier neuen MUST-Themen (NCII, Sextortion, Stalkerware, Digitale Trennung) und die
  Phishing-Seite. Einbindung über die bestehende **DSGVO-Click-to-Load-Fassade**
  (`.video-fassade[data-yt-id]`) — nur Video-ID eintragen; ich ergänze `VideoObject`-Schema.
- [ ] **Video prominenter platzieren**: Erklärvideo weiter oben im Leitfaden anbieten
  (nach „Kurz erklärt“), da viele es dem Text vorziehen — Text bleibt als Volltext/zum Vorlesen.
- [ ] 👤 **Phishing-Video-ID** nachreichen (Fassade verlinkt bislang nur den Kanal).

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
- [ ] `schema.org thumbnailUrl/contentUrl` im Phishing-Leitfaden auf lokale/finale URLs umstellen.
  (Breadcrumb-Leiste, „Verwandte Leitfäden", responsive Bilder → siehe „Reichweite & Zugänglichkeit".)
- [ ] Echtes **favicon.ico** (Multi-Size) zusätzlich zu PNG/SVG.
- [x] **CI Link-Checker** (lychee) eingerichtet (13.07.2026): GitHub-Action
  `.github/workflows/linkcheck.yml` (Push/PR/main, wöchentlich Mo, manuell; öffnet bei
  geplanten Läufen ein Issue). Fertige Spiegel-Configs `.gitlab-ci.yml` und
  `.woodpecker/linkcheck.yml`; Ausnahmen in `.lycheeignore`.
- [ ] **CI**: automatisiertes A11y/Lighthouse-Audit (WCAG-AA, Core Web Vitals).

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
