/**
 * FitShift - Active Break Fitness App
 * Promotes healthy breaks in the workplace with bodyweight exercises
 */

import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import WorkoutSetup from './src/components/WorkoutSetup';
import WorkoutExecution from './src/components/WorkoutExecution';
import WorkoutSummary from './src/components/WorkoutSummary';
import { WorkoutGenerator } from './src/services/WorkoutGenerator';
import { WorkoutSession, WorkoutProgress } from './src/types/Exercise';

type AppState = 'setup' | 'workout' | 'summary';

function App() {
  const [appState, setAppState] = useState<AppState>('setup');
  const [currentWorkout, setCurrentWorkout] = useState<WorkoutSession | null>(null);
  const [workoutProgress, setWorkoutProgress] = useState<WorkoutProgress[]>([]);

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
      case 'setup':
        return <WorkoutSetup onStartWorkout={handleStartWorkout} />;
      
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
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#667eea" />
      {renderCurrentScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});

export default App;
