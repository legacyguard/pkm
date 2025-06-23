# MVP Zadanie: Simplified PKM App

## 🎯 Hlavný cieľ
**"Už nikdy nezmeškejte dôležitý termín"**

Vytvoriť mobilnú aplikáciu, ktorá automaticky rozpozná termíny z dokumentov a vytvorí inteligentné pripomienky.

## 👥 Target Audience
- **Primárny**: Zaneprázdnení profesionáli (35-55 rokov, príjem 75k+ USD)
- **Sekundárny**: Rodiny s množstvom administratívnych povinností  
- **Terciárny**: Majitelia malých podnikov

## 📱 MVP Core Features

### 1. Zachytávanie dokumentov (Týždeň 2)
- **Fotenie dokumentov** cez kameru
- **Upload PDF/obrázkov** z galérie
- **Základná validácia** formátov
- **Kompresia obrázkov**

### 2. Inteligentná extrakcia (Týždeň 2)
- **OCR technológia**: Google Vision API / Apple Vision
- **Rozpoznávanie dátumov**: Regex pattern matching
- **Extrakcia kľúčových informácií**
- **Manual fallback** pre užívateľa

### 3. Systém pripomienok (Týždeň 3)
- **Push notifikácie** 30/7/1 deň pred termínom
- **Kalendárová integrácia**
- **Inteligentné timing**
- **Snooze funkčnosť**

### 4. Správa dokumentov (Týždeň 3)
- **Lokálne úložisko**: SQLite databáza
- **Kategorizácia**: Automatická
- **Vyhľadávanie**: Full-text search
- **Bezpečnosť**: Šifrovanie citlivých dát

## 🎨 Hlavné obrazovky

### 1. Dashboard (Domovská obrazovka)
┌─────────────────────────┐
│ 📅 Dnes: 3 termíny      │
│ ⚠️  Zajtra: 1 termín    │
│ 📄 Celkom: 45 dokumentov│
├─────────────────────────┤
│ Nadchádzajúce:          │
│ • Faktúra EÚ (3 dni)    │
│ • Poistenka (7 dní)     │
│ • Zmluva (14 dní)       │
├─────────────────────────┤
│ [+] Pridať dokument     │
└─────────────────────────┘

### 2. Add Document (Pridanie dokumentu)
┌─────────────────────────┐
│ 📷 Odfotiť dokument     │
│ 📁 Nahrať zo súborov    │
│ 📋 Manuálne zadanie     │
├─────────────────────────┤
│ AI extrakcia prebieha...│
│ 🤖 Našiel som termín:   │
│ 📅 15.12.2024          │
│ 🏷️  Typ: Faktúra        │
├─────────────────────────┤
│ [ Potvrdiť ] [ Upraviť ]│
└─────────────────────────┘

## 🔄 Hlavný užívateľský flow

Užívateľ odfotí/nahrá dokument
↓
AI automaticky extrahuje text (OCR)
↓
AI rozpozná termíny a kategóriu
↓
Užívateľ skontroluje/upraví informácie
↓
Dokument sa uloží + vytvorí sa pripomienka
↓
Užívateľ dostane push notifikáciu pred termínom


## 🛠️ Technická implementácia

### Frontend
- **React Native** + **Expo**
- **TypeScript** pre type safety
- **React Navigation** pre navigáciu

### AI/ML Services
- **Google Vision API**
- **Apple Vision Framework**
- **Custom regex patterns**

### Data Storage
- **SQLite** pre lokálne úložisko
- **Expo FileSystem** pre súbory
- **Expo SecureStore** pre citlivé dáta

## 🚫 Čo nebude v MVP

- Rodinné zdieľanie (fáza 2)
- Cloud synchronizácia (fáza 2)
- Template systém (fáza 2)
- Pokročilé AI funkcie (fáza 2)

## 📊 Success Metrics

### Používanie
- **Time to first value**: < 5 minút
- **Document processing accuracy**: > 85%
- **Daily active usage**: > 40%
- **Retention rate**: > 60% po 30 dňoch

### Business
- **App Store rating**: > 4.2/5
- **Crash rate**: < 0.1%
