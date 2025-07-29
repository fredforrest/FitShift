export interface Exercise {
  id: string;
  name: string;
  description: string;
  type: 'active' | 'isometric';
  category: 'upper' | 'lower' | 'full';
  muscleGroups: string[];
  executionType: 'timer' | 'reps';
  duration?: number; // in seconds for timer-based
  reps?: number;
  sets?: number;
  instructions: string[];
  tips: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  image?: string;
}

export interface WorkoutSession {
  id: string;
  name: string;
  exercises: Exercise[];
  totalDuration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  focus: 'full' | 'upper' | 'lower';
}

export interface WorkoutProgress {
  exerciseId: string;
  completed: boolean;
  startTime?: Date;
  endTime?: Date;
  actualReps?: number;
  actualDuration?: number;
}
