# Übersetzungs-Korrekturen aus muttersprachlicher Kontrolle

Sammelstelle für Korrekturwünsche aus der muttersprachlichen Durchsicht. **Offen = noch nicht eingearbeitet.**
Vorgehen je Fix: exakten Ist-Text im genannten `xx/`-File suchen und durch Soll-Text ersetzen; danach
JSON-LD/Anker prüfen, **SW-`CACHE_NAME` einmal hochzählen** (Fixes bündeln), committen + pushen. Nur die
jeweilige Sprachdatei ändern (die anderen Sprachen haben eigene Formulierungen).

---

## ✅ Russisch (erledigt 19.07.2026)
- `ru/leitfaden-stalking.html`: „**Дату и время** (точно)" → „**точные дату и время**". (Commit `d4dd312`)

---

## ✅ Ukrainisch — ERLEDIGT (21.07.2026)
Alle unten gelisteten UK-Punkte eingearbeitet: Hero (beide Absätze), 7 Triage-Buttons, TelefonSeelsorge
„душевна/душевної підтримки" → „психологічна/психологічної підтримки" (alle Vorkommen in `uk/`: index,
kontaktstellen 4×, stalkerware, romance-scam 4×, doxing, digitale-trennung, schockanruf), sowie die
Schockanruf-Begriffsüberarbeitung (siehe unten). SW auf v35.

> Hinweis: „душевному навантаженні" (cybermobbing) und „душевних кризах" (kontaktstellen-Beschreibung) blieben
> bewusst unverändert — das ist „seelische Belastung/Krise", nicht die TelefonSeelsorge-Bezeichnung.

## ✅ Schockanruf-Begriff (UK + RU) — ERLEDIGT (21.07.2026)
Calque „шоковий дзвінок"/„шоковый звонок" durchgängig ersetzt (Titel, H1, og/twitter, HowTo, Breadcrumb,
FAQ sichtbar↔Schema, externe Link-Labels, verwandte-Leitfäden-Links, `leitfaeden.html`-Kacheln, index-Triage):
- **UK → „шахрайський дзвінок"** (betrügerischer Anruf); index-Triage = reviewer-Vorgabe „Шахраї телефонують і вимагають гроші".
- **RU → „мошеннический звонок"**. **Abweichung von der reviewer-Vorschlagsformulierung** „Телефонное
  мошенничество / вымогание денег по телефону": als H1 mit „с ИИ-голосом" angehängt zu sperrig; der natürliche,
  themen-treue Begriff „мошеннический звонок" wurde gewählt (parallel zu UK). **Für muttersprachliche Re-Kontrolle markiert.**

## ⏳ Italienisch — muttersprachliche Kontrolle OFFEN (Rollout 21.07.2026)
IT ist vollständig live (25 Seiten, KI-Übersetzung, einfaches Italienisch), aber **noch nicht muttersprachlich
kontrolliert**. Vor „final" durchsehen wie bei RU/UK/TR. Besonders prüfen:
- Register/Natürlichkeit (informelles „tu", Leichte-Sprache-Stufe) durchgängig.
- Schockanruf-Seite: bewusst „truffa telefonica / truffa del finto nipote" statt „telefonata shock"
  (Letzteres im IT geläufig, aber zugunsten Konsistenz mit Titel/Kachel vermieden) — vom Muttersprachler bestätigen lassen.
- Deutsche Eigennamen/Gesetzesnamen in `lang="de"` korrekt belassen.

## ⏳ Ukrainisch — Originalliste (Kontrolle 19.07.2026, Screenshots vom Auftraggeber)

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
