# Handover — Digitale Ersthilfe

Stand: 2026-07-12. Dieses Dokument fasst den Projektstand zusammen, damit die nächste
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
| `sw.js` | Service Worker (Offline). **Cache-Version bei CSS/JS/Seiten-Änderungen hochzählen** (aktuell `v10`) |
| `robots.txt`, `sitemap.xml`, `llms.txt`, `security.txt`, `.well-known/` | Crawler/SEO/AEO/Security |
| `assets/fonts/` | Inter, Plus Jakarta Sans, **OpenDyslexic** (woff2, lokal) + OFL-Lizenz |
| `docs/leitfaden-auftrag.md` | **Recherche-/Schreib-Auftrag für neue Leitfäden** (Prompt-Vorlage) |
| `docs/video-skript-stalkerware.md` | fertiger Video-Skript-Entwurf (Echo-Stil) |

## Inhaltlicher Stand

**Live (12 Leitfäden, indexiert):** Account-Hack · Stalking · Echo-Überwachung · Phishing
(Signal/WhatsApp) · Vertrauliche Beweissicherung · **Bildbasierte Gewalt/NCII** · **Sextortion**
· **Stalkerware** (mit „Checkliste zum Abhaken") · **Digitale Trennung** · **Cybermobbing** ·
**Kinder & Jugendliche** (Cybergrooming) · **Doxing**.

Die drei zuletzt genannten waren SHOULD-Entwürfe; sie sind am **12.07.2026** faktengeprüft,
freigegeben und live geschaltet (ENTWURF-Banner/`noindex`/Redaktions-Anhang entfernt; in
Übersicht, Sitemap, SW, llms.txt, README, Startseiten-Triage verlinkt).

**Aktualitätsdaten:** Jeder Leitfaden zeigt „zuletzt überprüft/aktualisiert" (oben + Kasten
am Ende, `.beitrag-datum`); der Website-weite Stand steht auf `ueber-uns.html#aktualitaet`.

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
- **Nach CSS/JS-Änderung:** SW-`CACHE_NAME` hochzählen (returning users). Lokaler Browser-Cache
  ist beim Testen zäh — für echte JS-Tests hilft ein temporäres `?v=` am `<script src>`.
- **Rechtsdaten/BSI-Formulierung:** siehe Memory-Einträge; Quelle Impressum-Daten =
  RadiusOne `.../lib/site.ts`; „CSN-Teilnahme JA, aber nicht Teil des BSI / nicht autorisiert".

## Offene Punkte / nächste Schritte (Priorität)

1. ✅ **ERLEDIGT (12.07.2026): Faktencheck + Freigabe + Go-Live der 3 SHOULD-Entwürfe**
   (Cybermobbing, Kinder/Jugend, Doxing). Alle §§/Nummern/Behörden verifiziert (NetzDG→DSA/
   Bundesnetzagentur `dsc.bund.de`, § 176b, § 126a, § 51 BMG, HateAid 030 252 088 38 u. a.);
   sie sind jetzt live und verlinkt.
2. **🔴 P1 Erklärvideos** (starke Nutzernachfrage): pro Leitfaden ein kurzes YouTube-Video.
   Skript für Stalkerware liegt vor (`docs/video-skript-stalkerware.md`). Einbindung ist ein
   Handgriff: `data-yt-id` in die Video-Fassade + `VideoObject`-Schema. **Phishing-Video-ID fehlt**
   (Fassade dort verlinkt nur den Kanal). Echo-Video ist eingebunden (`zBPo3I_zDuo`).
3. 👤 **Rechtliche Go-Live-Punkte:** Datenschutz-Absatz zum extern geladenen Video ergänzen;
   Impressum-Daten gegen `novumanalytica.com/impressum` final prüfen; `security@`-Postfach routen.
4. **Materialien-Repo** (`digitale-ersthilfe-materialien` GitHub **und** Codeberg) **existiert noch
   nicht** — Material-Karten sind derzeit als „in Vorbereitung" markiert (nicht klickbar). Repo
   anlegen/befüllen, dann Markierung wieder auf echte Links umstellen.
5. **DNS** für die Produktiv-Domain setzen; **Codeberg-/GitLab-Spiegel** einrichten (siehe
   CONTRIBUTING.md); nach Go-Live **Sitemap in Search Console** einreichen.
6. **🟢 NICE:** Fake-Shops-/SIM-Swap-/Romance-Scam-Leitfaden; Sprachversionen (EN + Leichte
   Sprache); sichtbare Breadcrumbs; „Verwandte Leitfäden"-Verlinkung; responsive Bilder (srcset);
   sichtbares „Stand/geprüft am"-Datum je Leitfaden.

## Hinweise

- Der Generator, mit dem die Leitfaden-Entwürfe erzeugt wurden, lag im **Scratchpad** und ist
  **nicht im Repo**. Das ist kein Problem: Jede Leitfaden-Seite ist **eigenständiges HTML** — zum
  Anlegen/Ändern einfach eine bestehende Seite als Vorlage kopieren und anpassen (Format siehe
  DESIGN.md §8). Ein Generator ist Komfort, keine Voraussetzung.
- Alle Rechtsangaben/Telefonnummern/Menü-Pfade in den Leitfäden sind als „vor Go-Live prüfen"
  gedacht (Erstinformation, keine Rechtsberatung). Die Deepfake-Rechtslage war 03/2026 im Umbruch.
