# Übersetzungs-Korrekturen aus muttersprachlicher Kontrolle

Sammelstelle für Korrekturwünsche aus der muttersprachlichen Durchsicht. **Offen = noch nicht eingearbeitet.**
Vorgehen je Fix: exakten Ist-Text im genannten `xx/`-File suchen und durch Soll-Text ersetzen; danach
JSON-LD/Anker prüfen, **SW-`CACHE_NAME` einmal hochzählen** (Fixes bündeln), committen + pushen. Nur die
jeweilige Sprachdatei ändern (die anderen Sprachen haben eigene Formulierungen).

---

## ✅ Russisch (erledigt 19.07.2026)
- `ru/leitfaden-stalking.html`: „**Дату и время** (точно)" → „**точные дату и время**". (Commit `d4dd312`)

---

## ⏳ Ukrainisch — OFFEN (Kontrolle 19.07.2026, Screenshots vom Auftraggeber)

### `uk/index.html` — Hero (Einleitungstext)
- **Absatz 1** — Ist:
  „У вас украли пароль? Вас переслідують в інтернеті? Ваш пристрій поводиться дивно? Тут ви знайдете прості кроки, які можна зробити прямо зараз."
  **Soll:**
  „Ваш пароль зламали? Вас переслідують в інтернеті? Ваш пристрій поводиться незвично? Тут ви знайдете прості кроки, які варто зробити просто зараз."
  (Änderungen: „У вас украли пароль?"→„Ваш пароль зламали?"; „поводиться дивно?"→„поводиться незвично?"; „які можна зробити прямо зараз"→„які варто зробити просто зараз".)
- **Absatz 2** — Ist: „Будь-який текст можна також прослухати вголос."
  **Soll:** „Кожен текст можна також прослухати в аудіоформаті."

### `uk/index.html` — Triage-Buttons (`.triage__button`-Texte)
| Ist | Soll |
|---|---|
| Мій телефон зник (загублений або **вкрадений**) | Мій телефон зник (загублений або **викрадений**) |
| Мій пристрій **поводиться дивно** | Мій пристрій **працює незвично** |
| Хтось діє від мого імені (**крадіжка** особистих даних) | Хтось діє від мого імені (**викрадення** особистих даних) |
| Мене **обманули** під час покупки в інтернеті або **вкладення грошей** | Мене **ошукали** під час покупки в інтернеті або **фінансового шахрайства** |
| Знайомий з інтернету вдає кохання й просить гроші | Незнайома\знайома людина в інтернеті прикидається закоханою, щоб виманити гроші |
| На телефоні **раптом «немає мережі», і це зачепило** мої облікові записи | На телефоні **раптово зникла мережа, і я більше не можу увійти до своїх** облікових записів |
| Тривожний дзвінок терміново вимагає грошей (шоковий дзвінок / обман телефоном) | Шахраї телефонують і вимагають гроші |

> Hinweis: Wenn ein Triage-Button geändert wird, ggf. den H1/Titel des zugehörigen UK-Leitfadens angleichen
> (Konsistenz), aber inhaltlich gleich lassen.

### Alle `uk/`-Seiten — Eigenname-Beschreibung
- „TelefonSeelsorge — **душевна** підтримка" → „TelefonSeelsorge — **психологічна** підтримка".
  Kommt in mehreren UK-Seiten vor (Startseite-Kacheln, `kontaktstellen.html`, Kontaktabschnitte der Leitfäden) —
  **alle Vorkommen** in `uk/` ersetzen. („TelefonSeelsorge" als deutscher Eigenname unverändert lassen.)

### Terminologie „шоковий дзвінок" / „шоковый звонок" — betrifft UK **und** RU
Muttersprachliche Rückmeldung: **„шоковый звонок / шоковий дзвінок" ist eine wörtliche Lehnübersetzung aus dem
Deutschen und in Russland/der Ukraine NICHT gebräuchlich** — nur in deutschen Medien zu finden.
- **`uk/leitfaden-schockanruf.html`** (und der Triage-Button oben): den Begriff durch eine natürliche Formulierung
  ersetzen, z. B. Karten-/Triage-Label „**Шахраї телефонують і вимагають гроші**"; im Fließtext „**телефонне
  шахрайство / вимагання грошей по телефону**". Bedeutung (vorgetäuschter Notfall/Druckanruf, der schnell Geld
  fordert; „Enkeltrick 2.0" / KI-Stimme) beibehalten.
- **`ru/leitfaden-schockanruf.html`**: analog. Vorschlag der Kontrolle für den Titel/Kartentext:
  „**Телефонное мошенничество / вымогание денег по телефону**" (die Lehnübersetzung „шоковый звонок" höchstens
  als Klammer-Zusatz belassen).
  → Dies ist eine **durchgängige Begriffs-Überarbeitung** der Schockanruf-Seite (Titel, H1, Fließtext, FAQ +
  FAQPage-Schema deckungsgleich, `og:title`/`twitter:title`, Breadcrumb-`name`). Sorgfältig und konsistent umsetzen.

---

*Quelle: Screenshots der muttersprachlichen Kontrolle (RU + UK), 19.07.2026. RU abgeschlossen; UK offen für die nächste Session.*
