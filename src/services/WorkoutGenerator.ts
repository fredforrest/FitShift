import { Exercise, WorkoutSession } from '../types/Exercise';
import { exerciseDatabase } from '../data/exerciseDatabase';

export class WorkoutGenerator {
  static generateWorkout(
    focus: 'full' | 'upper' | 'lower',
    difficulty: 'beginner' | 'intermediate' | 'advanced',
    duration: number = 10 // minutes
  ): WorkoutSession {
    const filteredExercises = this.filterExercises(focus, difficulty);
    const selectedExercises = this.selectExercises(filteredExercises, duration);
    
    return {
      id: this.generateId(),
      name: this.generateWorkoutName(focus, difficulty),
      exercises: selectedExercises,
      totalDuration: this.calculateTotalDuration(selectedExercises),
      difficulty,
      focus
    };
  }

  private static filterExercises(
    focus: 'full' | 'upper' | 'lower',
    difficulty: 'beginner' | 'intermediate' | 'advanced'
  ): Exercise[] {
    return exerciseDatabase.filter(exercise => {
      const matchesFocus = focus === 'full' || exercise.category === focus || exercise.category === 'full';
      const matchesDifficulty = this.isDifficultyAppropriate(exercise.difficulty, difficulty);
      return matchesFocus && matchesDifficulty;
    });
  }

  private static isDifficultyAppropriate(
    exerciseDifficulty: 'beginner' | 'intermediate' | 'advanced',
    targetDifficulty: 'beginner' | 'intermediate' | 'advanced'
  ): boolean {
    const difficultyLevels = { beginner: 1, intermediate: 2, advanced: 3 };
    const exerciseLevel = difficultyLevels[exerciseDifficulty];
    const targetLevel = difficultyLevels[targetDifficulty];
    
    // Allow exercises at target level or one level below
    return exerciseLevel <= targetLevel && exerciseLevel >= Math.max(1, targetLevel - 1);
  }

  private static selectExercises(exercises: Exercise[], targetDuration: number): Exercise[] {
    const selected: Exercise[] = [];
    const shuffled = [...exercises].sort(() => Math.random() - 0.5);
    
    // Ensure mix of active and isometric exercises
    const activeExercises = shuffled.filter(e => e.type === 'active');
    const isometricExercises = shuffled.filter(e => e.type === 'isometric');
    
    let currentDuration = 0;
    const targetDurationSeconds = targetDuration * 60;
    
    // Add exercises alternating between active and isometric when possible
    let useActive = true;
    let activeIndex = 0;
    let isometricIndex = 0;
    
    while (currentDuration < targetDurationSeconds && (activeIndex < activeExercises.length || isometricIndex < isometricExercises.length)) {
      let nextExercise: Exercise | null = null;
      
      if (useActive && activeIndex < activeExercises.length) {
        nextExercise = activeExercises[activeIndex++];
      } else if (!useActive && isometricIndex < isometricExercises.length) {
        nextExercise = isometricExercises[isometricIndex++];
      } else if (activeIndex < activeExercises.length) {
        nextExercise = activeExercises[activeIndex++];
      } else if (isometricIndex < isometricExercises.length) {
        nextExercise = isometricExercises[isometricIndex++];
      }
      
      if (nextExercise) {
        selected.push(nextExercise);
        currentDuration += this.estimateExerciseDuration(nextExercise);
        useActive = !useActive;
      } else {
        break;
      }
    }
    
    return selected;
  }

  private static estimateExerciseDuration(exercise: Exercise): number {
    if (exercise.executionType === 'timer') {
      return (exercise.duration || 30) + 10; // Add 10 seconds for transition
    } else {
      const estimatedSecondsPerRep = 3;
      const restBetweenSets = 30;
      const reps = exercise.reps || 10;
      const sets = exercise.sets || 1;
      return (reps * estimatedSecondsPerRep * sets) + (restBetweenSets * (sets - 1)) + 10;
    }
  }

  private static calculateTotalDuration(exercises: Exercise[]): number {
    return exercises.reduce((total, exercise) => {
      return total + this.estimateExerciseDuration(exercise);
    }, 0);
  }

  private static generateWorkoutName(
    focus: 'full' | 'upper' | 'lower',
    difficulty: 'beginner' | 'intermediate' | 'advanced'
  ): string {
    const focusNames = {
      full: 'Full Body',
      upper: 'Upper Body',
      lower: 'Lower Body'
    };
    
    const difficultyNames = {
      beginner: 'Starter',
      intermediate: 'Power',
      advanced: 'Elite'
    };
    
    return `${focusNames[focus]} ${difficultyNames[difficulty]} Break`;
  }

  private static generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
