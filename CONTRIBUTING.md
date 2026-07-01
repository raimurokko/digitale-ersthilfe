# Mitmachen

Vielen Dank für Ihr Interesse, zur Digitalen Ersthilfe beizutragen!

## Repositories

Dieses Projekt besteht aus zwei Repositories, die jeweils auf GitHub und Codeberg gespiegelt werden:

### Website (dieses Repo)
- **GitHub:** [raimurokko/digitale-ersthilfe](https://github.com/raimurokko/digitale-ersthilfe)
- **Codeberg:** [raimu/digitale-ersthilfe](https://codeberg.org/raimu/digitale-ersthilfe)

### Materialien
- **GitHub:** [raimurokko/digitale-ersthilfe-materialien](https://github.com/raimurokko/digitale-ersthilfe-materialien)
- **Codeberg:** [raimu/digitale-ersthilfe-materialien](https://codeberg.org/raimu/digitale-ersthilfe-materialien)

## Simultane Synchronisation GitHub ↔ Codeberg

Beide Plattformen sollen immer denselben Stand haben. So richten Sie das ein:

### Variante 1: Zwei Push-URLs (empfohlen)

```bash
# Einmalig einrichten — für das Website-Repo:
cd digitale-ersthilfe
git remote set-url origin https://github.com/raimurokko/digitale-ersthilfe.git
git remote set-url --add --push origin https://github.com/raimurokko/digitale-ersthilfe.git
git remote set-url --add --push origin https://codeberg.org/raimu/digitale-ersthilfe.git

# Für das Material-Repo:
cd digitale-ersthilfe-materialien
git remote set-url origin https://github.com/raimurokko/digitale-ersthilfe-materialien.git
git remote set-url --add --push origin https://github.com/raimurokko/digitale-ersthilfe-materialien.git
git remote set-url --add --push origin https://codeberg.org/raimu/digitale-ersthilfe-materialien.git
```

Danach genügt ein einziges `git push`, um beide Plattformen gleichzeitig zu aktualisieren.

Prüfen Sie die Konfiguration mit:

```bash
git remote -v
```

Erwartete Ausgabe (Beispiel Website-Repo):

```
origin  https://github.com/raimurokko/digitale-ersthilfe.git (fetch)
origin  https://github.com/raimurokko/digitale-ersthilfe.git (push)
origin  https://codeberg.org/raimu/digitale-ersthilfe.git (push)
```

### Variante 2: Zwei separate Remotes

```bash
git remote add github https://github.com/raimurokko/digitale-ersthilfe.git
git remote add codeberg https://codeberg.org/raimu/digitale-ersthilfe.git

# Dann bei jedem Push:
git push github main
git push codeberg main
```

## Was Sie beitragen können

### Inhaltlich
- **Neue Leitfäden:** Schritt-für-Schritt-Anleitungen in einfacher Sprache
- **Kontaktstellen:** Aktualisierungen, neue Anlaufstellen, korrigierte Telefonnummern
- **Übersetzungen:** Leitfäden in anderen Sprachen
- **Fachinfo:** Technische Details, Checklisten, Tool-Empfehlungen

### Technisch
- **Barrierefreiheit:** Verbesserungen zur Zugänglichkeit
- **Performance:** Ladezeiten, Offline-Funktionalität
- **SEO / AEO:** Strukturierte Daten, Meta-Tags

## Qualitätsgrundsätze

- **Einfache Sprache:** Sprachniveau A2/B1. Keine Fachbegriffe ohne Erklärung.
- **Barrierefreiheit:** WCAG 2.1 AA als Mindeststandard.
- **Quellenangaben:** Rechtsgrundlagen und Quellen benennen.
- **TLP-Klassifizierung:** Alle Materialien mit TLP-Kennzeichnung versehen.
- **Kein Tracking:** Keine Analyse-Tools, keine Cookies, keine Werbung.

## Kontakt

info@novumanalytica.com
