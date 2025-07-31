import { Exercise, WorkoutSession } from '../types/Exercise';
import { exerciseDatabaseDanish } from '../data/exerciseDatabaseDanish';

export class WorkoutGenerator {
  static generateWorkout(
    focus: 'full' | 'upper' | 'lower',
    difficulty: 'beginner' | 'intermediate' | 'advanced',
    duration: number = 10 // minutes
  ): WorkoutSession {
    const filteredExercises = this.filterExercises(focus, difficulty);
    const selectedExercises = this.selectExercisesForDuration(filteredExercises, duration);
    
    return {
      id: this.generateId(),
      name: this.generateWorkoutName(focus, difficulty),
      exercises: selectedExercises,
      totalDuration: duration * 60, // Use the requested duration exactly
      difficulty,
      focus
    };
  }

  private static filterExercises(
    focus: 'full' | 'upper' | 'lower',
    difficulty: 'beginner' | 'intermediate' | 'advanced'
  ): Exercise[] {
    return exerciseDatabaseDanish.filter(exercise => {
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

  private static selectExercisesForDuration(exercises: Exercise[], targetMinutes: number): Exercise[] {
    // Office-friendly exercise selection based on realistic break time
    const durationMap = {
      5: { count: 3, approach: 'quick' },      // 3 exercises, ~1.5 min each + rest
      10: { count: 4, approach: 'standard' },  // 4 exercises, ~2.5 min each + rest  
      15: { count: 5, approach: 'thorough' },  // 5 exercises, ~3 min each + rest
      20: { count: 6, approach: 'complete' }   // 6 exercises, ~3.5 min each + rest
    };

    const config = durationMap[targetMinutes as keyof typeof durationMap] || durationMap[10];
    const shuffled = [...exercises].sort(() => Math.random() - 0.5);
    
    // Ensure good mix of exercise types
    const activeExercises = shuffled.filter(e => e.type === 'active');
    const isometricExercises = shuffled.filter(e => e.type === 'isometric');
    
    const selected: Exercise[] = [];
    let activeIndex = 0;
    let isometricIndex = 0;
    let useActive = true;
    
    // Select exercises alternating between types
    for (let i = 0; i < config.count; i++) {
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
        // Adjust exercise parameters based on duration approach
        const adjustedExercise = this.adjustExerciseForDuration(nextExercise, config.approach);
        selected.push(adjustedExercise);
        useActive = !useActive;
      }
    }
    
    return selected;
  }

  private static adjustExerciseForDuration(exercise: Exercise, approach: string): Exercise {
    const adjusted = { ...exercise };
    
    switch (approach) {
      case 'quick': // 5 min - reduce intensity for quick breaks
        if (exercise.executionType === 'timer') {
          adjusted.duration = Math.max(20, (exercise.duration || 30) - 10);
        } else {
          adjusted.reps = Math.max(5, (exercise.reps || 10) - 3);
          adjusted.sets = 1; // Single set for quick breaks
        }
        break;
        
      case 'standard': // 10 min - standard workout
        // Keep original values
        break;
        
      case 'thorough': // 15 min - slightly increase
        if (exercise.executionType === 'timer') {
          adjusted.duration = (exercise.duration || 30) + 10;
        } else {
          adjusted.reps = (exercise.reps || 10) + 2;
        }
        break;
        
      case 'complete': // 20 min - full workout experience
        if (exercise.executionType === 'timer') {
          adjusted.duration = (exercise.duration || 30) + 15;
        } else {
          adjusted.reps = (exercise.reps || 10) + 3;
          adjusted.sets = Math.max(2, adjusted.sets || 1);
        }
        break;
    }
    
    return adjusted;
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
      full: 'Hele Kroppen',
      upper: 'Overkrop',
      lower: 'Underkrop'
    };
    
    const difficultyNames = {
      beginner: 'Begynder',
      intermediate: 'Mellem',
      advanced: 'Avanceret'
    };
    
    return `${focusNames[focus]} ${difficultyNames[difficulty]} Pause`;
  }

  private static generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
