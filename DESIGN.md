# Design-System: Digitale Ersthilfe

## 1. Leitprinzip

**„Triage First"** — Diese Webseite ist keine Bibliothek, sondern eine Notfallstelle.
Jede Gestaltungsentscheidung wird daran gemessen, ob sie einer Person in einer Krise
hilft, schneller zur richtigen Information oder Kontaktstelle zu gelangen.

### Designgrundsätze

1. **Klarheit vor Ästhetik** — Kein Element darf die Lesbarkeit oder Navigation erschweren.
2. **Mobile first** — Der primäre Breakpoint ist unter 400px. Desktop ist die Erweiterung.
3. **Barrierefreiheit ist Pflicht** — WCAG 2.1 AA als Mindeststandard.
4. **Leichte Sprache** — Sprachniveau A2/B1. Keine Fachbegriffe ohne Erklärung.
5. **Offline-fähig** — Alle Inhalte müssen auch ohne Internet nutzbar sein (PWA).

---

## 2. Farben

Warme, ruhige Palette („Fürsorge statt Behörde") mit funktionalen Farbrollen.
Alle Werte sind CSS Custom Properties in `css/style.css` (`:root`):

| Rolle | Variable | Hex | Verwendung |
|---|---|---|---|
| Primär | `--farbe-primaer` | `#0f5f57` | Überschriften, Links, aktive Elemente (ruhiges Teal) |
| Primär hell | `--farbe-primaer-hell` | `#d6e8e2` | Hintergründe von Info-Karten, Kontakt-Icons |
| Akzent (warm) | `--farbe-akzent` / `-hell` | `#b5622a` / `#f7e4d3` | sparsame Wärme, z. B. Triage-Icons |
| Warnung | `--farbe-warnung` | `#8a4b00` | Warnhinweise, „Achtung"-Boxen |
| Kritisch | `--farbe-kritisch` | `#b3261e` | Notfall-Banner, „Wichtig"-Boxen |
| Erfolg | `--farbe-erfolg` | `#2e6b3f` | Tipps, positive Bestätigungen |

Oberflächen sind **warme Neutraltöne** statt kühlem Weiß: Hintergrund `#faf7f2` (Ivory),
Fläche `#ffffff`, sekundär `#f2ede4`, Text `#2a2520`, Rand `#e0d8cb`.

### Kein Glassmorphism, kein Tonal Layering

Tiefe wird ausschließlich durch Rahmen (`1px solid`) und dezente Schatten erzeugt.
Keine Transparenz-Effekte — sie kosten Performance auf günstigen Mobilgeräten.

### Dark Mode

Automatisch via `prefers-color-scheme: dark`. Alle Farbwerte haben Dark-Mode-Varianten
als CSS Custom Properties in `:root`.

---

## 3. Typografie

| Rolle | Schriftart | Verwendung |
|---|---|---|
| Überschriften | Plus Jakarta Sans (600–800) | h1–h4, Buttons, Logo |
| Fließtext | Inter (400–700) | Absätze, Listen, Labels |
| Dyslexie-Modus | OpenDyslexic (SIL OFL) | nur wenn im A11y-Panel aktiviert |

Alle Schriften sind **lokal** in `assets/fonts/` (woff2), keine externen Requests.
Die OFL-Lizenzdatei `OFL-OpenDyslexic.txt` muss im Repo bleiben.

### Schriftgrößen (Mobile-Basis)

- `--text-3xl`: 2rem — Seitentitel (h1)
- `--text-2xl`: 1.5rem — Abschnittstitel (h2)
- `--text-xl`: 1.25rem — Untertitel (h3)
- `--text-base`: 1rem — Fließtext
- `--text-sm`: 0.875rem — Nebentext, Disclaimer
- `--text-xs`: 0.75rem — Labels, Zeitangaben

Ab 900px Desktop-Breakpoint werden `--text-3xl` auf 2.5rem und `--text-2xl` auf 1.75rem erhöht.

---

## 4. Abstände und Layout

### Maximale Inhaltsbreite

- Standard: `800px` — Für Fließtext (optimale Lesbarkeit bei ~65 Zeichen pro Zeile)
- Breit: `1100px` — Für Kontaktkachel-Grids und Navigation

### Abstandsskala

- `--abstand-xs`: 0.25rem
- `--abstand-sm`: 0.5rem
- `--abstand-md`: 1rem
- `--abstand-lg`: 1.5rem
- `--abstand-xl`: 2rem
- `--abstand-2xl`: 3rem
- `--abstand-3xl`: 4rem

### Touch-Targets

Alle interaktiven Elemente haben eine Mindestgröße von **48 × 48 Pixel**.

---

## 5. Komponenten

### Notfall-Banner
- Sticky oben, roter Hintergrund (`--farbe-kritisch`), weißer Text
- Click-to-Call-Link zur Polizei (110)
- Immer sichtbar auf allen Seiten

### Triage-Buttons
- Große, klar beschriftete Kacheln
- Icon links, Text rechts
- Border-Hover-Effekt, kein Schatten-Hover
- Verlinken direkt zum passenden Leitfaden

### Kontakt-Kacheln
- Click-to-Call via `tel:`-Links
- Rundes Icon, Name, Nummer (fett, Primärfarbe), Zusatzinfo (Öffnungszeiten)
- Grid: 1 Spalte mobil, 2 Spalten Tablet, 3 Spalten Desktop

### Warn-/Info-/Erfolgs-Karten
- Linker Farbrand (4px) signalisiert den Typ
- Hinterlegt mit der hellen Variante der jeweiligen Signalfarbe
- Kein Schatten, klarer Rahmen

### Vorlese-Button
- Pill-Form, neben oder unter jeder Überschrift
- Toggle: „Vorlesen" / „Vorlesen stoppen"
- `aria-pressed` für Screenreader

### Fortschrittsanzeige
- Horizontale Segmente (je Schritt eines)
- Scrollabhängig: grau → blau (aktiv) → grün (fertig)

### Barrierefreiheits-Panel
- Runder Button (Rollstuhl-Icon) **rechts, vertikal mittig** (`#a11y-toggle`); Panel öffnet nach links
- Optionen: **Textgröße** stufenlos (100/115/130/150 %), **Hoher Kontrast**, **Graustufen**
  (Notfall-Banner bleibt farbig), **Dyslexie-freundlich** (OpenDyslexic), **Links hervorheben**,
  **Animationen reduzieren**, **Vorlesen per Klick** (Web Speech API des Geräts)
- Modi als `html.a11y-*`-Klassen + `html { font-size }`; Zustand in `localStorage` (`de-a11y`,
  JSON, keine Cookies); ein Inline-`<head>`-Script wendet alles vor dem ersten Paint an
- Neue Modi in drei Stellen ergänzen: Inline-Script, `main.js` (`A11Y_FLAGS`) und `style.css`

### Scroll-up-Button (`#scroll-top`)
- Rund, **unten rechts**; erscheint ab `scrollY > 600` (Klasse `is-visible`); scrollt nach oben
  (respektiert „Animationen reduzieren" bzw. `prefers-reduced-motion`)

### „Schnell verlassen" (Notausgang, `.schnell-verlassen`)
- Fixe Pille **unten links** (spiegelbildlich zum A11y-Zahnrad), dunkel, hoher Kontrast
- Auf **jeder** Seite; wechselt sofort zu einer neutralen Seite und ersetzt die aktuelle
  per `location.replace` (kein „Zurück"). **Doppeltes `Esc`** als zusätzlicher Notausgang
- Ohne JavaScript funktioniert der Link als normale Navigation
- Auf der Startseite ergänzt durch den Hinweis „Sind Sie sicher? Tipps zum unbeobachteten Surfen"

### Video-Fassade (`.video-fassade` / `.video-eingebettet`)
- DSGVO-freundliches **Click-to-Load** für YouTube: lokales Poster + Play-Button, es wird
  **nichts** von YouTube geladen, bis geklickt wird; dann Inline-`iframe` von `youtube-nocookie.com`
- Wiederverwendbar über `data-yt-id`; `<noscript>`-Fallback verlinkt das Video direkt
- Kann auch als reiner Kanal-Link (`<a class="video-fassade">`) genutzt werden

### FAQ (`.faq-item`)
- Aufklappbare `<details>`/`<summary>` mit +/−-Indikator
- Sichtbarer Text und `FAQPage`-Schema sind deckungsgleich (siehe Abschnitt 8)

### Entwurf-Banner (`.entwurf-banner`)
- Auffälliges diagonales Warnmuster für **unveröffentlichte** Leitfaden-Entwürfe
  (zusammen mit `noindex` und einem Redaktions-Anhang); wird beim Live-Schalten entfernt

---

## 6. Barrierefreiheit

- **Skip-Navigation**: Erster fokussierbarer Link auf jeder Seite
- **ARIA-Labels**: Für alle interaktiven Elemente ohne sichtbaren Text
- **Fokus-Indikatoren**: 3px Outline in Primärfarbe, 2px Offset
- **Kontrast**: Mindestens 4,5:1 für Fließtext, 3:1 für große Schrift
- **`lang="de"`** auf jedem HTML-Dokument
- **Reduzierte Bewegung**: `prefers-reduced-motion` deaktiviert Animationen
- **Bilder**: Echte `alt`-Texte (nicht dekorativ → `aria-hidden="true"`)

---

## 7. Do's und Don'ts

### Do
- Große Buttons mit klaren Handlungsaufforderungen
- Eine Aktion pro Bildschirm auf Mobilgeräten
- Farbcodierung konsistent verwenden (Rot = kritisch, Orange = Warnung, Blau = Info)
- Jede Seite beginnt mit einer 1–2-Satz-Zusammenfassung (AEO-Snippet)
- Jeder Leitfaden endet mit „Häufige Fragen" — sichtbar **und** als FAQPage-Schema (siehe Abschnitt 8)

### Don't
- Keine Sidebar-Navigation auf Mobilgeräten
- Keine Karusselle oder automatisch wechselnde Inhalte
- Keine Fachsprache ohne Erklärung
- Keine externen Tracking-Skripte oder Analytics
- Keine dekorativen Animationen
- Kein Tailwind-CDN oder andere schwere Frameworks

---

## 8. Pflicht-Struktur jeder Leitfaden-Seite (AEO)

Jeder Leitfaden folgt **immer** demselben Gerüst — das dient zugleich der
Antwort-Engine-Optimierung (AEO) und der Verständlichkeit für Betroffene:

1. **„Kurz erklärt"** — 1–2 Sätze direkt unter dem H1: Was ist passiert, was tun
   (die Antwort in einem Satz). Prägnante Zusammenfassung *und* AEO-Snippet zugleich.
2. **Schritt-für-Schritt-Anleitung** — nummerierte Schritte, als `HowTo`-Schema ausgezeichnet.
3. **„Häufige Fragen" (FAQ)** — am Seitenende, **sichtbar** (aufklappbare `.faq-item`)
   **und** als `FAQPage`-Schema. Die Fragen greifen die Kernaussagen des Leitfadens auf.
   Sichtbarer Text und Schema-Text sind **deckungsgleich**.
4. **Kontaktstellen** + Disclaimer.

> **Warum FAQ:** doppelter Nutzen — es ist eine kurze, prägnante Zusammenfassung der
> wichtigsten Punkte für Leserinnen und Leser **und** der stärkste AEO-Hebel, damit
> Suchmaschinen und LLMs die Antworten direkt zitieren können. Neue Leitfäden ohne
> FAQ gelten als unvollständig.

## 9. Hinweise zu Inhalten

- Alle Inhalte werden durch KI-gestützte Verfahren auf Lesbarkeit und Ausdruck geprüft.
- Bilder und Infografiken können KI-generiert oder KI-überarbeitet sein.
- Alle Inhalte haben originär menschliche Autorinnen und Autoren
  und werden redaktionell gegengelesen.
- Dieser Hinweis erscheint im Disclaimer jeder Seite und im Impressum.
