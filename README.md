**Przykładowe README prezentujące projekt. 
Oczywiście Wasza grupa może mieć na to zupełnie inną koncepcję.
W README zamieście wszystko, co może pokazać Wasz projekt z dobrej strony.
Możecie także opisać, w jaki sposób organizowaliście pracę, jakie wyzwania i problemy udało Wam się pokonać.
README musi w jakiś sposób pokazywać, że aplikacja została wykonana w ramach kursu CodersCamp.
Repozytorium zawsze należy oznaczyć Topicami `coderscamp` i `coderscamp2020` oraz Topiciem z odpowiednim numerem działu, w tym przypadku `coderscamp2020-dzial-2`.
Ułatwi to później przegląd na GitHubie projektów wykonanych podczas CodersCamp.**

# Coders Camp 2020 | Projekt Zespołowy | JavaScript

## Zespół projektowy

Zespół pracował w ramach kursu [CodersCamp](CodersCamp.pl). 
Aplikację wykonali uczestnicy kursu przy pomocy mentora.
Zachęcamy do odwiedzenia profili członków zespołu, w celu zapoznania się z ich portfolio.

**Mentor**: [Jan Kowalski](github.com/coderscamp-jankowalski)

**Uczestnicy**:
- [Aleksandra Aleksandrowicz](github.com/coderscamp-aleksandra) (Development Manager)
- [Janina Kowalska](github.com/coderscamp-dzoannakowalska)
- [Olaf Luby](github.com/coderscamp-lubasz) (Product Owner)
- [Jan Odrowąż](github.com/coderscamp-janjanjan) (Tech Lead)
- [Kosma Szczęsny](github.com/coderscamp-kosmadamian)
- [Robert Wójcik](github.com/coderscamp-vujcicki)

## Star Wars Quiz

![QuizGameGif](https://drive.google.com/uc?id=1OS08N-_qB9Rvu67j8FhBkF27lV-6c5f4)

### Demo
Wersja demonstracyjna aplikacji jest dostępna [TUTAJ](https://nowakprojects.github.io/CodersCamp2020.Project.JavaScript.StarWarsQuiz.SampleSolution/).

Powodzenia, niech Moc będzie z Tobą!

### Cel projektu

Celem projektu było dostarczenie aplikacji pozwalającej sprawdzić swoją wiedzę o postaciach, 
pojazdach oraz statkach kosmicznych występujących w Gwiezdnych Wojnach.
Dodatkowo gracz rywalizował z komputerem w trakcie grania w quiz.
Komputer — zależnie od ustawień — odpowiada losowo lub inteligentnie — próbując rozpoznać przedstawiany obraz za pomocą Google Vision API.

Aplikacja została wykonana wg dostarczonych przez organizatorów CodersCamp wymagań.
Szablon projektu dostępny jest [TUTAJ](https://github.com/CodersCamp2020/CodersCamp2020.Project.JavaScript.StarWarsQuiz).

### Działanie aplikacji

#### Menu Główne
W menu głównym należy wybrać tryb gry (domyślnie jest to People):
- People — rozpoznawanie jaka postać z uniwersum Star Wars została wyświetlona
- Vehicles — rozpoznawanie jaki pojazd z uniwersum Star Wars został wyświetlony
- Starships — rozpoznawanie jaki statek kosmiczny z uniwersum Star Wars został wyświetlony

#### Rozgrywka — Quiz

Rozgrywka polega na odpowiadaniu na rozpoznawaniu co lub kto wyświetla się na obrazie po lewej stronie.
Do wyboru są 4 opcje, z czego zawsze tylko jedna jest prawidłowa.
W tym samym czasie obraz rozpoznaje także komputer, który rywalizuje z graczem (wyniki komputera nie zapisują się w rankingu).
Wynik gracza z jednej gry to ilość dobrych odpowiedzi.

Czas pozostały do końca rozgrywki odlicza miecz świetlny na dole ekranu.

#### Zasady gry
Po wyborze trybu aplikacji pokazuje zasady gry dla tego trybu.

### Sala Chwały / Ranking
Po przejściu do Hall of Fame pokazywane są 3 najlepsze wyniki graczy, grających na danym komputerze. 
Wyniki są pokazywane osobno, dla każdego z trybów.

#### Ustawienia
W ustawieniach aplikacji możesz zdecydować, czy będziesz konkurować z komputerem losowym, czy bardziej inteligentym.
Aby walczyć przeciw komputerowi silnym w mocy, należy w ustawieniach podać ApiKey, który umożliwia wykonywanie zapytań do Google Vision Api.
Taki API Key można wygenerować w następujący sposób.
1. Załóż konto w Google Cloud Platform wg [tej instrukcji](https://flyonthecloud.com/pl/blog/konto-gcp-rejestracja-konfiguracja/#Zakladanie_konta_Google_Cloud_Platform).
2. Załóż projekt, aktywuj dla niego Google Vision Api i wygeneruj swój API Key, jak opisano [TUTAJ](https://support.foxtrotalliance.com/hc/en-us/articles/360024282351-How-To-Use-Google-Cloud-Vision-API-OCR-Image-Analysis-).
3. Wklej swój API Key w odpowiednim polu w ustawieniach gry. Spokojnie, Twój API Key będzie przetrzymywany jedynie w pamięci programu i wykorzystywany tylko do autoryzacji zapytań do Google Vision API.
Przy przeładowaniu strony, musisz podać go ponownie.

### Zmiany wprowadzone w wymaganiach

Nie wprowadzono żadnych zmian w wymaganiach względem projektu pierwotnego.
Lekkim uproszeniom uległ interfejs użytkownika.
Nie wykonano wersji responsywnej, dostosowanej to telefonów i tabletów. 
Aplikacja najlepszy efekt sprawia na większych ekranach. 
Możesz wtedy zagłębić się w świat Gwiezdnych Wojen niczym w samo jądro Galaktyki!

### Zrealizowane dodatkowe zadania
Nasz zespół zrealizował także zadania dodatkowe, wykraczające poza zakres kursu.
1. Zostało wykonane zadanie dodatkowe z Google Vision API.

## Development aplikacji

Jeśli chcesz pomóc, w dalszym rozwoju aplikacji, z chęcią przyjmiemy Twoje Pull Requesty.

### Wykorzystywane technologie
W trakcie developmentu wykorzystujemy:
- JavaScript
- Web APi dla JavaScript (nie stosujemy żadnych frameworków, czy jQuery)
- CSS, do stylowania aplikacji
- HTML, do definiowania struktury aplikacji
- LocalStorage, do zapisywania najlepszych wyników graczy
- Jest.js do pisania testów jednostkowych
- Fetch, do łączenia z SWApi, Google Vision APi oraz pobierania obrazów z zasobów aplikacji
- JSON Server — do działania aplikacji lokalnie, jeśli zostanie wykorzystany limit na zapytania do SWApi

### Uruchomienie projektu
Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:
1. Zainstaluj zależności za pomocą komendy: `npm install`
2. Wystartuj serwer developerski `npm run start:dev`

Aplikacja będzie dostępna pod adresem [localhost:8765/index.html](localhost:8765/index.html)

Kod produkcyjny aplikacji umieszczamy w katalogu `src`.

### Uruchomienie testów
Dodając swoje 5 groszy do naszej aplikacji, pamiętaj o pokryciu kodu testami.
Aby uruchomić testy aplikacji, wykonaj następujące kroki:
1. Zainstaluj zależności za pomocą komendy: `npm install` (jeśli nie zrobiłeś już tego wcześniej).
1. Uruchom testy, wykonując komendę: `npm run test`. Testy z raportem pokrycia uruchomisz za pomocą: `npm run test:cov`.

Kod testów umieszczamy w katalogu `test`.

### Zmienne środowiskowe
Zmienne środowiskowe są określone w pliku `.env`. 
Aby je nadpisać, utwórz lokalny plik `.env.local` i powtórz wpisy dla odpowiednich zmiennych.
Przykładowo, plik o zawartości:
```.env
SW_API_BASE_URL = http://localhost:300/
```
zmieni adres, z jakiego aplikacja będzie korzystać, aby łączyć się z SWApi. Domyślnie jest to zdefiniowane w pliku `.env` na wartość: `https://swapi.dev/api`.

### Organizacja pracy
Praca zespołu była organizowana przy użyciu narzędzi dostarczanych przez GitHub. 
Zadania opisywaliśmy za pomocą GitHub Issues i dzieliśmy czas ich wykonania na tygodnie za pomocą GitHub Projects.
Każde z zadań było estymowane przez mentora, dzięki czemu staraliśmy się, aby liczba punktów przypadająca w danym tygodniu na każdą osobę w zespole była podobna.
Jeśli chcesz zaproponować, jakąś zmianę w aplikacji, utwórz nowy Issue, wzorując się na poprzednich.
