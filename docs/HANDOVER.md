# Handover — Digitale Ersthilfe

Stand: 2026-07-13. Dieses Dokument fasst den Projektstand zusammen, damit die nächste
Session (oder ein Teammitglied) ohne Rückfragen weiterarbeiten kann. Ergänzt README.md,
DESIGN.md, CONTRIBUTING.md und BACKLOG.md — dort stehen die Details.

## Was ist das

Barrierefreie, mobile-first **Hilfe-Website** in einfacher Sprache für Menschen in
Deutschland, die von digitaler Gewalt betroffen sind. Freiwilliger Service der
**Novum Analytica GmbH**. Reines HTML/CSS/JS, **kein Build-Schritt**, **keine externen
Requests** (DSGVO: keine CDNs, keine Cookies, keine Tracker; Fonts lokal).

- **Repo-Root:** dieses Verzeichnis · **origin:** `git@github.com:raimurokko/digitale-ersthilfe.git`
- **Live (GitHub Pages):** https://raimurokko.github.io/digitale-ersthilfe/
- **Produktiv-Domain (geplant):** `digitale-ersthilfe.novumanalytica.com` — `CNAME` liegt im
  Repo, **DNS fehlt noch** (CNAME auf `raimurokko.github.io`). Canonical/OG/Sitemap zeigen
  bereits auf die Produktiv-Domain.
- **Deploy:** GitHub-Action `.github/workflows/deploy-pages.yml` deployt jeden Push auf `main`.

## Struktur / wichtige Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Startseite (Triage „Was ist passiert?", Soforthilfe-Nummern, „Sicher surfen"-Box) |
| `leitfaeden.html` | Übersicht (Karten + `CollectionPage`/`ItemList`) — **hier neue Leitfäden eintragen** |
| `leitfaden-*.html` | die einzelnen Leitfäden (self-contained) |
| `kontaktstellen.html`, `fachinfo.html`, `ueber-uns.html`, `impressum.html` | weitere Seiten |
| `css/style.css` | gesamtes Design-System (Tokens `--farbe-*`, Dark Mode, A11y-Modi, Print) |
| `js/app.js` | Vanilla-JS (IIFE): Nav, Vorlesen, **A11y-Panel**, **Schnell-verlassen**, **Scroll-up**, **Video-Fassade**, PWA |
| `sw.js` | Service Worker (Offline). **Cache-Version bei CSS/JS/Seiten-Änderungen hochzählen** (aktuell `v27`) |
| `robots.txt`, `sitemap.xml`, `llms.txt`, `security.txt`, `.well-known/` | Crawler/SEO/AEO/Security |
| `assets/fonts/` | Inter, Plus Jakarta Sans, **OpenDyslexic** (woff2, lokal) + OFL-Lizenz |
| `docs/leitfaden-auftrag.md` | **Recherche-/Schreib-Auftrag für neue Leitfäden** (Prompt-Vorlage) |
| `docs/video-skript-stalkerware.md` | fertiger Video-Skript-Entwurf (Echo-Stil) |
| `docs/tools.md`, `docs/tools-fachanwender-luecken.md` | Fachanwender-Tools + Lückenliste (CLI/Forensik) |
| `.github/workflows/linkcheck.yml`, `.gitlab-ci.yml`, `.woodpecker/linkcheck.yml`, `.lycheeignore` | **CI-Link-Checker** (lychee) für GitHub/GitLab/Codeberg |

## Inhaltlicher Stand

**Live (19 Leitfäden, indexiert):** Account-Hack · Stalking · Echo-Überwachung · Phishing
(Signal/WhatsApp) · Vertrauliche Beweissicherung · **Bildbasierte Gewalt/NCII** · **Sextortion**
· **Stalkerware** (mit „Checkliste zum Abhaken") · **Digitale Trennung** · **Cybermobbing** ·
**Kinder & Jugendliche** (Cybergrooming) · **Doxing** · **Handy verloren/gestohlen** ·
**Identitätsdiebstahl** · **Online-Betrug** · **Ransomware** · **Romance Scam** · **SIM-Swapping** ·
**Schockanruf/KI-Stimme**. Der Sextortion-Leitfaden hat zusätzlich einen Abschnitt zur
**Fake-Sextortion-Massenmail**.

In der Session **12.–13.07.2026** von 9 auf **19 Leitfäden** ausgebaut (alle faktengeprüft,
live, in Übersicht/Sitemap/SW/llms.txt/README/Startseiten-Triage verlinkt). Zusätzlich:
**„Verwandte Leitfäden"**-Vernetzung am Ende jedes Leitfadens · **Sprach-Audit** (einfache
Sprache) über alle Seiten mit Fixes · **site-weiter Link-Audit** (tote externe Links behoben) ·
**CI-Link-Checker** (lychee) eingerichtet · neue **Fachanwender-Tool-Lückenliste**.

**Aktualitätsdaten:** Jeder Leitfaden zeigt „zuletzt überprüft/aktualisiert" (oben + Kasten
am Ende, `.beitrag-datum`); der Website-weite Stand steht auf `ueber-uns.html#aktualitaet`.

**„Verwandte Leitfäden":** jeder Leitfaden hat vor dem Aktualitäts-Kasten eine Sektion mit
2–3 internen Links auf thematisch nahe Leitfäden (Relatedness-Map, `.verwandte-liste`).

**Funktionen:** Triage · Click-to-Call · **Vorlesen** (Abschnitts-Buttons + „Vorlesen per Klick")
· **A11y-Panel** (Button rechts mittig: Textgröße, Hoher Kontrast, Graustufen, **Dyslexie/OpenDyslexic**,
Links hervorheben, Animationen reduzieren, Vorlesen) · **Scroll-up** (unten rechts) ·
**Schnell verlassen** (unten links → `dwd.de` via `location.replace`) · **YouTube-Video-Fassade**
(Click-to-Load, `youtube-nocookie`) · **FAQ** (sichtbar + `FAQPage`-Schema).

## Konventionen (unbedingt beachten)

- **UTF-8, immer.** Bei Massen-Ersetzungen **kein `perl` mit Nicht-ASCII im Ersatztext**
  (verursacht Mojibake — ist in dieser Session mehrfach passiert). Stattdessen **Python mit
  `encoding='utf-8'`** und `.replace()`; in Python-`"..."`-Strings **keine geraden `"`** als
  deutsche Anführungszeichen (`„…“` nutzen, sonst SyntaxError).
- **Neue Leitfäden:** Prozess in [CONTRIBUTING.md](../CONTRIBUTING.md) („Neuen Leitfaden erstellen")
  und Pflichtformat in [DESIGN.md](../DESIGN.md) §8 („Kurz erklärt" → Schritte/HowTo → FAQ →
  Kontakte → Disclaimer). Recherche-Auftrag: `docs/leitfaden-auftrag.md`.
- **Entwurf → Live:** `noindex`/ENTWURF-Banner/Redaktions-Anhang entfernen; `index, follow`,
  Canonical, OG-Image, Twitter Card, BreadcrumbList ergänzen; in `leitfaeden.html` (Karte +
  ItemList), `sitemap.xml`, `sw.js` (Version++), `llms.txt`, README eintragen; ggf. Triage
  auf der Startseite verknüpfen.
- **A11y-Modus hinzufügen:** an DREI Stellen pflegen — Inline-`<head>`-Script (jede Seite),
  `js/app.js` (`A11Y_FLAGS`) und `css/style.css` (`html.a11y-*`). Zustand: `localStorage 'de-a11y'`.
- **Nach CSS/JS-/Seiten-Änderung:** SW-`CACHE_NAME` hochzählen (returning users; aktuell `v27`).
  Lokaler Browser-Cache ist beim Testen zäh; per curl gegen den lokalen Server prüft man den
  echten Auslieferungsstand (umgeht den SW).
- **Links:** Nur **sichtbaren** Text verlinken — **kein `<a>` in JSON-LD-Schema-Strings** (macht
  das JSON ungültig/unschön). Neue **externe** Links vor dem Setzen per `WebFetch` (echter
  HTTP-Status) prüfen — externe Seiten ziehen um/verschwinden (in dieser Session: Polizei-Stalking-
  Seite umgezogen, NO-STALK-App eingestellt). Der **CI-Link-Checker** (lychee) prüft automatisch;
  bewusste Ausnahmen in `.lycheeignore`.
- **Verwandte Leitfäden:** neue Leitfäden gegenseitig im „Verwandte Leitfäden"-Abschnitt verlinken.
- **Aktualitätsdatum:** bei inhaltlicher Änderung das `aktualisiert`-Datum (sichtbar **und** Schema
  `dateModified`) hochsetzen; nach Faktenprüfung `überprüft`. Achtung: das sichtbare Datum nutzt ein
  geschütztes Leerzeichen (`12.&nbsp;Juli`) — bei Skript-Ersetzungen die nbsp-Variante mit-ersetzen.
- **Rechtsdaten/BSI-Formulierung:** siehe Memory-Einträge; Quelle Impressum-Daten =
  RadiusOne `.../lib/site.ts`; „CSN-Teilnahme JA, aber nicht Teil des BSI / nicht autorisiert".

## Offene Punkte / nächste Schritte (Priorität)

1. **🔴 P1 Erklärvideos** (starke Nutzernachfrage): pro Leitfaden ein kurzes YouTube-Video.
   Skript für Stalkerware liegt vor (`docs/video-skript-stalkerware.md`). Einbindung ist ein
   Handgriff: `data-yt-id` in die Video-Fassade + `VideoObject`-Schema. **Phishing-Video-ID fehlt**
   (Fassade dort verlinkt nur den Kanal). Echo-Video ist eingebunden (`zBPo3I_zDuo`).
2. 👤 **Rechtliche Go-Live-Punkte:** Datenschutz-Absatz zum extern geladenen Video ergänzen;
   Impressum-Daten gegen `novumanalytica.com/impressum` final prüfen; `security@`-Postfach routen.
3. **Materialien-Repo** (`digitale-ersthilfe-materialien` GitHub **und** Codeberg) **existiert noch
   nicht** — Links darauf stehen nur in der Doku (in `.lycheeignore` ausgenommen). Repo anlegen/
   befüllen, dann Material-Karten auf echte Links umstellen.
4. **DNS** für die Produktiv-Domain setzen; **Codeberg-/GitLab-Spiegel** einrichten (CI-Link-Check-
   Configs liegen bereit und greifen nach dem Spiegeln); nach Go-Live **Sitemap in Search Console**.
5. **🟢 „Alles verlinken":** **erledigt (13.07.2026).** Alle 19 Leitfäden haben klickbare §§
   (59 Links, StGB/KUG/BMG/GewSchG → gesetze-im-internet.de, DSGVO → dsgvo-gesetz.de) sowie
   Org-Homepage-Links (14: Hilfetelefon/Weisser Ring/Nummer gegen Kummer/Verbraucherzentrale) und
   interne Fließtext-Querverweise. „BSI" bewusst nie verlinkt (CSN-Disclaimer). Nur optionaler
   Feinschliff offen — Details in BACKLOG.md.
6. **🟢 Eigenes „Vorfall-Tagebuch"-Tool** (NO-STALK-App eingestellt; „Stalking-Tagebuch" ist
   ambivalent → Naming) **und AirGuard-Review** (letztes Update 05/2025; iOS/Android-Bordmittel als
   Alternative) — Details in BACKLOG.md.
7. **🟢 Neue Content-Säule „Alltagshilfe & Entwarnung"** (häufige Alltagssorgen einordnen statt
   verharmlosen; z. B. Akku leer, langsames WLAN, komische Router-Gerätenamen, Account-Recovery) —
   siehe BACKLOG.md.
8. **🟢 Reichweite:** Leichte Sprache + EN, PDF-Merkblätter, sichtbare Breadcrumbs, Vorlese-Audio,
   responsive Bilder; **A11y/Lighthouse-CI** (Link-Checker-CI ist bereits eingerichtet).

## Hinweise

- Der Generator, mit dem die Leitfaden-Entwürfe erzeugt wurden, lag im **Scratchpad** und ist
  **nicht im Repo**. Das ist kein Problem: Jede Leitfaden-Seite ist **eigenständiges HTML** — zum
  Anlegen/Ändern einfach eine bestehende Seite als Vorlage kopieren und anpassen (Format siehe
  DESIGN.md §8). Ein Generator ist Komfort, keine Voraussetzung.
- Alle Rechtsangaben/Telefonnummern/Menü-Pfade in den Leitfäden sind als „vor Go-Live prüfen"
  gedacht (Erstinformation, keine Rechtsberatung). Die Deepfake-Rechtslage war 03/2026 im Umbruch.
