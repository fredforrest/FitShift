import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useLocalization } from '../localization/LocalizationContext';
import { useTheme } from '../theme/ThemeContext';

interface WorkoutSetupProps {
  onStartWorkout: (focus: 'full' | 'upper' | 'lower', difficulty: 'beginner' | 'intermediate' | 'advanced', duration: number) => void;
  onBack?: () => void;
}

const WorkoutSetup: React.FC<WorkoutSetupProps> = ({ onStartWorkout, onBack }) => {
  const [selectedFocus, setSelectedFocus] = useState<'full' | 'upper' | 'lower'>('full');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [selectedDuration, setSelectedDuration] = useState<number>(10);
  const { t, language } = useLocalization();
  const { theme } = useTheme();

  const focusOptions = [
    { key: 'full', label: t.fullBody, icon: '🏋️', description: t.fullBodyDesc },
    { key: 'upper', label: t.upperBody, icon: '💪', description: t.upperBodyDesc },
    { key: 'lower', label: t.lowerBody, icon: '🦵', description: t.lowerBodyDesc },
  ] as const;

  const difficultyOptions = [
    { key: 'beginner', label: t.beginner, icon: '🌱', color: ['#4CAF50', '#66BB6A'] },
    { key: 'intermediate', label: t.intermediate, icon: '🔥', color: ['#FF9800', '#FFB74D'] },
    { key: 'advanced', label: t.advanced, icon: '⚡', color: ['#F44336', '#EF5350'] },
  ] as const;

  const durationOptions = [
    { value: 5, label: '5min'},
    { value: 10, label: '10min' },
    { value: 15, label: '15min' },
    { value: 20, label: '20min' }
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.primary }]} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        {onBack && (
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={[styles.backButtonText, { color: theme.colors.accent }]}>
              ← {language === 'da' ? 'Hjem' : 'Home'}
            </Text>
          </TouchableOpacity>
        )}
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>{t.appTitle}</Text>
        <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary }]}>{t.appSubtitle}</Text>
      </View>

      <View style={styles.content}>
        {/* Focus Selection */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.accent }]}>{t.chooseFocus}</Text>
          <View style={styles.optionsContainer}>
            {focusOptions.map((option) => (
              <TouchableOpacity
                key={option.key}
                style={[
                  styles.focusOption,
                  {
                    backgroundColor: selectedFocus === option.key 
                      ? theme.colors.accent 
                      : theme.colors.surface,
                    borderColor: theme.colors.border,
                  }
                ]}
                onPress={() => setSelectedFocus(option.key)}
              >
                <Text style={styles.optionIcon}>{option.icon}</Text>
                <Text style={[
                  styles.optionLabel,
                  { 
                    color: selectedFocus === option.key 
                      ? theme.colors.buttonText 
                      : theme.colors.text 
                  }
                ]}>
                  {option.label}
                </Text>
                <Text style={[
                  styles.optionDescription,
                  { 
                    color: selectedFocus === option.key 
                      ? theme.colors.buttonText 
                      : theme.colors.textMuted 
                  }
                ]}>
                  {option.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Difficulty Selection */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.accent }]}>{t.selectDifficulty}</Text>
          <View style={styles.difficultyContainer}>
            {difficultyOptions.map((option) => (
              <TouchableOpacity
                key={option.key}
                onPress={() => setSelectedDifficulty(option.key)}
              >
                <View
                  style={[
                    styles.difficultyOption,
                    {
                      backgroundColor: selectedDifficulty === option.key 
                        ? theme.colors.accent 
                        : theme.colors.surface,
                      borderColor: theme.colors.border,
                    }
                  ]}
                >
                  <Text style={styles.difficultyIcon}>{option.icon}</Text>
                  <Text style={[
                    styles.difficultyLabel,
                    { 
                      color: selectedDifficulty === option.key 
                        ? theme.colors.buttonText 
                        : theme.colors.text 
                    }
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
          <Text style={[styles.sectionTitle, { color: theme.colors.accent }]}>{t.workoutDuration}</Text>
          <View style={styles.durationContainer}>
            {durationOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.durationOption,
                  {
                    backgroundColor: selectedDuration === option.value 
                      ? theme.colors.accent 
                      : theme.colors.surface,
                    borderColor: theme.colors.border,
                  }
                ]}
                onPress={() => setSelectedDuration(option.value)}
              >
                <Text style={[
                  styles.durationText,
                  { 
                    color: selectedDuration === option.value 
                      ? theme.colors.buttonText 
                      : theme.colors.text 
                  }
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Start Button */}
        <TouchableOpacity
          style={[styles.startButton, { backgroundColor: theme.colors.accent }]}
          onPress={() => onStartWorkout(selectedFocus, selectedDifficulty, selectedDuration)}
        >
          <Text style={[styles.startButtonText, { color: theme.colors.buttonText }]}>{t.startWorkout}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor removed - now using theme
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    // backgroundColor removed - now using theme (will be handled by container)
  },
  backButton: {
    position: 'absolute',
    top: 70,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    // color removed - now using theme
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    // color removed - now using theme
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    // color removed - now using theme
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
    // color removed - now using theme
    marginBottom: 15,
  },
  optionsContainer: {
    gap: 12,
  },
  focusOption: {
    // backgroundColor removed - now using theme
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    // borderColor removed - now using theme
  },
  selectedOption: {
    // backgroundColor removed - now using theme
    transform: [{ scale: 1.02 }],
  },
  optionIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '600',
    // color removed - now using theme
    marginBottom: 4,
  },
  selectedOptionText: {
    // color removed - now using theme
  },
  optionDescription: {
    fontSize: 14,
    // color removed - now using theme
    textAlign: 'center',
  },
  selectedOptionDescription: {
    // color removed - now using theme
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
    // backgroundColor removed - now using theme
    borderWidth: 1,
    // borderColor removed - now using theme
  },
  selectedDifficulty: {
    // backgroundColor removed - now using theme
    transform: [{ scale: 1.05 }],
  },
  difficultyIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  difficultyLabel: {
    fontSize: 14,
    fontWeight: '600',
    // color removed - now using theme
  },
  selectedDifficultyText: {
    // color removed - now using theme
  },
  durationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  durationOption: {
    flex: 1,
    padding: 16,
    // backgroundColor removed - now using theme
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    // borderColor removed - now using theme
  },
  selectedDuration: {
    // backgroundColor removed - now using theme
    transform: [{ scale: 1.05 }],
  },
  durationText: {
    fontSize: 16,
    fontWeight: '600',
    // color removed - now using theme
    textAlign: 'center',
  },
  startButton: {
    marginTop: 20,
    marginBottom: 30,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    // color removed - now using theme
  },
});

export default WorkoutSetup;
