# Handover — Mehrsprachigkeit (Sprach-Rollout)

Stand: **2026-07-21**. Ergänzt `docs/HANDOVER.md` (Gesamtprojekt) und `BACKLOG.md`.
Dieses Dokument macht die nächste Session ohne Rückfragen anschlussfähig für den Sprach-Rollout.

> ⚠️ **STRUKTUR-UMSTELLUNG (21.07.2026):** Alle Sprachen liegen jetzt unter **`sprachen/<code>/`** —
> auch **Deutsch unter `sprachen/de/`** (nicht mehr im Root). Die Homepage `/` ist eine **Weiterleitung**
> auf `/sprachen/de/`. **Beim Lesen des Prozesses unten gilt: `Root`/`/` → `sprachen/de/`, `en/` → `sprachen/en/`
> usw.** Konkrete Pfad-Folgen: geteilte Assets in Seiten via **`../../assets|css|js`**, Sprachumschalter via
> **`../<code>/<datei>`** (DE-Link = `../de/<datei>`), interne Links weiterhin **bloßer Dateiname**. Absolute
> URLs (canonical/hreflang/og/JSON-LD/Sitemap/SW): **`…novumanalytica.com/sprachen/<code>/<datei>`**.
> Das Umzugs-Skript liegt im Scratchpad (`restructure.py`) — Muster für künftige strukturelle Rewrites.

## 1. Aktueller Stand — 6 Sprachen VOLLSTÄNDIG live

| Sprache | Ordner | Seiten | Ursprung & Review-Status (Stand 21.07.2026) |
|---|---|---|---|
| Deutsch | `sprachen/de/` | 25 | **Original**, menschlich verfasst |
| English | `sprachen/en/` | 25 | maschinell übersetzt, **von Muttersprachler:in geprüft** |
| Русский | `sprachen/ru/` | 25 | maschinell übersetzt, **von Muttersprachler:in geprüft** |
| Українська | `sprachen/uk/` | 25 | maschinell übersetzt, **von Muttersprachler:in geprüft** |
| Türkçe | `sprachen/tr/` | 25 | maschinell übersetzt, **Prüfung ausstehend (pending)** |
| Italiano | `sprachen/it/` | 25 | maschinell übersetzt, **von Muttersprachler:in geprüft** |

### KI/Mensch-Kennzeichnung (21.07.2026, SW v38)
Auftraggeber-Vorgabe: DE menschlich; EN/RU/UK/IT maschinell + muttersprachlich geprüft; TR maschinell + pending.
Umgesetzt auf allen 150 Seiten:
- **Metadaten:** `<meta name="translation-status" content="…">` je Seite — DE „original, human-authored";
  geprüfte Sprachen „machine-translated from de; reviewed by native speaker"; TR „… pending native-speaker review".
- **Sichtbarer Content:** in Disclaimer-Kasten **und** Fußzeile je Sprache ein ehrlicher Satz („diese Fassung
  maschinell aus dem Deutschen übersetzt, geprüft von Muttersprachler:in bzw. **noch nicht** geprüft (TR);
  im Zweifel gilt das deutsche Original"). Die früher pauschale (für Übersetzungen unzutreffende) Aussage
  „alle Inhalte von menschlichen Autoren" wurde entfernt/auf das **deutsche Original** bezogen — auch in
  `impressum.html` und `ueber-uns.html` (dort stand ein verstärkter Autoren-/Redaktions-Claim im Body).
- **Bei TR-Freigabe / künftigen Sprachen:** Meta-Wert + sichtbare Notiz von „pending" auf „reviewed" umstellen
  (Skript-Muster: Scratchpad `kennzeichnung2.py`; Disclaimer-/Footer-Texte sind je Sprache mehrvariantig).

**150 Seiten** (+ Root-Weiterleitung `index.html`), alle 6 Sprachen **gegenseitig im Umschalter verlinkt**,
**vollständiges reziprokes `hreflang`-Netz** (de/en/ru/uk/tr/it + x-default auf ALLEN 150 Seiten mit
`…/sprachen/<code>/…`-URLs), `og:locale:alternate` vollständig, `sitemap.xml` (144 `<loc>`; `*/impressum.html`
als noindex NICHT enthalten), Service-Worker **v37** (Scope `/`, alle Seiten offline). Auf Branch
`restructure/sprachen-ordner` (Merge nach Freigabe).

**EN-Bugfix nebenbei (21.07.):** Die EN-Hub-Seiten (index/leitfaeden/fachinfo/kontaktstellen) verlinkten
Leitfäden fälschlich per `../leitfaden-*.html` → zeigte vor dem Umzug auf die **deutschen** Root-Guides
(falsche Sprache), nach dem Umzug 404. Auf bloße Dateinamen korrigiert (Konvention der anderen Sprachen).

Jede Sprache = **1 Startseite + 5 statische Seiten + 19 Leitfäden**. Dateinamen sind
in allen Ordnern identisch (`index.html`, `kontaktstellen.html`, `leitfaeden.html`, `fachinfo.html`,
`ueber-uns.html`, `impressum.html`, `leitfaden-*.html`).

### hreflang-Netz-Reparatur (21.07.2026)
Beim IT-Rollout entdeckt: der head-`<link rel="alternate">`-Block war auf **jeder** Seite auf ihren
Erstell-Sprachstand eingefroren (DE-Unterseiten hatten 0 Alternates); nur der sichtbare Umschalter war
vollständig. Deterministisch per Skript repariert — **alle 150 Seiten** haben jetzt den vollen reziproken
hreflang-Satz + komplettes `og:locale:alternate`. Für neue Sprachen gilt ab jetzt: den head-Block **auf allen
bestehenden Seiten** mitziehen (nicht nur eine Zeile anhängen), sonst wächst das Loch wieder.

## 2. Italienisch (IT) — ERLEDIGT (21.07.2026)

IT ist vollständig live: 25 Seiten (via Subagenten aus deutscher Quelle übersetzt, IT-Chrome aus
`it/index.html`, Verdrahtung gespiegelt von `tr/`), im Umschalter aller Sprachen verlinkt, hreflang/SW/Sitemap
ergänzt. **Sprachhinweis Schockanruf:** im Italienischen als „truffa telefonica / truffa del finto nipote"
gerendert (nicht wörtlich; „telefonata shock" wäre im IT zwar geläufig, wurde aber zugunsten der Konsistenz
mit dem Seitentitel vermieden). **Wie alle KI-Übersetzungen: muttersprachliche Kontrolle vor „final" offen.**

## 3. PROZESS pro Sprache (eingespielt, reproduzierbar)

Für eine neue Sprache `xx` (Ordner `xx/`):

**A) Chrome-Pilot `xx/index.html`** (falls noch nicht vorhanden): deutsche `index.html` in einfache Zielsprache
übersetzen, Struktur 1:1 wie `en/index.html`. Definiert das „Chrome" (Header/Nav/Umschalter/Fußzeile/A11y-Panel/
Banner) für alle weiteren Seiten dieser Sprache.

**B) Die 24 übrigen Seiten** (je 1 Subagent, „Fall B"): Chrome **1:1 aus `xx/index.html`** übernehmen, nur den
Seiteninhalt aus der jeweiligen **deutschen** Quelle übersetzen. Effizient: alle 24 parallel als Subagenten.

**Harte Regeln (in ALLEN Fassungen):**
- Struktur/Klassen/IDs/Reihenfolge exakt; nur Text übersetzen.
- **Unverändert:** Telefonnummern, §§ („§ 238 StGB" usw.) als Text, `gesetze-im-internet.de`-/`dsgvo-gesetz.de`-URLs,
  alle URLs/E-Mails/Emoji, `datetime`-Attribute; Impressum-Rechtsdaten (HRB, USt-IdNr., Namen, Adresse) + `robots noindex`.
- **Marke bleibt deutsch:** „Digitale Ersthilfe" (Logo `<span lang="de">…`, Titel/OG/Schema „Digitale Ersthilfe — <Tagline>").
- Deutsche Eigennamen (Weisser Ring, Hilfetelefon, TelefonSeelsorge, Nummer gegen Kummer, Online-Wache, Novum Analytica, …) in `<span lang="de">`.
- „DSGVO" NICHT zu „GDPR" (Gesetzesname). Kein `<a>` in JSON-LD. FAQ sichtbar ↔ FAQPage-Schema deckungsgleich.
  Schema `inLanguage:"xx"` (HowTo/Article/FAQPage/CollectionPage/ItemList/AboutPage/ContactPage/VideoObject/MedicalWebPage).
- `beitrag-datum`: `datetime` + Werte unverändert, nur Labels übersetzen (Monatsname darf lokalisiert werden).
- `leitfaden-vertrauliche-beweissicherung.html` hat einen **eigenen medizinischen Notfall-Banner (112/110)** —
  diesen in place übersetzen (nicht den generischen). `leitfaden-echo-stalking.html` + `-phishing-…` haben eine
  Video-Fassade; `echo-stalking` zusätzlich `VideoObject` (data-yt-id/uploadDate/duration unverändert).
  `leitfaden-stalkerware.html` hat eine Checkliste (Struktur beibehalten). `leitfaden-sextortion.html` hat den
  Abschnitt „Webcam-Erpressung".

**Kopf (`<head>`):** `<html lang="xx">`; Pfade `../`; canonical `/xx/<Datei>` (index `/xx/`);
**`hreflang`-Zeilen für ALLE bereits existierenden Sprachen + die neue + `x-default`** (x-default → deutsche Fassung);
`og:locale` = xx + `og:locale:alternate` für die anderen. Inline-Head-A11y-Script 1:1 (localStorage-Key bleibt `de-a11y`).

**Umschalter (`lang-menu`)** in `xx/index.html` und allen `xx/`-Seiten: die neue Sprache **aktiv**
(`<span class="lang-liste__aktiv" lang="xx" aria-current="true">…`, kein Badge); **alle bereits fertigen Sprachen als
echte Links** (`<a href="../<Seite>" lang="de" hreflang="de">Deutsch</a>`, `../en/<Seite>`, `../ru/<Seite>`,
`../uk/<Seite>`, `../tr/<Seite>` …); **noch nicht fertige Sprachen** bleiben „coming soon"-Spans mit Badge in der
Zielsprache. `summary`-Kürzel = Sprachcode groß (z. B. „IT").

**Nav `aria-current="page"`** auf den Menüpunkt der Seite (Leitfäden → das „Guides"-Label der Sprache; Label so, wie
es in `xx/index.html` steht). **Interne Links** (Nav, Triage, Verwandte Leitfäden, „alle Kontaktstellen") = **bloßer
Dateiname** (alle im selben `xx/`-Ordner). Nur der Umschalter nutzt `../`, `../en/` usw.

**C) Verdrahtung (ohne Subagenten, per Skript im Main-Loop):** auf **allen Seiten aller schon existierenden Sprachen**
den Eintrag der neuen Sprache von „…-bald"-Span auf echten Link umstellen und `hreflang` ergänzen. Rezept (Python,
`encoding='utf-8'`, **keine geraden `"` in Python-Doppelquote-Strings**):
- pro Zielordner Prefix bestimmen: Root=`''` → `href="xx/<Seite>"`; Unterordner → `href="../xx/<Seite>"`.
- Ersetze `<li><span class="lang-liste__bald"><bdi lang="xx">Native</bdi><span class="lang-liste__badge">BADGE</span></span></li>`
  durch `<li><a href="<prefix>xx/<Seite>" lang="xx" hreflang="xx">Native</a></li>`. Badge je Ordner:
  DE „in Vorbereitung", EN „coming soon", RU „скоро", UK „незабаром", TR „yakında".
- `hreflang="xx"`-Zeile nach der letzten vorhandenen `hreflang`-Zeile einfügen (index → `/xx/`, sonst `/xx/<Seite>`).
- Hinweistext (`lang-menu__hinweis`) auf DE/EN aktualisieren (RU/UK/TR-Hinweis optional).

**D) SW + Sitemap:** `sw.js` `CACHE_NAME` hochzählen und die 25 `/xx/…`-Pfade in `DATEIEN_ZUM_CACHEN` aufnehmen;
`sitemap.xml` um die `xx`-URLs ergänzen (**`xx/impressum.html` als `noindex` NICHT in die Sitemap**).

**E) Verifikation (zentral, Python):** je Seite JSON-LD `json.loads` (0 Fehler), `<a>`/`</a>` ausbalanciert,
`<html lang="xx">`, Umschalter-Links aller fertigen Sprachen vorhanden + neue Sprache aktiv, endet mit `</html>`,
kein deutscher Rest-Satz im sichtbaren Text (außer `lang="de"`-Eigennamen), keine „Juli"/„GDPR"-Reste (Monat/Akronym
angleichen). Danach 1 Browser-Check der Startseite. **Dann committen + pushen.**

## 4. WICHTIGE Gotchas / Learnings dieser Session

- **JSON-LD-Anführungszeichen-Bug:** Subagenten setzen in JSON-LD-`"text"`-Werten manchmal die deutsche ÖFFNENDE
  Kurzform `„` korrekt, aber eine **gerade `"` als Schließzeichen** → bricht den JSON-String. Symptom: „Expecting ',' delimiter".
  Fix: in den JSON-LD-Blöcken `„([^"„]*)"` → `„\1"` (gekrümmtes Schließzeichen `“`). Passierte in `tr/leitfaden-kinder-jugend.html` (behoben).
- **Session-Limit-Verhalten:** Ein 24-Agenten-Batch kann das Tageslimit sprengen (Reset Mitternacht Europe/Berlin).
  **Die Dateien werden atomar geschrieben** — abgebrochene Agenten hinterlassen oft **vollständige** Dateien, nur die
  Selbst-Validierung fehlt. **Vor Neu-Dispatch immer prüfen, welche `xx/`-Dateien schon existieren** und diese NICHT neu
  erzeugen; nur die wirklich fehlenden nachziehen, dann zentral verifizieren.
- **Verdrahtung + SW/Sitemap + Verifikation macht der Main-Loop selbst** (Skripte) — dafür braucht es keine Subagenten;
  auch bei Session-Limit möglich.
- **Marke bleibt deutsch** „Digitale Ersthilfe" (Entscheidung des Auftraggebers).
- **Register:** je Sprache die einfache/vereinfachte Sprachstufe (simplified English, einfaches Russisch usw.).
- **KI-Übersetzung** — **muttersprachliche Kontrolle vor „final"** ist ausdrücklich empfohlen (v. a. RU/UK/TR und
  künftig AR/FA). Nichts ist „redaktionell freigegeben".

## 5. Roadmap restliche Sprachen (bestätigtes Sprachset)

Reihenfolge zuletzt: **… TR ✅, IT ✅**. Danach aus dem Set:
**ES · AR · FR · PL · RO · BG · SR/HR/BS · SL · Farsi/Dari · Kurmanji · Griechisch · Vietnamesisch.**

- **RTL noch ungelöst:** **Arabisch (ar)** und **Farsi/Dari (fa)** brauchen `dir="rtl"` + CSS-Prüfung des Layouts
  (Header/Umschalter/Panel/Fließtext). Vor dem AR/FA-Rollout einplanen.
- Die **Verdrahtung wächst**: jede neue Sprache muss auf **allen** bereits existierenden Sprachordnern als Link
  ergänzt werden (Skript in §3C skaliert automatisch, wenn man die Ordnerliste erweitert).

## 5b. Muttersprachliche Korrekturen (ERLEDIGT 21.07.2026)
RU-Stalking-Korrektur, **UK-Korrekturen** (Hero, 7 Triage-Buttons, TelefonSeelsorge „психологічна підтримка"
durchgängig) und die **Schockanruf-Begriffsüberarbeitung** in `uk/` **und** `ru/leitfaden-schockanruf.html`
(Calque → „шахрайський дзвінок"/„мошеннический звонок") sind eingearbeitet, SW auf **v35**.
Details + eine für Re-Kontrolle markierte RU-Formulierungs-Abweichung: `docs/uebersetzung-korrekturen.md`.
**Offen:** muttersprachliche Re-Kontrolle der RU-Schockanruf-Formulierung; `og:locale:alternate` fehlt
projektweit für RU/UK/TR (bestehendes Rollout-Loch, nur OG-Hint, hreflang-Verbund ist vollständig).

## 6. Verweise
- Gesamtprojekt: `docs/HANDOVER.md` · offene Punkte/Prioritäten: `BACKLOG.md` (Abschnitt „Sprachversionen").
- SW-Version aktuell **v36**; nach jeder Sprach-Runde hochzählen.
- Die Übersetzungs-Specs dieser Session lagen im Scratchpad (`uebersetzung-spec-{en,ru,uk,tr,it}.md`) und sind
  **session-flüchtig** — der vollständige Prozess steht oben in §3, neue Sprach-Specs daraus ableiten.
