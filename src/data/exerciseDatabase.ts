import { Exercise } from '../types/Exercise';

export const exerciseDatabase: Exercise[] = [
  // Upper Body Active Exercises
  {
    id: 'wall-push-up',
    name: 'Wall Push-up',
    description: 'Beginner-friendly push-up variation using a wall',
    type: 'active',
    category: 'upper',
    muscleGroups: ['chest', 'shoulders', 'triceps'],
    executionType: 'reps',
    reps: 12,
    sets: 2,
    instructions: [
      'Stand arm\'s length from a wall',
      'Place palms flat against the wall at shoulder height',
      'Lean forward and push back to starting position',
      'Keep your body straight throughout the movement'
    ],
    tips: [
      'Perfect for beginners or those with wrist issues',
      'Step further from wall to increase difficulty',
      'Focus on controlled movement'
    ],
    difficulty: 'beginner'
  },
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
  {
    id: 'wide-grip-push-up',
    name: 'Wide Grip Push-up',
    description: 'Push-up variation targeting chest with wider hand placement',
    type: 'active',
    category: 'upper',
    muscleGroups: ['chest', 'shoulders', 'triceps'],
    executionType: 'reps',
    reps: 8,
    sets: 2,
    instructions: [
      'Start in plank position with hands wider than shoulders',
      'Place hands about 1.5 times shoulder width apart',
      'Lower chest toward the ground',
      'Push back up maintaining wide hand position'
    ],
    tips: [
      'Targets chest muscles more than regular push-ups',
      'Don\'t go too wide to avoid shoulder strain',
      'Keep core engaged throughout'
    ],
    difficulty: 'intermediate'
  },
  {
    id: 'narrow-grip-push-up',
    name: 'Narrow Grip Push-up',
    description: 'Push-up variation focusing on triceps with close hand placement',
    type: 'active',
    category: 'upper',
    muscleGroups: ['triceps', 'chest', 'shoulders'],
    executionType: 'reps',
    reps: 6,
    sets: 2,
    instructions: [
      'Start in plank position with hands close together',
      'Place hands directly under your chest',
      'Lower chest toward hands keeping elbows close to body',
      'Push back up maintaining narrow hand position'
    ],
    tips: [
      'More challenging than regular push-ups',
      'Keep elbows tucked close to your sides',
      'Great for tricep development'
    ],
    difficulty: 'intermediate'
  },
  {
    id: 'archer-push-up',
    name: 'Archer Push-up',
    description: 'Advanced single-arm dominant push-up variation',
    type: 'active',
    category: 'upper',
    muscleGroups: ['chest', 'shoulders', 'triceps', 'core'],
    executionType: 'reps',
    reps: 4,
    sets: 2,
    instructions: [
      'Start in wide push-up position',
      'Lower body toward one hand while extending the other arm',
      'Push back up using primarily the bent arm',
      'Alternate sides with each repetition'
    ],
    tips: [
      'This is a progression toward one-arm push-ups',
      'Start with small range of motion',
      'Focus on the working arm'
    ],
    difficulty: 'advanced'
  },
  {
    id: 'incline-push-up',
    name: 'Incline Push-up',
    description: 'Easier push-up variation using elevated hand position',
    type: 'active',
    category: 'upper',
    muscleGroups: ['chest', 'shoulders', 'triceps'],
    executionType: 'reps',
    reps: 10,
    sets: 2,
    instructions: [
      'Place hands on a chair, desk, or elevated surface',
      'Step feet back to create an inclined plank position',
      'Lower chest toward the elevated surface',
      'Push back up to starting position'
    ],
    tips: [
      'Perfect progression between wall and floor push-ups',
      'Higher surface = easier exercise',
      'Great for building strength gradually'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'desk-dips',
    name: 'Desk Dips',
    description: 'Tricep exercise using a chair or desk edge',
    type: 'active',
    category: 'upper',
    muscleGroups: ['triceps', 'shoulders', 'chest'],
    executionType: 'reps',
    reps: 8,
    sets: 2,
    instructions: [
      'Sit on edge of a sturdy chair or desk',
      'Place hands beside your hips, fingers forward',
      'Slide forward off the edge, supporting weight with arms',
      'Lower body by bending elbows, then push back up'
    ],
    tips: [
      'Keep feet on floor for easier variation',
      'Don\'t dip too low to protect shoulders',
      'Great office-friendly exercise'
    ],
    difficulty: 'beginner'
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
  {
    id: 'calf-raises',
    name: 'Calf Raises',
    description: 'Simple lower body exercise targeting calf muscles',
    type: 'active',
    category: 'lower',
    muscleGroups: ['calves'],
    executionType: 'reps',
    reps: 15,
    sets: 2,
    instructions: [
      'Stand with feet shoulder-width apart',
      'Rise up onto your toes as high as possible',
      'Hold briefly at the top',
      'Lower back down with control'
    ],
    tips: [
      'Can be done anywhere, anytime',
      'Hold onto something for balance if needed',
      'Focus on the squeeze at the top'
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
  {
    id: 'dead-bug',
    name: 'Dead Bug',
    description: 'Core stability exercise performed lying down',
    type: 'active',
    category: 'full',
    muscleGroups: ['core', 'hip flexors'],
    executionType: 'reps',
    reps: 8,
    sets: 2,
    instructions: [
      'Lie on your back with arms extended toward ceiling',
      'Bend knees to 90 degrees, thighs vertical',
      'Slowly lower opposite arm and leg toward floor',
      'Return to start and repeat with other side'
    ],
    tips: [
      'Keep lower back pressed against floor',
      'Move slowly and with control',
      'Perfect for core strength without crunches'
    ],
    difficulty: 'beginner'
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
  },

  // Mobility and Flexibility Exercises
  {
    id: 'hip-flexor-stretch',
    name: 'Hip Flexor Stretch',
    description: 'Essential stretch for desk workers to counter sitting posture',
    type: 'isometric',
    category: 'full',
    muscleGroups: ['hip flexors', 'quadriceps'],
    executionType: 'timer',
    duration: 30,
    instructions: [
      'Step into a lunge position',
      'Lower back knee toward ground (or keep elevated)',
      'Push hips forward to feel stretch in front of back leg',
      'Hold position and switch sides'
    ],
    tips: [
      'Perfect for countering long sitting periods',
      'Keep front knee over ankle',
      'Breathe deeply during the stretch'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'thoracic-spine-rotation',
    name: 'Thoracic Spine Rotation',
    description: 'Upper back mobility to counter hunched posture',
    type: 'active',
    category: 'upper',
    muscleGroups: ['thoracic spine', 'shoulders'],
    executionType: 'reps',
    reps: 8,
    sets: 1,
    instructions: [
      'Start on hands and knees',
      'Place one hand behind your head',
      'Rotate that elbow up toward ceiling',
      'Return to start and repeat, then switch sides'
    ],
    tips: [
      'Essential for office workers',
      'Move slowly and feel the rotation',
      'Can be done standing against a wall'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'neck-rolls',
    name: 'Neck Rolls',
    description: 'Gentle neck mobility for computer work relief',
    type: 'active',
    category: 'upper',
    muscleGroups: ['neck', 'upper traps'],
    executionType: 'reps',
    reps: 5,
    sets: 1,
    instructions: [
      'Sit or stand with good posture',
      'Slowly lower chin toward chest',
      'Gently roll head to one side, back, other side',
      'Complete circle slowly and reverse direction'
    ],
    tips: [
      'Move very slowly and gently',
      'Stop if you feel any pain',
      'Perfect for desk work breaks'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'wrist-stretches',
    name: 'Wrist Stretches',
    description: 'Essential stretches for computer users',
    type: 'isometric',
    category: 'upper',
    muscleGroups: ['wrists', 'forearms'],
    executionType: 'timer',
    duration: 20,
    instructions: [
      'Extend arm forward with palm up',
      'Use other hand to gently pull fingers back',
      'Hold, then flip palm down and pull hand down',
      'Repeat on other arm'
    ],
    tips: [
      'Crucial for preventing computer-related strain',
      'Do regularly throughout workday',
      'Gentle pressure only'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'cat-cow-stretch',
    name: 'Cat-Cow Stretch',
    description: 'Spinal mobility exercise for back health',
    type: 'active',
    category: 'full',
    muscleGroups: ['spine', 'core', 'back'],
    executionType: 'reps',
    reps: 8,
    sets: 1,
    instructions: [
      'Start on hands and knees',
      'Arch back and look up (cow position)',
      'Round back toward ceiling and tuck chin (cat position)',
      'Flow smoothly between positions'
    ],
    tips: [
      'Excellent for spinal health',
      'Move with your breath',
      'Can be done in a chair modification'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'ankle-circles',
    name: 'Ankle Circles',
    description: 'Simple circulation boost for sedentary workers',
    type: 'active',
    category: 'lower',
    muscleGroups: ['ankles', 'calves'],
    executionType: 'reps',
    reps: 10,
    sets: 1,
    instructions: [
      'Sit comfortably or lie down',
      'Lift one foot off ground',
      'Slowly rotate ankle in full circles',
      'Reverse direction, then switch feet'
    ],
    tips: [
      'Can be done under a desk',
      'Great for circulation',
      'Perfect for long sitting periods'
    ],
    difficulty: 'beginner'
  }
];
