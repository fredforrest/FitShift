import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { WorkoutSession, WorkoutProgress } from '../types/Exercise';
import { useLocalization } from '../localization/LocalizationContext';
import { useTheme } from '../theme/ThemeContext';

interface WorkoutSummaryProps {
  workout: WorkoutSession;
  progress: WorkoutProgress[];
  onStartNewWorkout: () => void;
  onBackToSetup: () => void;
}

const WorkoutSummary: React.FC<WorkoutSummaryProps> = ({
  workout,
  progress,
  onStartNewWorkout,
  onBackToSetup,
}) => {
  const { t } = useLocalization();
  const { theme } = useTheme();
  const completedExercises = progress.filter(p => p.completed).length;
  const totalExercises = workout.exercises.length;
  const completionRate = (completedExercises / totalExercises) * 100;

  const calculateWorkoutDuration = () => {
    const first = progress.find(p => p.startTime);
    const last = progress.filter(p => p.endTime).pop();
    
    if (first?.startTime && last?.endTime) {
      const duration = (last.endTime.getTime() - first.startTime.getTime()) / 1000;
      return Math.round(duration / 60); // minutes
    }
    return 0;
  };

  const getMotivationalMessage = () => {
    if (completionRate === 100) {
      return t.outstanding;
    } else if (completionRate >= 75) {
      return t.greatJob;
    } else if (completionRate >= 50) {
      return t.goodEffort;
    } else {
      return t.niceStart;
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary,
    },
    header: {
      backgroundColor: theme.colors.primary,
      paddingTop: 60,
      paddingHorizontal: 30,
      paddingBottom: 20,
      alignItems: 'center',
    },
    headerTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: theme.colors.accent,
      textAlign: 'center',
      marginBottom: 12,
    },
    motivationalMessage: {
      fontSize: 16,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: 22,
    },
    summaryCard: {
      margin: 20,
      backgroundColor: theme.colors.card,
      borderRadius: 16,
      padding: 24,
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 24,
    },
    statItem: {
      alignItems: 'center',
    },
    statNumber: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.colors.accent,
      marginBottom: 4,
    },
    statLabel: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      fontWeight: '500',
    },
    progressBarContainer: {
      marginTop: 8,
    },
    progressBar: {
      height: 8,
      backgroundColor: theme.colors.surface,
      borderRadius: 4,
      marginBottom: 8,
    },
    progressFill: {
      height: '100%',
      backgroundColor: theme.colors.accent,
      borderRadius: 4,
    },
    progressText: {
      textAlign: 'center',
      fontSize: 14,
      color: theme.colors.textSecondary,
    },
    exerciseList: {
      margin: 20,
      marginTop: 0,
    },
    listTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: theme.colors.accent,
      marginBottom: 16,
    },
    exerciseHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 4,
    },
    completedExercise: {
      textDecorationLine: 'line-through',
      color: theme.colors.textMuted,
    },
    buttonContainer: {
      padding: 20,
      gap: 12,
    },
    button: {
      padding: 16,
      borderRadius: 12,
      alignItems: 'center',
    },
    tips: {
      margin: 20,
      marginTop: 0,
      padding: 20,
      backgroundColor: theme.colors.card,
      borderRadius: 12,
      marginBottom: 40,
    },
    tipsTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 12,
    },
    tipText: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      marginBottom: 6,
      lineHeight: 20,
    },
    mainStat: {
      alignItems: 'center',
      marginBottom: 16,
    },
    statValue: {
      fontSize: 48,
      fontWeight: 'bold',
      color: theme.colors.accent,
    },
    additionalStats: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: 16,
      borderTopWidth: 1,
      borderTopColor: theme.colors.accent + '20',
    },
    additionalStat: {
      alignItems: 'center',
    },
    additionalStatValue: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.accent,
    },
    additionalStatLabel: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      marginTop: 4,
    },
    exercisesSection: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: 12,
    },
    exerciseInfo: {
      flex: 1,
    },
    exerciseItem: {
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      padding: 16,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: theme.colors.accent + '20',
    },
    exerciseName: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.text,
      marginBottom: 2,
    },
    exerciseDetails: {
      fontSize: 14,
      color: theme.colors.textSecondary,
    },
    statusIndicator: {
      width: 24,
      height: 24,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 12,
    },
    statusText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'white',
    },
    actionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 12,
      padding: 20,
    },
    primaryButton: {
      flex: 1,
      backgroundColor: theme.colors.accent,
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: 'center',
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    primaryButtonText: {
      color: theme.colors.primary,
      fontSize: 16,
      fontWeight: 'bold',
    },
    secondaryButton: {
      flex: 1,
      backgroundColor: 'transparent',
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: 'center',
      borderWidth: 2,
      borderColor: theme.colors.accent,
    },
    secondaryButtonText: {
      color: theme.colors.accent,
      fontSize: 16,
      fontWeight: '600',
    },
  });

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.primary }]} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>{t.workoutComplete}</Text>
        <Text style={[styles.motivationalMessage, { color: theme.colors.accent }]}>
          {getMotivationalMessage()}
        </Text>
      </View>

      <View style={[styles.summaryCard, { backgroundColor: theme.colors.card }]}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: theme.colors.accent }]}>{completedExercises}</Text>
            <Text style={[styles.statLabel, { color: theme.colors.textMuted }]}>{t.exercises}</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: theme.colors.accent }]}>{calculateWorkoutDuration()}</Text>
            <Text style={[styles.statLabel, { color: theme.colors.textMuted }]}>{t.minutes}</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: theme.colors.accent }]}>{Math.round(completionRate)}</Text>
            <Text style={[styles.statLabel, { color: theme.colors.textMuted }]}>{t.complete_percent}</Text>
          </View>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${completionRate}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            {completedExercises} of {totalExercises} exercises completed
          </Text>
        </View>
      </View>

      <View style={styles.exerciseList}>
        <Text style={styles.listTitle}>{t.exerciseSummary}</Text>
        {workout.exercises.map((exercise, index) => {
          const exerciseProgress = progress.find(p => p.exerciseId === exercise.id);
          const isCompleted = exerciseProgress?.completed || false;
          
          return (
            <View key={exercise.id} style={styles.exerciseItem}>
              <View style={styles.exerciseInfo}>
                <View style={styles.exerciseHeader}>
                  <Text style={[
                    styles.exerciseName,
                    isCompleted && styles.completedExercise
                  ]}>
                    {exercise.name}
                  </Text>
                  <View style={[
                    styles.statusIndicator,
                    { backgroundColor: isCompleted ? theme.colors.success : theme.colors.textMuted }
                  ]}>
                    <Text style={styles.statusText}>
                      {isCompleted ? '✓' : '○'}
                    </Text>
                  </View>
                </View>
                
                <Text style={styles.exerciseDetails}>
                  {exercise.executionType === 'timer' 
                    ? `${exercise.duration}s ${t.hold.toLowerCase()}`
                    : `${exercise.reps} ${t.reps} × ${exercise.sets} ${t.sets}`
                  }
                </Text>
              </View>
            </View>
          );
        })}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.primaryButton]} 
          onPress={onStartNewWorkout}
        >
          <Text style={styles.primaryButtonText}>{t.startAnother}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]} 
          onPress={onBackToSetup}
        >
          <Text style={styles.secondaryButtonText}>{t.backToSetup}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tips}>
        <Text style={styles.tipsTitle}>{t.quickTips}</Text>
        <Text style={styles.tipText}>
          {t.tip1}
        </Text>
        <Text style={styles.tipText}>
          {t.tip2}
        </Text>
        <Text style={styles.tipText}>
          {t.tip3}
        </Text>
      </View>
    </ScrollView>
  );
};

export default WorkoutSummary;
