# FitShift 💪

**Your Active Break Companion**

FitShift is a visually stunning React Native fitness app designed to promote healthy active breaks in the workplace. Combat the negative effects of prolonged sitting with scientifically-designed bodyweight exercises that can be performed anywhere, anytime.

## 🌟 Features

### 🎯 **Smart Workout Generation**
- **Full Body Workouts**: Comprehensive exercises targeting your entire body
- **Upper Body Focus**: Strengthen arms, chest, shoulders, and back
- **Lower Body Focus**: Build powerful legs and glutes
- Intelligent exercise selection based on difficulty and duration

### 💡 **Exercise Variety**
- **Active Exercises**: Dynamic movements with concentric and eccentric phases
  - Push-ups (regular, diamond, pike variations)
  - Squats (bodyweight, jump squats)
  - Lunges, Burpees, Mountain Climbers
- **Isometric Holds**: Static strength builders
  - Plank variations, Wall sits, Glute bridges
  - Side planks for core stability

### ⚡ **Adaptive Training**
- **Beginner**: Perfect for fitness newcomers
- **Intermediate**: Challenging workouts for active individuals  
- **Advanced**: High-intensity exercises for fitness enthusiasts
- **Flexible Duration**: 5, 10, 15, or 20-minute sessions

### 📱 **Beautiful User Experience**
- Stunning gradient designs and smooth animations
- Clear exercise instructions with step-by-step guidance
- Real-time timers for isometric holds
- Rep-based counting for dynamic exercises
- Motivational progress tracking

## 🏗️ **App Architecture**

### **Core Components**
- `WorkoutSetup`: Customizable workout configuration
- `WorkoutExecution`: Real-time exercise guidance with timers
- `WorkoutSummary`: Post-workout statistics and motivation
- `ReadyScreen`: Countdown preparation between exercises

### **Intelligent Systems**
- `WorkoutGenerator`: Intelligent exercise selection algorithm
- `Exercise Database`: Comprehensive library of bodyweight movements
- Progress tracking with completion analytics

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
3. **Select Duration**: Choose 5-20 minutes for your break
4. **Start Your Break**: Follow the guided workout with timers and instructions
5. **Track Progress**: View your completion stats and stay motivated

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
- **TypeScript**: Type-safe development
- **React Native Linear Gradient**: Beautiful UI gradients
- **Animated API**: Smooth, performant animations
- **Custom Workout Algorithm**: Intelligent exercise selection

## 📁 **Project Structure**

```
src/
├── components/          # Reusable UI components
│   ├── WorkoutSetup.tsx
│   ├── WorkoutExecution.tsx
│   ├── WorkoutSummary.tsx
│   ├── ReadyScreen.tsx
│   └── CircularTimer.tsx
├── data/               # Exercise database
│   └── exerciseDatabase.ts
├── services/           # Business logic
│   └── WorkoutGenerator.ts
└── types/              # TypeScript definitions
    └── Exercise.ts
```

## 🔮 **Future Enhancements**

- [ ] Custom workout creation
- [ ] Progress analytics and streaks
- [ ] Social sharing and challenges
- [ ] Apple Health / Google Fit integration
- [ ] Wearable device support
- [ ] Audio coaching and music integration
- [ ] Workplace team challenges

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
