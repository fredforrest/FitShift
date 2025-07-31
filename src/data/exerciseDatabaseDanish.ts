import { Exercise } from '../types/Exercise';

export const exerciseDatabaseDanish: Exercise[] = [
  // Upper Body Active Exercises
  {
    id: 'push-up',
    name: 'Armbøjninger',
    description: 'Klassisk kropsvægtsøvelse der træner bryst, skuldre og triceps',
    type: 'active',
    category: 'upper',
    muscleGroups: ['bryst', 'skuldre', 'triceps', 'core'],
    executionType: 'reps',
    reps: 10,
    sets: 3,
    instructions: [
      'Start i planke position med hænderne lidt bredere end skuldrene',
      'Sænk dit bryst mod gulvet mens du holder din krop lige',
      'Skub dig selv op til startpositionen',
      'Hold din core spændt gennem hele bevægelsen'
    ],
    tips: [
      'Hold din krop i en lige linje fra hoved til hæle',
      'Lad ikke dine hofter hænge eller pippe op',
      'Kontroller nedgangen for maksimal fordel'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'diamond-push-up',
    name: 'Diamond Push-up',
    description: 'Avanceret armbøjningsvariant med fokus på triceps',
    type: 'active',
    category: 'upper',
    muscleGroups: ['triceps', 'bryst', 'skuldre'],
    executionType: 'reps',
    reps: 8,
    sets: 2,
    instructions: [
      'Lav en diamantform med dine hænder under dit bryst',
      'Sænk dit bryst mod dine hænder',
      'Skub dig selv op mens du bevarer diamant håndpositionen'
    ],
    tips: [
      'Denne variant er mere udfordrende end almindelige armbøjninger',
      'Fokuser på langsomme, kontrollerede bevægelser'
    ],
    difficulty: 'advanced'
  },
  {
    id: 'pike-push-up',
    name: 'Pike Push-up',
    description: 'Skulder-fokuseret armbøjningsvariant',
    type: 'active',
    category: 'upper',
    muscleGroups: ['skuldre', 'triceps', 'øvre bryst'],
    executionType: 'reps',
    reps: 8,
    sets: 2,
    instructions: [
      'Start i nedadvendt hund position',
      'Sænk dit hoved mod gulvet',
      'Skub dig selv op til startpositionen'
    ],
    tips: [
      'Hold dine ben så lige som muligt',
      'Fokuser på skulderstyrke'
    ],
    difficulty: 'intermediate'
  },
  
  // Upper Body Isometric Exercises
  {
    id: 'plank',
    name: 'Planken',
    description: 'Core styrkende isometrisk øvelse',
    type: 'isometric',
    category: 'full',
    muscleGroups: ['core', 'skuldre', 'ryg'],
    executionType: 'timer',
    duration: 30,
    instructions: [
      'Start i armbøjningsposition',
      'Hold din krop lige fra hoved til hæle',
      'Hold din core stram og træk vejret normalt'
    ],
    tips: [
      'Hold ikke vejret',
      'Hold dine hofter i niveau'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'wall-sit',
    name: 'Væg Squat',
    description: 'Isometrisk ben styrkende øvelse',
    type: 'isometric',
    category: 'lower',
    muscleGroups: ['quadriceps', 'baller', 'lægge'],
    executionType: 'timer',
    duration: 45,
    instructions: [
      'Stå med ryggen mod en væg',
      'Glid ned til dine lår er parallelle med gulvet',
      'Hold denne position mens du holder ryggen mod væggen'
    ],
    tips: [
      'Hold dine knæ i 90 graders vinkel',
      'Fordel vægten jævnt på begge ben'
    ],
    difficulty: 'beginner'
  },

  // Lower Body Active Exercises
  {
    id: 'squat',
    name: 'Kropsvægt Squat',
    description: 'Fundamental underkrops øvelse',
    type: 'active',
    category: 'lower',
    muscleGroups: ['quadriceps', 'baller', 'baglår', 'lægge'],
    executionType: 'reps',
    reps: 15,
    sets: 3,
    instructions: [
      'Stå med fødderne skulderbredde fra hinanden',
      'Sænk dig ned som om du sætter dig i en stol',
      'Hold dit bryst oppe og knæene rettet over tæerne',
      'Rejs dig op til startpositionen'
    ],
    tips: [
      'Gå så lavt som din mobilitet tillader',
      'Hold vægten på dine hæle'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'jump-squat',
    name: 'Jumping Squats',
    description: 'Eksplosiv squat variant for kraft',
    type: 'active',
    category: 'lower',
    muscleGroups: ['quadriceps', 'baller', 'baglår', 'lægge'],
    executionType: 'reps',
    reps: 10,
    sets: 2,
    instructions: [
      'Start i squat position',
      'Eksploder op i et hop',
      'Land blødt og gå straks i næste squat'
    ],
    tips: [
      'Land blødt for at beskytte dine led',
      'Fokuser på eksplosiv opadgående bevægelse'
    ],
    difficulty: 'intermediate'
  },
  {
    id: 'lunge',
    name: 'Lunges',
    description: 'En-bens styrkende øvelse',
    type: 'active',
    category: 'lower',
    muscleGroups: ['quadriceps', 'baller', 'baglår'],
    executionType: 'reps',
    reps: 12,
    sets: 2,
    instructions: [
      'Tag et skridt fremad med det ene ben',
      'Sænk dine hofter til begge knæ er i 90 graders vinkel',
      'Skub dig tilbage til startpositionen',
      'Skift ben'
    ],
    tips: [
      'Hold dit forreste knæ over din ankel',
      'Lad ikke dit forreste knæ glide indad'
    ],
    difficulty: 'beginner'
  },

  // Full Body Active Exercises
  {
    id: 'burpee',
    name: 'Burpee',
    description: 'Fuldkrops eksplosiv øvelse',
    type: 'active',
    category: 'full',
    muscleGroups: ['hele kroppen'],
    executionType: 'reps',
    reps: 8,
    sets: 2,
    instructions: [
      'Start stående, squat ned og placér hænderne på gulvet',
      'Hop fødderne tilbage i planke position',
      'Lav en armbøjning (valgfrit)',
      'Hop fødderne tilbage til squat position',
      'Hop op med armene over hovedet'
    ],
    tips: [
      'Dette er en høj-intensitets øvelse',
      'Modificér ved at træde i stedet for at hoppe'
    ],
    difficulty: 'advanced'
  },
  {
    id: 'mountain-climber',
    name: 'Mountain Climbers',
    description: 'Dynamisk core og cardio øvelse',
    type: 'active',
    category: 'full',
    muscleGroups: ['core', 'skuldre', 'ben'],
    executionType: 'timer',
    duration: 30,
    instructions: [
      'Start i planke position',
      'Skift mellem at trække knæene op til brystet hurtigt',
      'Hold hofterne i niveau og core spændt'
    ],
    tips: [
      'Bevar planke positionen gennem hele øvelsen',
      'Bevæg dig i et tempo du kan holde'
    ],
    difficulty: 'intermediate'
  },

  // Additional Isometric Exercises
  {
    id: 'side-plank',
    name: 'Side Planke',
    description: 'Lateral core styrkelse',
    type: 'isometric',
    category: 'full',
    muscleGroups: ['core', 'skrå mavemuskler', 'skuldre'],
    executionType: 'timer',
    duration: 20,
    instructions: [
      'Lig på siden, støt dig på din albue',
      'Løft dine hofter så du danner en lige linje',
      'Hold denne position'
    ],
    tips: [
      'Hold din krop i en lige linje',
      'Lad ikke dine hofter hænge'
    ],
    difficulty: 'intermediate'
  },
  {
    id: 'glute-bridge-hold',
    name: 'Glute Bridge Hold',
    description: 'Isometrisk balder og baglår øvelse',
    type: 'isometric',
    category: 'lower',
    muscleGroups: ['baller', 'baglår', 'core'],
    executionType: 'timer',
    duration: 30,
    instructions: [
      'Lig på ryggen med knæene bøjet',
      'Løft dine hofter op og klem ballerne sammen',
      'Hold denne position'
    ],
    tips: [
      'Klem ballerne sammen i toppen',
      'Hold din core spændt'
    ],
    difficulty: 'beginner'
  }
];
