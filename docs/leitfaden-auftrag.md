# Auftrag: Leitfaden recherchieren & entwerfen

Diese Vorlage gibst du einer KI (z. B. Claude) oder einer Autorin/einem Autor, um einen
**neuen Leitfaden** für *Digitale Ersthilfe* zu recherchieren und zu entwerfen. Ziel ist
ein redaktionsreifer Entwurf, der von einem Menschen geprüft und freigegeben wird.

> **Wichtig:** Der Entwurf ist **kein** fertiger Text zum Sofort-Veröffentlichen.
> Jeder Leitfaden zu Gewaltthemen wird **redaktionell gegengelesen und freigegeben**,
> Rechtsangaben und Telefonnummern werden vor Go-Live verifiziert.

---

## Prompt-Vorlage (kopieren, `{THEMA}` einsetzen)

```
Du recherchierst und entwirfst einen Leitfaden für die Website „Digitale Ersthilfe“
(digitale-ersthilfe.novumanalytica.com) – ein kostenloses, barrierefreies Hilfeangebot
in einfacher Sprache für Menschen in Deutschland, die von digitaler Gewalt betroffen sind.

THEMA: {THEMA}

Halte dich strikt an die Datei „Auftrag: Leitfaden recherchieren & entwerfen“
(Kontext, Zielgruppe, Pflicht-Format, Ton, Sicherheits- und Quellenanforderungen,
Output). Liefere am Ende: (1) den Leitfaden-Entwurf im Pflicht-Format, (2) eine
Quellenliste mit Links und Abrufdatum, (3) alle Unsicherheiten/offenen Fragen markiert,
(4) Vorschläge für passende Kontaktstellen. Erfinde nichts – kennzeichne Lücken.
```

---

## 1. Kontext & Zielgruppe

- **Betroffene (Laien)** in akuter Belastung – oft wenig technisches Wissen, evtl. Angst,
  Zeitdruck, lesen ggf. **auf einem überwachten Gerät**.
- Auch **Digitale Ersthelfer:innen** und **CSN-Praktiker:innen** nutzen die Seite.
- Die Seite ist ein **freiwilliger, unabhängiger** Service der Novum Analytica GmbH.
  **CSN-Teilnahme ja, aber nicht Teil des BSI, kein Auftrag, keine autorisierten
  BSI-Inhalte** – diese Einordnung nicht verwässern.

## 2. Pflicht-Format des Leitfadens (siehe auch DESIGN.md §8)

1. **H1** = das Problem als Frage/Aussage (z. B. „Intime Bilder von mir wurden verbreitet – was tun?“).
2. **„Kurz erklärt:“** 1–2 Sätze: Was ist passiert + die Antwort in einem Satz.
   (Dient zugleich als AEO-Snippet.)
3. **„Erste Hilfe“-Kasten** (rot): 2–4 Sofort-Punkte für die ersten Minuten.
4. **Schritt-für-Schritt-Anleitung**: nummerierte Schritte (typisch 4), je mit klarer
   Überschrift und konkreten, überprüfbaren Handlungen. → wird als `HowTo`-Schema ausgezeichnet.
5. **„Häufige Fragen“ (FAQ)**: 4–6 Fragen, die die Kernaussagen aufgreifen. Sichtbar
   **und** deckungsgleich als `FAQPage`-Schema. (Kurze, prägnante Zusammenfassung + AEO.)
6. **„Sie brauchen Hilfe?“**: passende Kontaktstellen (Telefon zum Antippen).
7. **Disclaimer** (Standardtext der Seite): Erstinformation, keine Rechtsberatung,
   KI-Hinweis, kein offizielles BSI-Angebot.

## 3. Ton & Sprache

- **Einfache Sprache (A2/B1)**: kurze Sätze, Alltagswörter, Fachbegriffe erklären.
- **Anrede „Sie“**, ruhig, respektvoll, **ohne Schuldzuweisung** („Sie sind nicht schuld“).
- **Handlungsorientiert**: nicht nur Problem beschreiben, sondern „Das können Sie jetzt tun“.
- Genderneutral/-sensibel, wo möglich (z. B. „Täter:innen“).
- Keine dramatisierende oder angstverstärkende Sprache.

## 4. Sicherheits- & Trauma-Anforderungen (kritisch)

- **Beweise zuerst sichern**, bevor zu Änderungen an Geräten/Konten geraten wird.
- **Warnen, wenn eine Handlung die überwachende/gewalttätige Person alarmieren kann**
  (z. B. Stalkerware entfernen, Passwörter ändern, Blockieren) → Sicherheitsplan erwähnen.
- **Nie** raten, die gewalttätige Person allein zu konfrontieren.
- Bei akuter Gefahr immer zuerst auf **Polizei 110** verweisen; bei psychischer Belastung
  auf Beratung (z. B. Hilfetelefon 08000 116 016, Telefonseelsorge 0800 111 0 111).
- Auf den **„Schnell verlassen“**-Button und unbeobachtetes Surfen hinweisen, wo sinnvoll.
- Bei sensiblen Themen (sexualisierte Gewalt) einen **Inhaltshinweis** an den Anfang setzen.

## 5. Quellen-Anforderungen (Faktentreue geht vor Vollständigkeit)

- Nur **autoritative, möglichst deutsche/amtliche Quellen**. Gut geeignet:
  BSI, `polizei-beratung.de` / Online-Wachen der Länder, Verbraucherzentrale,
  HateAid, bff (Frauenberatungsstellen), Weisser Ring, Hilfetelefon, klicksafe,
  jugendschutz.net; Gesetzestexte über `gesetze-im-internet.de`; für Bild-Takedown
  StopNCII.org / „Take It Down“ (NCMEC).
- **Jede Rechtsangabe (§) und jede Telefonnummer/Adresse mit Quelle belegen** und als
  „zu verifizieren“ markieren, wenn nicht amtlich bestätigt. **Keine erfundenen
  Paragraphen, Nummern, Fristen.**
- **Kein Urheberrechtsverstoß**: fremde Warntexte/Inhalte **nicht kopieren** – in eigenen
  Worten zusammenfassen und **verlinken** (Fakten sind frei, Formulierungen geschützt).
- **Datenschutz**: keine externen Tracker/Fonts vorschlagen; Ressourcen bevorzugt lokal
  einbinden; extern eingebundene Medien nur mit „Click-to-Load“ (siehe Video-Fassade).

## 6. Output (genau so liefern)

1. **Leitfaden-Entwurf** im Pflicht-Format (Markdown oder HTML im Stil der bestehenden
   `leitfaden-*.html`; die FAQ als sichtbare Liste **und** als JSON-LD).
2. **Quellenliste**: jede Aussage/Rechtsangabe/Nummer mit Link + **Abrufdatum**.
3. **Offene Punkte**: alles Unsichere klar markiert (z. B. „§ XYZ – bitte juristisch prüfen“).
4. **Kontaktstellen-Vorschläge** für den „Sie brauchen Hilfe?“-Block.
5. Optional: 4–6 **FAQ-Fragen** plus Vorschlag für „Kurz erklärt“.

## 7. Ausdrücklich **nicht** tun

- Keine individuelle Rechts-, Medizin- oder Psychotherapie-Beratung; nur allgemeine Erstinformation.
- Keine Anleitung zu Straftaten (z. B. Gegen-Hacken, heimliches Überwachen).
- Nichts erfinden; keine unbelegten Zahlen/Studien; keine fremden Texte 1:1 übernehmen.

## 8. Abnahmekriterien (vor Veröffentlichung)

- Redaktionelle Freigabe durch einen Menschen; Faktencheck aller §§/Nummern/Fristen.
- Sprache auf A2/B1 geprüft; Inhaltshinweis bei sensiblen Themen vorhanden.
- Format vollständig (Kurz erklärt + Schritte + FAQ + Kontakte + Disclaimer).
- Barrierefreiheit: klare Überschriften-Hierarchie, verständliche Linktexte, vorlesbar.

---

## Anhang: Startpunkte für die dringlichsten Themen (MUST)

Nur **Recherchehinweise** – bitte eigenständig prüfen und aktuell halten.

- **Bildbasierte Gewalt / NCII** (intime Bilder verbreitet, Deepfakes):
  Takedown über **StopNCII.org** (Erwachsene, Hash-Verfahren) und **„Take It Down“**
  (Minderjährige); Meldewege der Plattformen; Beweissicherung ohne Weiterverbreitung;
  Rechtslage (u. a. §§ 201a StGB, 33 KUG – juristisch prüfen); Beratung (HateAid, bff).
- **Sextortion / Sexerpressung**: Kernregeln **nicht zahlen, nicht löschen, Beweise
  sichern, anzeigen**; Konto-/Plattform-Meldung; Umgang mit Scham; Beratung.
- **Stalkerware / Spyware**: Erkennungszeichen (Akku/Datenverbrauch, unbekannte Apps,
  Profile/MDM), **sichere** Entfernung **mit Alarmierungs-Warnung**, Sicherheitsplan,
  Coalition Against Stalkerware als Fachquelle.
- **Digitale Trennung**: Checkliste Passwörter/2FA, Wiederherstellungs-Kontakte,
  Standortfreigaben (Google/Apple „Wo ist?“), Familienfreigaben, Smart-Home-Konten,
  gemeinsame Abos/Cloud; Reihenfolge unter Sicherheitsaspekten.
