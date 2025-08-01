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

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t.workoutComplete}</Text>
        <Text style={styles.motivationalMessage}>
          {getMotivationalMessage()}
        </Text>
      </View>

      <View style={styles.summaryCard}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{completedExercises}</Text>
            <Text style={styles.statLabel}>{t.exercises}</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{calculateWorkoutDuration()}</Text>
            <Text style={styles.statLabel}>{t.minutes}</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{Math.round(completionRate)}</Text>
            <Text style={styles.statLabel}>{t.complete_percent}</Text>
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
                    { backgroundColor: isCompleted ? '#4CAF50' : '#e0e0e0' }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A4A5C',
  },
  header: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#1A4A5C',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4FC3F7',
    marginBottom: 12,
  },
  motivationalMessage: {
    fontSize: 16,
    color: '#B0C4DE',
    textAlign: 'center',
    lineHeight: 22,
  },
  summaryCard: {
    margin: 20,
    backgroundColor: 'rgba(79, 195, 247, 0.1)',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(79, 195, 247, 0.3)',
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
    color: '#4FC3F7',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#B0C4DE',
    fontWeight: '500',
  },
  progressBarContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(79, 195, 247, 0.3)',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4FC3F7',
    borderRadius: 4,
  },
  progressText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#B0C4DE',
  },
  exerciseList: {
    margin: 20,
    marginTop: 0,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4FC3F7',
    marginBottom: 16,
  },
  exerciseItem: {
    backgroundColor: 'rgba(79, 195, 247, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(79, 195, 247, 0.2)',
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E0E0E0',
    flex: 1,
  },
  completedExercise: {
    textDecorationLine: 'line-through',
    color: '#B0C4DE',
  },
  statusIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  exerciseDetails: {
    fontSize: 14,
    color: '#B0C4DE',
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
  primaryButton: {
    backgroundColor: '#4FC3F7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  primaryButtonText: {
    color: '#1A4A5C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'rgba(79, 195, 247, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(79, 195, 247, 0.4)',
  },
  secondaryButtonText: {
    color: '#4FC3F7',
    fontSize: 16,
    fontWeight: '500',
  },
  tips: {
    margin: 20,
    marginTop: 0,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 40,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  tipText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
    lineHeight: 20,
  },
});

export default WorkoutSummary;
