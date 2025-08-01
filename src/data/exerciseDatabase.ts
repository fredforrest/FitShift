import { Exercise } from '../types/Exercise';

export const exerciseDatabase: Exercise[] = [
  // Upper Body Active Exercises
  {
    id: 'push-up',
    name: 'Push-up',
    description: 'Classic bodyweight exercise targeting chest, shoulders, and triceps',
    type: 'active',
    category: 'upper',
    muscleGroups: ['chest', 'shoulders', 'triceps', 'core'],
    executionType: 'reps',
    reps: 10,
    sets: 3,
    instructions: [
      'Start in a plank position with hands slightly wider than shoulders',
      'Lower your chest to the ground while keeping your body straight',
      'Push back up to the starting position',
      'Keep your core engaged throughout the movement'
    ],
    tips: [
      'Keep your body in a straight line from head to heels',
      'Don\'t let your hips sag or pike up',
      'Control the descent for maximum benefit'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'diamond-push-up',
    name: 'Diamond Push-up',
    description: 'Advanced push-up variation focusing on triceps',
    type: 'active',
    category: 'upper',
    muscleGroups: ['triceps', 'chest', 'shoulders'],
    executionType: 'reps',
    reps: 8,
    sets: 2,
    instructions: [
      'Form a diamond shape with your hands under your chest',
      'Lower your chest toward your hands',
      'Push back up maintaining the diamond hand position'
    ],
    tips: [
      'This variation is more challenging than regular push-ups',
      'Focus on slow, controlled movements'
    ],
    difficulty: 'advanced'
  },
  {
    id: 'pike-push-up',
    name: 'Pike Push-up',
    description: 'Shoulder-focused push-up variation',
    type: 'active',
    category: 'upper',
    muscleGroups: ['shoulders', 'triceps', 'upper chest'],
    executionType: 'reps',
    reps: 8,
    sets: 2,
    instructions: [
      'Start in downward dog position',
      'Lower your head toward the ground',
      'Push back up to starting position'
    ],
    tips: [
      'Keep your legs as straight as possible',
      'Focus on shoulder strength'
    ],
    difficulty: 'intermediate'
  },
  
  // Upper Body Isometric Exercises
  {
    id: 'plank',
    name: 'Plank Hold',
    description: 'Core strengthening isometric exercise',
    type: 'isometric',
    category: 'full',
    muscleGroups: ['core', 'shoulders', 'back'],
    executionType: 'timer',
    duration: 45,
    instructions: [
      'Start in push-up position',
      'Hold your body straight from head to heels',
      'Keep your core tight and breathe normally'
    ],
    tips: [
      'Don\'t hold your breath',
      'Keep your hips level'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'wall-sit',
    name: 'Wall Sit',
    description: 'Isometric leg strengthening exercise',
    type: 'isometric',
    category: 'lower',
    muscleGroups: ['quadriceps', 'glutes', 'calves'],
    executionType: 'timer',
    duration: 45,
    instructions: [
      'Stand with your back against a wall',
      'Slide down until your thighs are parallel to the floor',
      'Hold this position while keeping your back against the wall'
    ],
    tips: [
      'Keep your knees at 90 degrees',
      'Distribute weight evenly on both legs'
    ],
    difficulty: 'beginner'
  },

  // Lower Body Active Exercises
  {
    id: 'squat',
    name: 'Bodyweight Squat',
    description: 'Fundamental lower body exercise',
    type: 'active',
    category: 'lower',
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings', 'calves'],
    executionType: 'reps',
    reps: 15,
    sets: 3,
    instructions: [
      'Stand with feet shoulder-width apart',
      'Lower down as if sitting in a chair',
      'Keep your chest up and knees tracking over toes',
      'Rise back to starting position'
    ],
    tips: [
      'Go as low as your mobility allows',
      'Keep weight on your heels'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'jump-squat',
    name: 'Jump Squat',
    description: 'Explosive squat variation for power',
    type: 'active',
    category: 'lower',
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings', 'calves'],
    executionType: 'reps',
    reps: 10,
    sets: 2,
    instructions: [
      'Start in squat position',
      'Explode up into a jump',
      'Land softly and immediately go into next squat'
    ],
    tips: [
      'Land softly to protect your joints',
      'Focus on explosive upward movement'
    ],
    difficulty: 'intermediate'
  },
  {
    id: 'lunge',
    name: 'Forward Lunge',
    description: 'Single-leg strengthening exercise',
    type: 'active',
    category: 'lower',
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings'],
    executionType: 'reps',
    reps: 12,
    sets: 2,
    instructions: [
      'Step forward with one leg',
      'Lower your hips until both knees are at 90 degrees',
      'Push back to starting position',
      'Alternate legs'
    ],
    tips: [
      'Keep your front knee over your ankle',
      'Don\'t let your front knee drift inward'
    ],
    difficulty: 'beginner'
  },

  // Full Body Active Exercises
  {
    id: 'burpee',
    name: 'Burpee',
    description: 'Full-body explosive exercise',
    type: 'active',
    category: 'full',
    muscleGroups: ['full body'],
    executionType: 'reps',
    reps: 8,
    sets: 2,
    instructions: [
      'Start standing, then squat down and place hands on floor',
      'Jump feet back into plank position',
      'Do a push-up (optional)',
      'Jump feet back to squat position',
      'Jump up with arms overhead'
    ],
    tips: [
      'This is a high-intensity exercise',
      'Modify by stepping instead of jumping'
    ],
    difficulty: 'advanced'
  },
  {
    id: 'mountain-climber',
    name: 'Mountain Climbers',
    description: 'Dynamic core and cardio exercise',
    type: 'active',
    category: 'full',
    muscleGroups: ['core', 'shoulders', 'legs'],
    executionType: 'timer',
    duration: 30,
    instructions: [
      'Start in plank position',
      'Alternate bringing knees to chest rapidly',
      'Keep hips level and core engaged'
    ],
    tips: [
      'Maintain plank position throughout',
      'Move at a pace you can sustain'
    ],
    difficulty: 'intermediate'
  },

  // Additional Isometric Exercises
  {
    id: 'side-plank',
    name: 'Side Plank',
    description: 'Lateral core strengthening',
    type: 'isometric',
    category: 'full',
    muscleGroups: ['core', 'obliques', 'shoulders'],
    executionType: 'timer',
    duration: 30,
    instructions: [
      'Lie on your side, prop up on your elbow',
      'Lift your hips to form a straight line',
      'Hold this position'
    ],
    tips: [
      'Keep your body in a straight line',
      'Don\'t let your hips sag'
    ],
    difficulty: 'intermediate'
  },
  {
    id: 'glute-bridge-hold',
    name: 'Glute Bridge Hold',
    description: 'Isometric glute and hamstring exercise',
    type: 'isometric',
    category: 'lower',
    muscleGroups: ['glutes', 'hamstrings', 'core'],
    executionType: 'timer',
    duration: 30,
    instructions: [
      'Lie on your back with knees bent',
      'Lift your hips up, squeezing glutes',
      'Hold this position'
    ],
    tips: [
      'Squeeze your glutes at the top',
      'Keep your core engaged'
    ],
    difficulty: 'beginner'
  }
];
