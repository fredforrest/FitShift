import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { HomeScreen } from './src/components/HomeScreen';
import { SettingsScreen } from './src/components/SettingsScreen';
import WorkoutSetup from './src/components/WorkoutSetup';
import WorkoutExecution from './src/components/WorkoutExecution';
import WorkoutSummary from './src/components/WorkoutSummary';
import { WorkoutGenerator } from './src/services/WorkoutGenerator';
import { WorkoutSession, WorkoutProgress } from './src/types/Exercise';
import { LocalizationProvider } from './src/localization/LocalizationContext';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';

type AppState = 'home' | 'settings' | 'setup' | 'workout' | 'summary';

const AppContent: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('home');
  const [currentWorkout, setCurrentWorkout] = useState<WorkoutSession | null>(null);
  const [workoutProgress, setWorkoutProgress] = useState<WorkoutProgress[]>([]);
  const { theme, isDark } = useTheme();

  const handleNavigateToWorkout = () => {
    setAppState('setup');
  };

  const handleNavigateToSettings = () => {
    setAppState('settings');
  };

  const handleBackToHome = () => {
    setAppState('home');
    setCurrentWorkout(null);
    setWorkoutProgress([]);
  };

  const handleStartWorkout = (
    focus: 'full' | 'upper' | 'lower',
    difficulty: 'beginner' | 'intermediate' | 'advanced',
    duration: number
  ) => {
    const workout = WorkoutGenerator.generateWorkout(focus, difficulty, duration);
    setCurrentWorkout(workout);
    setAppState('workout');
  };

  const handleWorkoutComplete = (progress: WorkoutProgress[]) => {
    setWorkoutProgress(progress);
    setAppState('summary');
  };

  const handleBackToSetup = () => {
    setAppState('setup');
    setCurrentWorkout(null);
    setWorkoutProgress([]);
  };

  const handleStartNewWorkout = () => {
    setAppState('setup');
    setWorkoutProgress([]);
    // Keep current workout settings for quick restart
  };

  const renderCurrentScreen = () => {
    switch (appState) {
      case 'home':
        return (
          <HomeScreen 
            onStartWorkout={handleNavigateToWorkout}
            onOpenSettings={handleNavigateToSettings}
          />
        );
      
      case 'settings':
        return <SettingsScreen onBack={handleBackToHome} />;
      
      case 'setup':
        return <WorkoutSetup onStartWorkout={handleStartWorkout} onBack={handleBackToHome} />;
      
      case 'workout':
        if (!currentWorkout) return null;
        return (
          <WorkoutExecution
            workout={currentWorkout}
            onWorkoutComplete={handleWorkoutComplete}
            onBackToSetup={handleBackToSetup}
          />
        );
      
      case 'summary':
        if (!currentWorkout) return null;
        return (
          <WorkoutSummary
            workout={currentWorkout}
            progress={workoutProgress}
            onStartNewWorkout={handleStartNewWorkout}
            onBackToSetup={handleBackToSetup}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <StatusBar 
        barStyle={isDark ? "light-content" : "dark-content"} 
        backgroundColor={theme.colors.primary} 
      />
      {renderCurrentScreen()}
    </View>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LocalizationProvider defaultLanguage="da">
        <AppContent />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
