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

Vereinfachtes System mit fünf funktionalen Farbrollen:

| Rolle | Variable | Hex | Verwendung |
|---|---|---|---|
| Primär | `--farbe-primaer` | `#121f80` | Überschriften, Links, aktive Elemente |
| Primär hell | `--farbe-primaer-hell` | `#dfe0ff` | Hintergründe von Info-Karten, Highlights |
| Warnung | `--farbe-warnung` | `#9d4300` | Warnhinweise, „Achtung"-Boxen |
| Kritisch | `--farbe-kritisch` | `#ba1a1a` | Notfall-Banner, „Wichtig"-Boxen |
| Erfolg | `--farbe-erfolg` | `#006e2c` | Tipps, positive Bestätigungen |

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
- Schwebendes Zahnrad-Icon unten rechts
- Öffnet Popup mit Schaltern: Große Schrift, Hoher Kontrast, Vorlesen
- Einstellungen werden in `localStorage` gespeichert

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

### Don't
- Keine Sidebar-Navigation auf Mobilgeräten
- Keine Karusselle oder automatisch wechselnde Inhalte
- Keine Fachsprache ohne Erklärung
- Keine externen Tracking-Skripte oder Analytics
- Keine dekorativen Animationen
- Kein Tailwind-CDN oder andere schwere Frameworks

---

## 8. Hinweise zu Inhalten

- Alle Inhalte werden durch KI-gestützte Verfahren auf Lesbarkeit und Ausdruck geprüft.
- Bilder und Infografiken können KI-generiert oder KI-überarbeitet sein.
- Alle Inhalte haben originär menschliche Autorinnen und Autoren
  und werden redaktionell gegengelesen.
- Dieser Hinweis erscheint im Disclaimer jeder Seite und im Impressum.
