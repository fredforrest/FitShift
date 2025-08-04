# FitShift 💪

**Your Active Break Companion**

FitShift is a visually stunning React Native fitness app designed to promote healthy active breaks in the workplace. Combat the negative effects of prolonged sitting with scientifically-designed bodyweight exercises that can be performed anywhere, anytime.

## 🌟 Features

### 🎯 **Smart Workout Generation**
- **Full Body Workouts**: Comprehensive exercises targeting your entire body
- **Upper Body Focus**: Strengthen arms, chest, shoulders, and back
- **Lower Body Focus**: Build powerful legs and glutes
- **Intelligent exercise selection** based on difficulty and duration
- **Automatic exercise optimization**: 2 sets for 5-10 minute workouts
- **Enhanced repetition ranges**: 8-12 reps for upper body exercises

### 💡 **Exercise Variety**
- **Active Exercises**: Dynamic movements with concentric and eccentric phases
  - Push-ups (regular, diamond, pike variations)
  - Squats (bodyweight, jump squats)
  - Lunges, Burpees, Mountain Climbers
- **Isometric Holds**: Static strength builders
  - Plank variations, Wall sits, Glute bridges
  - Side planks for core stability
- **Smart rest guidance**: Automatic pause recommendations between sets

### ⚡ **Adaptive Training**
- **Beginner**: Perfect for fitness newcomers
- **Intermediate**: Challenging workouts for active individuals  
- **Advanced**: High-intensity exercises for fitness enthusiasts
- **Flexible Duration**: 5, 10, 15, or 20-minute sessions
- **Progressive difficulty**: Automatic scaling based on workout length

### 🌍 **Internationalization**
- **Full Danish Support**: Complete interface and exercise descriptions
- **English Support**: Comprehensive translations for international users
- **Seamless Language Switching**: Instant language toggle in settings
- **Localized Exercise Database**: Native exercise names and instructions

### 📱 **Beautiful User Experience**
- Stunning gradient designs and smooth animations
- Clear exercise instructions with step-by-step guidance
- Real-time timers for isometric holds
- Rep-based counting for dynamic exercises
- **Automatic rest periods** between exercises (20-30 seconds)
- **Smart pause indicators** for multi-set exercises
- **Comprehensive theming system** with light/dark mode support
- **Full localization** (Danish and English)
- **Accessibility-first design** with WCAG compliance

## 🏗️ **App Architecture**

### **Core Components**
- `WorkoutSetup`: Customizable workout configuration with focus/difficulty/duration selection
- `WorkoutExecution`: Real-time exercise guidance with timers and automatic rest periods
- `WorkoutSummary`: Post-workout statistics and motivational feedback
- `ReadyScreen`: Countdown preparation between exercises
- `HomeScreen`: Main navigation and app entry point
- `SettingsScreen`: Theme and language preferences
- `LanguageSwitcher`: Seamless Danish/English language toggle

### **Intelligent Systems**
- `WorkoutGenerator`: Smart exercise selection with automatic difficulty scaling
- `Exercise Database`: Comprehensive bilingual library of bodyweight movements
- **Automatic exercise enhancement**: 2 sets for short workouts, 8-12 reps for upper body
- **Adaptive rest periods**: Smart pause timing between exercises and sets
- **Theme System**: Complete light/dark mode with persistent preferences
- **Localization System**: Full Danish/English translation support

## 🚀 **Getting Started**

### Prerequisites
- [React Native development environment](https://reactnative.dev/docs/set-up-your-environment)
- iOS Simulator or Android Emulator
- Node.js 18+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fredforrest/fitshift.git
   cd fitshift
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install iOS dependencies**
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Start Metro bundler**
   ```bash
   npm start
   ```

5. **Run the app**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   ```

## 🎮 **How to Use**

1. **Choose Your Focus**: Select Full Body, Upper Body, or Lower Body
2. **Set Difficulty**: Pick Beginner, Intermediate, or Advanced
3. **Select Duration**: Choose 5, 10, 15, or 20 minutes for your break
4. **Follow Guided Workouts**: Real-time instructions with automatic timers
5. **Rest Between Exercises**: Automatic 20-30 second rest periods
6. **Track Your Progress**: View completion stats and workout summaries
7. **Customize Experience**: Switch themes and languages in settings

## 🏃‍♂️ **Exercise Categories**

### **Upper Body** 💪
- Push-ups (multiple variations)
- Pike push-ups for shoulders
- Plank holds for core stability

### **Lower Body** 🦵
- Bodyweight squats
- Jump squats for power
- Lunges for unilateral strength
- Wall sits for endurance

### **Full Body** 🔥
- Burpees for total-body conditioning
- Mountain climbers for cardio
- Dynamic movements combining multiple muscle groups

## 🎯 **Health Benefits**

- **Improved Circulation**: Combat the effects of prolonged sitting
- **Enhanced Productivity**: Boost mental clarity and focus
- **Strength Building**: Develop functional bodyweight strength
- **Flexibility**: Maintain joint mobility throughout the workday
- **Stress Relief**: Release workplace tension naturally

## 🛠️ **Technology Stack**

- **React Native 0.80.2**: Cross-platform mobile development
- **TypeScript**: Type-safe development with comprehensive interfaces
- **Expo**: Development platform and build system
- **React Context**: State management for themes and localization
- **AsyncStorage**: Persistent user preferences
- **Custom Animation System**: Smooth, performant native animations
- **Accessibility APIs**: WCAG 2.1 AA compliant design
- **Intelligent Workout Algorithm**: Dynamic exercise selection and scaling

## 📁 **Project Structure**

```
src/
├── components/          # Reusable UI components
│   ├── WorkoutSetup.tsx    # Workout configuration interface
│   ├── WorkoutExecution.tsx # Exercise execution with timers
│   ├── WorkoutSummary.tsx  # Post-workout statistics
│   ├── LanguageSwitcher.tsx # Language toggle component
│   └── AccessibleButton.tsx # Accessible button component
├── screens/            # Application screens
│   ├── HomeScreen.tsx      # Main navigation screen
│   ├── SettingsScreen.tsx  # User preferences
│   └── ReadyScreen.tsx     # Exercise preparation countdown
├── data/               # Exercise databases
│   ├── exerciseDatabase.ts     # English exercise library
│   └── exerciseDatabaseDanish.ts # Danish exercise library
├── localization/       # Internationalization
│   ├── LocalizationContext.tsx # Language context provider
│   └── translations.ts        # Danish/English translations
├── theme/              # Theming system
│   ├── ThemeContext.tsx       # Theme context provider
│   └── themes.ts             # Light/dark theme definitions
├── services/           # Business logic
│   └── WorkoutGenerator.ts   # Smart workout creation
└── types/              # TypeScript definitions
    └── Exercise.ts          # Exercise and workout interfaces
```

## 🔮 **Recent Updates & Features**

- [x] **Automatic rest periods** between exercises (20-30 seconds)
- [x] **Multi-set exercise guidance** with pause recommendations
- [x] **Complete theme system** with persistent light/dark mode
- [x] **Full Danish/English localization** with instant switching
- [x] **Enhanced workout algorithms** with automatic exercise scaling
- [x] **Accessibility improvements** with WCAG compliance
- [x] **Optimized exercise database** with bilingual support
- [x] **Clean, deprecation-free codebase** with modern React Native patterns

## 🔮 **Future Enhancements**

- [ ] Custom workout creation and exercise builder
- [ ] Progress analytics and workout streaks
- [ ] Social sharing and workplace challenges
- [ ] Apple Health / Google Fit integration
- [ ] Wearable device support and heart rate monitoring
- [ ] Audio coaching and background music integration
- [ ] Corporate wellness dashboard and team challenges
- [ ] Exercise video demonstrations and form tips

## 🤝 **Contributing**

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 **Health Tips**

- Take a 5-10 minute active break every 25-30 minutes
- Stay hydrated throughout your workday
- Mix different workout focuses throughout the week
- Listen to your body and adjust intensity as needed
- Consistency is more important than perfection

---

**Made with ❤️ for healthier workplaces**

*Transform your work breaks into powerful wellness moments with FitShift*
