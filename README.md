# mObywatel - Aplikacja Webowa

Aplikacja webowa symulująca mObywatel, dostęna na urządzeniach mobilnych.

## 🚀 Publikacja na GitHub Pages

Aby udostępnić tę stronę na telefonie przez GitHub Pages, wykonaj następujące kroki:

### Opcja 1: Przez GitHub Desktop (Najłatwiejsze)

1. **Zainstaluj GitHub Desktop** (jeśli nie masz):
   - Pobierz z: https://desktop.github.com/

2. **Utwórz nowe repozytorium na GitHub.com**:
   - Wejdź na https://github.com
   - Kliknij "+" w prawym górnym rogu → "New repository"
   - Nazwa repozytorium: `Ace2115.github.io` (lub `twojanazwa.github.io`)
   - Wybierz "Public"
   - **NIE zaznaczaj** "Initialize this repository with a README"
   - Kliknij "Create repository"

3. **Sklonuj repozytorium przez GitHub Desktop**:
   - Otwórz GitHub Desktop
   - File → Clone repository → wybierz swoje repozytorium
   - Wybierz lokalizację i sklonuj

4. **Skopiuj pliki**:
   - Skopiuj wszystkie pliki z tego folderu do sklonowanego repozytorium
   - W GitHub Desktop zobaczysz zmiany
   - Wpisz wiadomość commit (np. "Initial commit")
   - Kliknij "Commit to main"
   - Kliknij "Push origin"

5. **Włącz GitHub Pages**:
   - Na GitHub.com przejdź do Settings → Pages
   - Source: wybierz "Deploy from a branch"
   - Branch: wybierz "main" i folder "/ (root)"
   - Kliknij "Save"
   - Po kilku minutach strona będzie dostępna pod adresem: `https://Ace2115.github.io`

### Opcja 2: Przez Git w terminalu

1. **Zainstaluj Git** (jeśli nie masz):
   - Pobierz z: https://git-scm.com/download/win

2. **Utwórz repozytorium na GitHub.com** (jak wyżej)

3. **W terminalu wykonaj**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Ace2115/Ace2115.github.io.git
   git push -u origin main
   ```

4. **Włącz GitHub Pages** (jak w Opcji 1, krok 5)

## 📱 Dostęp na telefonie

Po opublikowaniu na GitHub Pages:

1. Otwórz przeglądarkę na telefonie
2. Wejdź na adres: `https://Ace2115.github.io` (lub Twój adres)
3. Dodaj do ekranu głównego:
   - **iOS (Safari)**: Udostępnij → Do Ekranu głównego
   - **Android (Chrome)**: Menu (3 kropki) → Dodaj do ekranu głównego

## 📝 Uwagi

- Nazwa repozytorium `username.github.io` automatycznie włącza GitHub Pages
- Zmiany mogą pojawić się z opóźnieniem (do kilku minut)
- Strona jest dostępna publicznie, więc nie umieszczaj tam danych wrażliwych
