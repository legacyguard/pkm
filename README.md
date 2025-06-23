# 📱 Simplified PKM - Personal Knowledge Management App

> **AI-powered document management that helps you never miss important deadlines**

[![CI/CD Pipeline](https://github.com/legacyguard/pkm/actions/workflows/ci.yml/badge.svg)](https://github.com/legacyguard/pkm/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1.3-blue)](https://www.typescriptlang.org/)
[![Expo](https://img.shields.io/badge/Expo-49.0.0-black)](https://expo.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 **Vision**

Transform how families and individuals manage their personal documents through AI-powered deadline detection, privacy-first architecture, and intelligent automation.

## ✨ **Key Features**

### 🤖 **AI-Powered Document Intelligence**
- Automatic deadline extraction from documents using on-device AI
- Smart document classification and organization
- Intelligent reminder scheduling based on document importance

### 🔒 **Privacy-First Architecture**
- All processing happens on your device
- End-to-end encryption for family sharing
- No sensitive data ever leaves your control
- Complete data ownership through your cloud storage

### 👨‍👩‍👧‍👦 **Family Coordination**
- Seamless document sharing with family members
- Permission-based access control
- Emergency access for trusted contacts
- Coordinated deadline management

### 📱 **Mobile-Native Experience**
- Optimized for iOS and Android
- Offline-first functionality
- Native camera integration for document capture
- Intuitive, consumer-friendly interface

## 🏗️ **Architecture**

### Device-First Processing
```
User Device (95% processing)
├── On-device AI for OCR and classification
├── Local SQLite database with encryption
├── Native camera and document capture
└── Direct cloud storage integration

Smart Relay (5% coordination)
├── Family synchronization
├── Conflict resolution
├── Emergency access management
└── Backup coordination
```

### Technology Stack
- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Database**: SQLite with encryption
- **AI/ML**: Expo ML Kit, Vision API
- **Navigation**: React Navigation v6
- **State Management**: Zustand + React Query
- **Testing**: Jest + Detox

## 🚀 **Quick Start**

### Prerequisites
- Node.js 18+
- Expo CLI
- iOS Simulator or Android Emulator

### Installation
```bash
# Clone the repository
git clone https://github.com/legacyguard/pkm.git
cd pkm

# Install dependencies
npm install

# Start the development server
npm start

# Run on iOS
npm run ios

# Run on Android  
npm run android
```

### Development
```bash
# Run tests
npm test

# Type checking
npm run type-check

# Linting
npm run lint

# Integration tests
npm run test:integration
```

## 📁 **Project Structure**

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components
│   ├── document/       # Document-specific components
│   ├── reminder/       # Reminder and deadline components
│   └── camera/         # Camera and capture components
├── screens/            # Screen components
│   ├── onboarding/     # App introduction and setup
│   ├── document/       # Document management
│   ├── deadline/       # Deadline tracking
│   └── settings/       # App configuration
├── services/           # Business logic and external integrations
│   ├── ai/            # AI and ML services
│   ├── ocr/           # Text recognition
│   ├── notifications/ # Push notifications
│   ├── storage/       # Local database
│   └── sync/          # Data synchronization
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── types/             # TypeScript type definitions
└── context/           # React Context providers
```

## 🔧 **Configuration**

### Environment Variables
Create a `.env` file in the root directory:
```env
EXPO_PUBLIC_API_URL=https://api.simplifiedpkm.com
EXPO_PUBLIC_SENTRY_DSN=your_sentry_dsn
EXPO_PUBLIC_ANALYTICS_KEY=your_analytics_key
```

### App Configuration
The app configuration is managed through `app.json` and includes:
- Platform-specific settings
- Required permissions
- Push notification setup
- Deep linking configuration

## 🧪 **Testing Strategy**

### Unit Tests
- Component testing with React Native Testing Library
- Service layer testing with Jest
- Utility function testing

### Integration Tests
- Complete user flows
- Service integration testing
- Database operations

### E2E Tests
- Full app workflows with Detox
- Cross-platform testing
- Performance testing

## 🔒 **Security & Privacy**

### Data Protection
- AES-256 encryption for local storage
- Biometric authentication support
- Secure key management with Keychain/KeyStore
- Privacy-by-design architecture

### Compliance
- GDPR compliant data handling
- CCPA privacy requirements
- SOC 2 security controls
- Regular security audits

## 🤝 **Contributing**

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Write tests for your changes
4. Ensure all tests pass
5. Submit a pull request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 **Contact**

- **Author**: Lubor Fedák
- **Email**: fedak.lubor@gmail.com
- **GitHub**: [@legacyguard](https://github.com/legacyguard)
- **Project**: [github.com/legacyguard/pkm](https://github.com/legacyguard/pkm)

## 🙏 **Acknowledgments**

- Expo team for the amazing development platform
- React Native community for continuous innovation
- Open source contributors and early beta testers

---

**Built with ❤️ for families who want to stay organized and never miss important deadlines.**
