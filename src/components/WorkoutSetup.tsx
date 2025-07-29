import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

const { width } = Dimensions.get('window');

interface WorkoutSetupProps {
  onStartWorkout: (focus: 'full' | 'upper' | 'lower', difficulty: 'beginner' | 'intermediate' | 'advanced', duration: number) => void;
}

const WorkoutSetup: React.FC<WorkoutSetupProps> = ({ onStartWorkout }) => {
  const [selectedFocus, setSelectedFocus] = useState<'full' | 'upper' | 'lower'>('full');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [selectedDuration, setSelectedDuration] = useState<number>(10);

  const focusOptions = [
    { key: 'full', label: 'Full Body', icon: '💪', description: 'Work your entire body' },
    { key: 'upper', label: 'Upper Body', icon: '🏋️', description: 'Focus on arms, chest & shoulders' },
    { key: 'lower', label: 'Lower Body', icon: '🦵', description: 'Strengthen legs & glutes' },
  ] as const;

  const difficultyOptions = [
    { key: 'beginner', label: 'Beginner', icon: '🌱', color: ['#4CAF50', '#66BB6A'] },
    { key: 'intermediate', label: 'Intermediate', icon: '🔥', color: ['#FF9800', '#FFB74D'] },
    { key: 'advanced', label: 'Advanced', icon: '⚡', color: ['#F44336', '#EF5350'] },
  ] as const;

  const durationOptions = [5, 10, 15, 20];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>FitShift</Text>
        <Text style={styles.headerSubtitle}>Your Active Break Companion</Text>
      </View>

      <View style={styles.content}>
        {/* Focus Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Choose Your Focus</Text>
          <View style={styles.optionsContainer}>
            {focusOptions.map((option) => (
              <TouchableOpacity
                key={option.key}
                style={[
                  styles.focusOption,
                  selectedFocus === option.key && styles.selectedOption,
                ]}
                onPress={() => setSelectedFocus(option.key)}
              >
                <Text style={styles.optionIcon}>{option.icon}</Text>
                <Text style={[
                  styles.optionLabel,
                  selectedFocus === option.key && styles.selectedOptionText
                ]}>
                  {option.label}
                </Text>
                <Text style={[
                  styles.optionDescription,
                  selectedFocus === option.key && styles.selectedOptionDescription
                ]}>
                  {option.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Difficulty Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Difficulty</Text>
          <View style={styles.difficultyContainer}>
            {difficultyOptions.map((option) => (
              <TouchableOpacity
                key={option.key}
                onPress={() => setSelectedDifficulty(option.key)}
              >
                <View
                  style={[
                    styles.difficultyOption,
                    selectedDifficulty === option.key && styles.selectedDifficulty,
                    selectedDifficulty === option.key && { backgroundColor: option.color[0] }
                  ]}
                >
                  <Text style={styles.difficultyIcon}>{option.icon}</Text>
                  <Text style={[
                    styles.difficultyLabel,
                    selectedDifficulty === option.key && styles.selectedDifficultyText
                  ]}>
                    {option.label}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Duration Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Workout Duration</Text>
          <View style={styles.durationContainer}>
            {durationOptions.map((duration) => (
              <TouchableOpacity
                key={duration}
                style={[
                  styles.durationOption,
                  selectedDuration === duration && styles.selectedDuration,
                ]}
                onPress={() => setSelectedDuration(duration)}
              >
                <Text style={[
                  styles.durationText,
                  selectedDuration === duration && styles.selectedDurationText
                ]}>
                  {duration}min
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Start Button */}
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => onStartWorkout(selectedFocus, selectedDifficulty, selectedDuration)}
        >
          <View style={styles.startButtonGradient}>
            <Text style={styles.startButtonText}>Start Your Break 🚀</Text>
          </View>
        </TouchableOpacity>
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
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#667eea',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  optionsContainer: {
    gap: 12,
  },
  focusOption: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedOption: {
    backgroundColor: '#667eea',
    transform: [{ scale: 1.02 }],
  },
  optionIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  optionLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  selectedOptionText: {
    color: 'white',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  selectedOptionDescription: {
    color: 'rgba(255, 255, 255, 0.9)',
  },
  difficultyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  difficultyOption: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  selectedDifficulty: {
    transform: [{ scale: 1.05 }],
  },
  difficultyIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  difficultyLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  selectedDifficultyText: {
    color: 'white',
  },
  durationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  durationOption: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedDuration: {
    backgroundColor: '#667eea',
    transform: [{ scale: 1.05 }],
  },
  durationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  selectedDurationText: {
    color: 'white',
  },
  startButton: {
    marginTop: 20,
    marginBottom: 30,
  },
  startButtonGradient: {
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#667eea',
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default WorkoutSetup;
