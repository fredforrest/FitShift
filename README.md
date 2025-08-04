# FitShift 💪

**Turn Your Work Breaks Into Fitness Wins**

A beautifully crafted React Native app that transforms workplace wellness. Get energized with quick, effective bodyweight workouts designed for busy professionals who want to stay active throughout the day.

## ✨ What Makes FitShift Special

🎯 **Smart Workouts** - Choose your focus (full body, upper, or lower), pick your difficulty, set your time (5-20 min)

� **26 Expert Exercises** - From beginner wall push-ups to advanced burpees, with automatic scaling based on your workout length

⏱️ **Intelligent Timing** - Automatic rest periods between exercises and smart set management for optimal results

🌍 **Bilingual Ready** - Complete Danish and English support with instant language switching

🎨 **Beautiful Design** - Stunning light/dark themes with smooth animations and accessibility-first approach

🔄 **No Equipment Needed** - Perfect for office, home, or anywhere you need an energy boost

## 🛠️ Built With Modern Tech

- **React Native 0.80.2** with TypeScript for rock-solid development
- **Smart workout algorithms** that adapt to your time and skill level  
- **Complete accessibility support** following WCAG guidelines
- **Persistent themes and preferences** that remember your choices
- **Clean, organized codebase** with separated screens and components

## 🚀 Quick Start

```bash
# Get started in 3 steps
git clone https://github.com/fredforrest/fitshift.git
cd fitshift && npm install
cd ios && pod install && cd .. && npm run ios
```

**That's it!** Open the app, pick your workout style, and start moving. 

*Android users: Use `npm run android` instead*

## 📁 Project Structure

```
src/
├── screens/            # Main app screens
│   ├── HomeScreen.tsx      # Welcome & navigation
│   ├── SettingsScreen.tsx  # Themes & language
│   └── ReadyScreen.tsx     # Exercise prep countdown
├── components/         # Reusable UI pieces
│   ├── WorkoutSetup.tsx    # Workout customization
│   ├── WorkoutExecution.tsx # Real-time guidance
│   ├── WorkoutSummary.tsx  # Results & stats
│   └── LanguageSwitcher.tsx # Language toggle
├── data/              # Exercise databases
│   ├── exerciseDatabase.ts     # English exercises
│   └── exerciseDatabaseDanish.ts # Danish exercises
├── services/          # Business logic
├── theme/            # Light/dark themes
└── localization/     # Translation system
```

## 🤝 Contributing

Love the project? We'd love your help! Fork it, make it better, and send us a pull request.

## 📄 License

MIT License - feel free to use this for your own workplace wellness initiatives!

---

**Made with ❤️ for healthier workplaces everywhere**

*5 minutes to energize. 20 minutes to transform your day.*
