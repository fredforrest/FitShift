import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Alert,
} from 'react-native';
import { Exercise, WorkoutSession, WorkoutProgress } from '../types/Exercise';
import ReadyScreen from './ReadyScreen';
import { useLocalization } from '../localization/LocalizationContext';
import { useTheme } from '../theme/ThemeContext';

const { width, height } = Dimensions.get('window');

interface WorkoutExecutionProps {
  workout: WorkoutSession;
  onWorkoutComplete: (progress: WorkoutProgress[]) => void;
  onBackToSetup: () => void;
}

const WorkoutExecution: React.FC<WorkoutExecutionProps> = ({
  workout,
  onWorkoutComplete,
  onBackToSetup,
}) => {
  const { t, language } = useLocalization();
  const { theme } = useTheme();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showReady, setShowReady] = useState(true);
  const [showRest, setShowRest] = useState(false);
  const [restTimeRemaining, setRestTimeRemaining] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [progress, setProgress] = useState<WorkoutProgress[]>([]);
  const [scaleAnim] = useState(new Animated.Value(1));

  const currentExercise = workout.exercises[currentExerciseIndex];
  const isLastExercise = currentExerciseIndex === workout.exercises.length - 1;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && isActive) {
      handleExerciseComplete();
    }

    return () => clearInterval(interval);
  }, [isActive, timeRemaining]);

  useEffect(() => {
    let restInterval: NodeJS.Timeout;
    
    if (showRest && restTimeRemaining > 0) {
      restInterval = setInterval(() => {
        setRestTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (restTimeRemaining === 0 && showRest) {
      // Rest period complete, move to next exercise
      setShowRest(false);
      setCurrentExerciseIndex(prev => prev + 1);
    }

    return () => clearInterval(restInterval);
  }, [showRest, restTimeRemaining]);

  useEffect(() => {
    // Initialize timer for current exercise
    if (currentExercise?.executionType === 'timer') {
      setTimeRemaining(currentExercise.duration || 30);
    }
    // Show ready screen for each new exercise
    setShowReady(true);
    setIsActive(false);
  }, [currentExerciseIndex]);

  const handleReadyComplete = () => {
    setShowReady(false);
    if (currentExercise?.executionType === 'timer') {
      startExercise();
    }
  };

  const startExercise = () => {
    setIsActive(true);
    const newProgress: WorkoutProgress = {
      exerciseId: currentExercise.id,
      completed: false,
      startTime: new Date(),
    };
    setProgress(prev => [...prev, newProgress]);
    
    // Animation for active state
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const pauseExercise = () => {
    setIsActive(false);
  };

  const handleExerciseComplete = () => {
    setIsActive(false);
    
    // Update progress
    setProgress(prev => 
      prev.map((p, index) => 
        index === prev.length - 1 
          ? { ...p, completed: true, endTime: new Date() }
          : p
      )
    );

    if (isLastExercise) {
      // Workout complete
      setTimeout(() => {
        onWorkoutComplete(progress);
      }, 1000);
    } else {
      // Start rest period between exercises (20-30 seconds random)
      const restDuration = Math.floor(Math.random() * 11) + 20; // Random 20-30 seconds
      setRestTimeRemaining(restDuration);
      setShowRest(true);
    }
  };

  const renderRestScreen = () => {
    const restStyles = {
      container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        paddingTop: 50,
      },
      restContainer: {
        flex: 1,
        justifyContent: 'center' as const,
        alignItems: 'center' as const,
        padding: 20,
      },
      restTitle: {
        fontSize: 32,
        fontWeight: 'bold' as const,
        color: theme.colors.accent,
        marginBottom: 12,
        textAlign: 'center' as const,
      },
      restSubtitle: {
        fontSize: 16,
        color: theme.colors.textSecondary,
        textAlign: 'center' as const,
        marginBottom: 40,
        lineHeight: 24,
      },
      restTimerContainer: {
        alignItems: 'center' as const,
        marginBottom: 40,
      },
      restTimerText: {
        fontSize: 72,
        fontWeight: 'bold' as const,
        color: theme.colors.accent,
        marginBottom: 8,
      },
      restTimerLabel: {
        fontSize: 16,
        color: theme.colors.textSecondary,
        textAlign: 'center' as const,
      },
      skipRestButton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 20,
        backgroundColor: theme.colors.accent,
      },
      skipRestButtonText: {
        fontSize: 16,
        fontWeight: '600' as const,
        color: theme.colors.buttonText,
      },
    };

    return (
      <View style={restStyles.container}>
        <View style={restStyles.restContainer}>
          <Text style={restStyles.restTitle}>
            {t.rest}
          </Text>
          <Text style={restStyles.restSubtitle}>
            {t.restDescription}
          </Text>
          <View style={restStyles.restTimerContainer}>
            <Text style={restStyles.restTimerText}>{restTimeRemaining}</Text>
            <Text style={restStyles.restTimerLabel}>
              {t.secondsRemaining}
            </Text>
          </View>
          <TouchableOpacity 
            style={restStyles.skipRestButton}
            onPress={() => {
              setShowRest(false);
              setCurrentExerciseIndex(prev => prev + 1);
            }}
          >
            <Text style={restStyles.skipRestButtonText}>
              {t.skipRest}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (showReady) {
    return (
      <ReadyScreen
        exerciseName={currentExercise.name}
        onReady={handleReadyComplete}
      />
    );
  }

  if (showRest) {
    return renderRestScreen();
  }

  const skipExercise = () => {
    Alert.alert(
      t.skipExercise,
      t.skipConfirm,
      [
        { text: t.cancel, style: 'cancel' },
        { text: t.skip, onPress: handleExerciseComplete },
      ]
    );
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    return ((currentExerciseIndex + (isActive ? 1 : 0)) / workout.exercises.length) * 100;
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      paddingTop: 50,
    },
    progressContainer: {
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    progressBar: {
      height: 6,
      backgroundColor: theme.colors.surface,
      borderRadius: 3,
      marginBottom: 8,
    },
    progressFill: {
      height: '100%',
      backgroundColor: theme.colors.accent,
      borderRadius: 3,
    },
    progressText: {
      textAlign: 'center',
      fontSize: 14,
      color: theme.colors.textSecondary,
      fontWeight: '500',
    },
    exerciseCard: {
      margin: 20,
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      padding: 24,
      borderWidth: 1,
      borderColor: theme.colors.accent + '30',
    },
    exerciseHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    exerciseName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.accent,
      flex: 1,
    },
    typeTag: {
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 12,
    },
    typeText: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
    },
    exerciseDescription: {
      fontSize: 16,
      color: theme.colors.textSecondary,
      marginBottom: 20,
      lineHeight: 22,
    },
    metricsContainer: {
      alignItems: 'center',
      marginBottom: 24,
    },
    timerContainer: {
      alignItems: 'center',
    },
    timerText: {
      fontSize: 48,
      fontWeight: 'bold',
      color: theme.colors.accent,
      marginBottom: 4,
    },
    timerLabel: {
      fontSize: 16,
      color: theme.colors.textSecondary,
    },
    repsContainer: {
      alignItems: 'center',
    },
    repsText: {
      fontSize: 48,
      fontWeight: 'bold',
      color: theme.colors.accent,
      marginBottom: 4,
    },
    repsLabel: {
      fontSize: 16,
      color: theme.colors.textSecondary,
    },
    instructionsContainer: {
      marginTop: 8,
    },
    instructionsTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.colors.accent,
      marginBottom: 8,
    },
    instructionText: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      marginBottom: 4,
      lineHeight: 20,
    },
    restNoticeContainer: {
      marginTop: 12,
      padding: 12,
      backgroundColor: theme.colors.accent + '15',
      borderRadius: 8,
      borderLeftWidth: 3,
      borderLeftColor: theme.colors.accent,
    },
    restNoticeText: {
      fontSize: 14,
      color: theme.colors.accent,
      fontWeight: '500',
      textAlign: 'center',
      lineHeight: 20,
    },
    controlsContainer: {
      padding: 20,
      paddingBottom: 40,
    },
    primaryButton: {
      padding: 18,
      borderRadius: 12,
      alignItems: 'center',
      marginBottom: 16,
      backgroundColor: theme.colors.accent,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
    primaryButtonText: {
      color: theme.colors.primary,
      fontSize: 18,
      fontWeight: 'bold',
    },
    secondaryButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 12,
    },
    secondaryButton: {
      flex: 1,
      padding: 12,
      borderRadius: 8,
      backgroundColor: theme.colors.surface,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.colors.accent + '40',
    },
    secondaryButtonText: {
      color: theme.colors.accent,
      fontSize: 16,
      fontWeight: '500',
    },
  });

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${getProgressPercentage()}%` }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          {currentExerciseIndex + 1} of {workout.exercises.length}
        </Text>
      </View>

      {/* Exercise Info */}
      <Animated.View 
        style={[
          styles.exerciseCard,
          { transform: [{ scale: scaleAnim }] }
        ]}
      >
        <View style={styles.exerciseHeader}>
          <Text style={styles.exerciseName}>{currentExercise.name}</Text>
          <View style={[
            styles.typeTag,
            { backgroundColor: currentExercise.type === 'active' ? theme.colors.success : theme.colors.accent }
          ]}>
            <Text style={styles.typeText}>
              {currentExercise.type === 'active' ? t.active : t.hold}
            </Text>
          </View>
        </View>

        <Text style={styles.exerciseDescription}>
          {currentExercise.description}
        </Text>

        {/* Timer or Reps Display */}
        <View style={styles.metricsContainer}>
          {currentExercise.executionType === 'timer' ? (
            <View style={styles.timerContainer}>
              <Text style={styles.timerText}>{formatTime(timeRemaining)}</Text>
              <Text style={styles.timerLabel}>{t.timeRemaining}</Text>
            </View>
          ) : (
            <View style={styles.repsContainer}>
              <Text style={styles.repsText}>{currentExercise.reps}</Text>
              <Text style={styles.repsLabel}>{t.reps} x {currentExercise.sets} {t.sets}</Text>
            </View>
          )}
        </View>

        {/* Instructions */}
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsTitle}>{t.instructions}</Text>
          {currentExercise.instructions.map((instruction, index) => (
            <Text key={index} style={styles.instructionText}>
              {index + 1}. {instruction}
            </Text>
          ))}
          
          {/* Rest Period Notice for Multi-Set Dynamic Exercises */}
          {currentExercise.executionType === 'reps' && (currentExercise.sets || 1) > 1 && (
            <View style={styles.restNoticeContainer}>
              <Text style={styles.restNoticeText}>
                💡 {t.restBetweenSets}
              </Text>
            </View>
          )}
        </View>
      </Animated.View>

      {/* Control Buttons */}
      <View style={styles.controlsContainer}>
        {currentExercise.executionType === 'timer' ? (
          <TouchableOpacity
            style={[
              styles.primaryButton,
              { backgroundColor: isActive ? theme.colors.error : theme.colors.success }
            ]}
            onPress={isActive ? pauseExercise : startExercise}
          >
            <Text style={styles.primaryButtonText}>
              {isActive ? t.pause : t.start}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.primaryButton, { backgroundColor: theme.colors.success }]}
            onPress={handleExerciseComplete}
          >
            <Text style={styles.primaryButtonText}>{t.complete}</Text>
          </TouchableOpacity>
        )}

        <View style={styles.secondaryButtons}>
          <TouchableOpacity style={styles.secondaryButton} onPress={skipExercise}>
            <Text style={styles.secondaryButtonText}>{t.skip}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.secondaryButton} onPress={onBackToSetup}>
            <Text style={styles.secondaryButtonText}>{t.exit}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WorkoutExecution;
