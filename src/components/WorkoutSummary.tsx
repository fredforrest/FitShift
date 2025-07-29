import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { WorkoutSession, WorkoutProgress } from '../types/Exercise';

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
      return "🎉 Outstanding work! You completed your entire break workout!";
    } else if (completionRate >= 75) {
      return "🔥 Great job! You powered through most of your workout!";
    } else if (completionRate >= 50) {
      return "💪 Good effort! Every bit of movement counts!";
    } else {
      return "🌟 Nice start! Remember, consistency is key!";
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Workout Complete!</Text>
        <Text style={styles.motivationalMessage}>
          {getMotivationalMessage()}
        </Text>
      </View>

      <View style={styles.summaryCard}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{completedExercises}</Text>
            <Text style={styles.statLabel}>Exercises</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{calculateWorkoutDuration()}</Text>
            <Text style={styles.statLabel}>Minutes</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{Math.round(completionRate)}</Text>
            <Text style={styles.statLabel}>% Complete</Text>
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
        <Text style={styles.listTitle}>Exercise Summary</Text>
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
                    ? `${exercise.duration}s hold`
                    : `${exercise.reps} reps × ${exercise.sets} sets`
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
          <Text style={styles.primaryButtonText}>Start Another Break</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]} 
          onPress={onBackToSetup}
        >
          <Text style={styles.secondaryButtonText}>Back to Setup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tips}>
        <Text style={styles.tipsTitle}>💡 Quick Tips</Text>
        <Text style={styles.tipText}>
          • Take active breaks every 25-30 minutes for optimal productivity
        </Text>
        <Text style={styles.tipText}>
          • Stay hydrated throughout your workday
        </Text>
        <Text style={styles.tipText}>
          • Mix different workout focuses throughout the week
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  motivationalMessage: {
    fontSize: 16,
    color: '#667eea',
    textAlign: 'center',
    lineHeight: 22,
  },
  summaryCard: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
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
    color: '#667eea',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  progressBarContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#667eea',
    borderRadius: 4,
  },
  progressText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  exerciseList: {
    margin: 20,
    marginTop: 0,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  exerciseItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
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
    color: '#333',
    flex: 1,
  },
  completedExercise: {
    textDecorationLine: 'line-through',
    color: '#999',
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
    color: '#666',
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
    backgroundColor: '#667eea',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#e0e0e0',
  },
  secondaryButtonText: {
    color: '#666',
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
