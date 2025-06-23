# PKM App 📱

> **"Už nikdy nezmeškejte dôležitý termín"** - Váš osobný AI asistent pre správu dokumentov a termínov

## 🎯 O projekte

PKM (Personal Knowledge Management) je revolučná mobilná aplikácia navrhnutá pre zaneprázdnených profesionálov a rodiny, ktorí chcú automatizovať správu svojich dôležitých dokumentov a nikdy nezmeškať dôležitý termín.

### 💡 Value Proposition
- **Ušetríte 50+ hodín ročne** na organizovaní dokumentov
- **Predídete stratám $2,300 ročne** kvôli zmeškaným termínom  
- **Privacy-first prístup** - vaše dáta zostávajú na vašom zariadení
- **Funguje za 5 minút** - žiadne komplikované nastavenia

### 🚀 Hlavné funkcie MVP:
- 📷 **Inteligentné zachytávanie dokumentov** - Odfotografujte alebo nahrajte dokument
- 🤖 **Automatická extrakcia termínov** - AI rozpozná dôležité dátumy z dokumentov  
- 🔔 **Inteligentné pripomienky** - Automatické upozornenia pred termínmi
- 🏠 **Rodinné zdieľanie** - Koordinácia termínov pre celú domácnosť
- 🔒 **Device-first architektura** - Vaše dáta zostávajú pod vašou kontrolou

### 👥 Pre koho je aplikácia určená:
- **Zaneprázdnených profesionálov** (35-55 rokov) s vysokými príjmami
- **Rodiny s množstvom dokumentov** a administratívnych povinností
- **Majiteľov malých podnikov** s dodržovaním termínov
- **Každého, kto je unavený** z organizovania života

## 🖼️ Dizajn a Mockupy

- [📱 Figma Design System](link-na-figma) *(coming soon)*
- [🎨 Wireframes a mockupy](./assets/mockups/) *(v príprave)*

## 🛠️ Technický stack

- **Frontend**: React Native + Expo (iOS + Android)
- **AI/OCR**: Google Vision API / Apple Vision Framework  
- **Database**: SQLite (lokálne úložisko) + Cloud backup
- **Notifications**: Expo Notifications + Calendar integration
- **Storage**: Expo SecureStore (šifrované)
- **Architecture**: Device-first processing, minimal cloud coordination

## 🏗️ Inštalácia a spustenie

### Predpoklady
- Node.js (18+)
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator / Android emulator

### Kroky na spustenie
```bash
# 1. Klonujte repozitár
git clone https://github.com/legacyguard/pkm.git

# 2. Prejdite do priečinka
cd pkm

# 3. Nainštalujte závislosti
npm install

# 4. Spustite vývojový server
expo start

# 5. Pre konkrétnu platformu
expo start --ios     # iOS Simulator
expo start --android # Android Emulator
```

## 📋 Development Progress & Roadmap

Sledujte náš pokrok:
- [📊 Project Board](../../projects/1) - Kanban board s úlohami
- [🎯 Milestones](../../milestones) - Hlavné míľniky projektu  
- [📝 Issues](../../issues) - Konkrétne úlohy a bugy

### 🏁 Aktuálny stav: **Týždeň 1** - Setup & Foundation
- ✅ GitHub repozitár vytvorený
- ✅ Základná štruktúra projektu
- 🔄 React Native/Expo setup (in progress)
- ⏳ UI/UX design system (planned)

### 🎯 MVP Ciele (4 týždne)

| Týždeň | Cieľ | Status |
|--------|------|--------|
| **1** | Setup projektu, základný dizajn | 🔄 In Progress |
| **2** | Core funkcionalita (OCR, extrakcia) | ⏳ Planned |
| **3** | Reminder systém, lokálne úložisko | ⏳ Planned |
| **4** | Polish, testovanie, TestFlight | ⏳ Planned |

## 📂 Projektová štruktúra

```
pkm/
├── 📄 README.md                    # Tento súbor
├── 📄 package.json                 # Dependencies a scripts  
├── 📄 app.json                     # Expo konfigurácia
├── 📄 tsconfig.json               # TypeScript setup
│
├── 📁 src/                        # 🔥 Hlavné zdrojové kódy
│   ├── 📄 App.tsx                 # Entry point aplikácie
│   ├── 📁 screens/                # Obrazovky (Dashboard, AddDocument, Library)
│   ├── 📁 components/             # Znovupoužiteľné UI komponenty
│   ├── 📁 services/               # AI, OCR, storage, notifications
│   ├── 📁 navigation/             # React Navigation setup
│   ├── 📁 types/                  # TypeScript definície
│   └── 📁 styles/                 # Theme a styling
│
├── 📁 docs/                       # 📚 Dokumentácia a planning
│   ├── 📄 zadanie-mvp.md         # Detailné MVP specs
│   ├── 📄 4-week-plan.md         # Development timeline  
│   └── 📁 wireframes/            # UI/UX designs
│
├── 📁 assets/                     # 🎨 Obrázky, ikony, mockupy
└── 📁 __tests__/                  # 🧪 Test súbory
```

## 🎨 Core User Experience

### Hlavný user flow:
```
📷 Odfotíš dokument → 🤖 AI extrahuje termín → 📅 Vytvorí pripomienku → 🔔 Dostaneš notifikáciu
```

### Kľúčové obrazovky:
1. **Dashboard** - Prehľad nadchádzajúcich termínov
2. **Add Document** - Camera + OCR + AI extraction  
3. **Document Library** - Všetky uložené dokumenty s vyhľadávaním

## 💰 Business Model & Vision

### Cieľový trh:
- **TAM**: $4.17B (personal document management)
- **Target customers**: 63M affluent households globally
- **Monetization**: One-time purchase ($29.99-$99.99) + ecosystem

### Competitive advantage:
- **Device-first architecture** (97% lower infrastructure costs)
- **Privacy by design** (complete user data ownership)
- **Family-focused** (household-level organization)
- **AI-powered intelligence** (automated deadline detection)

## 🤝 Contributing & Development

### Ako prispieť:
1. Forkni repozitár
2. Vytvor feature branch (`git checkout -b feature/amazing-feature`)
3. Commitni zmeny (`git commit -m 'Add amazing feature'`)
4. Push na branch (`git push origin feature/amazing-feature`)
5. Otvor Pull Request

### Development setup:
```bash
# Install dependencies
npm install

# Start development server  
npm start

# Run tests
npm test

# Type checking
npm run type-check

# Linting
npm run lint
```

### Continuous Integration
Každý Pull Request spustí GitHub Actions workflow, ktorý vykoná `npm run type-check` na overenie projektu.

## 📊 Success Metrics & KPIs

### Technical Quality:
- App crash rate: < 0.1%
- Document processing accuracy: > 85%
- Time to first value: < 5 minutes

### Business Metrics:
- User retention (30-day): > 60%
- Daily active usage: > 40%
- App Store rating: > 4.2/5

## 📄 Licencia

Tento projekt je licencovaný pod MIT licenciou - pozrite [LICENSE](LICENSE) súbor pre detaily.

## 📞 Kontakt & Podpora

- **Autor**: Lubor Fedák
- **Email**: [fedak.lubor@gmail.com](mailto:fedak.lubor@gmail.com)
- **GitHub**: [@legacyguard](https://github.com/legacyguard)
- **Issues**: [GitHub Issues](../../issues)

---

## 🎯 Next Steps

1. **Týždeň 1**: Dokončiť React Native/Expo setup
2. **UI Design**: Vytvoriť Figma mockupy pre 3 hlavné obrazovky  
3. **MVP Development**: Začať s implementáciou core features
4. **Beta Testing**: Pripraviť TestFlight/Play Store Beta

---

⭐ **Ak sa vám projekt páči, dajte mu hviezdu!** ⭐

*Simplified PKM - Never miss a deadline again.* 🚀
