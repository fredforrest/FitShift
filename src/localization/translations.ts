export interface Translations {
  // App Title & Header
  appTitle: string;
  appSubtitle: string;
  
  // Workout Setup
  chooseFocus: string;
  selectDifficulty: string;
  workoutDuration: string;
  startWorkout: string;
  
  // Focus Options
  fullBody: string;
  fullBodyDesc: string;
  upperBody: string;
  upperBodyDesc: string;
  lowerBody: string;
  lowerBodyDesc: string;
  
  // Difficulty Levels
  beginner: string;
  intermediate: string;
  advanced: string;
  
  // Workout Execution
  ready: string;
  start: string;
  pause: string;
  complete: string;
  skip: string;
  exit: string;
  timeRemaining: string;
  reps: string;
  sets: string;
  restBetweenSets: string;
  keepGoing: string;
  
  // Exercise Types
  active: string;
  hold: string;
  
  // Ready Screen
  getReady: string;
  prepareYourself: string;
  almostThere: string;
  letsDoThis: string;
  go: string;
  
  // Rest Screen
  rest: string;
  restDescription: string;
  secondsRemaining: string;
  skipRest: string;
  
  // Workout Summary
  workoutComplete: string;
  exercises: string;
  minutes: string;
  complete_percent: string;
  exerciseSummary: string;
  startAnother: string;
  backToSetup: string;
  
  // Motivational Messages
  outstanding: string;
  greatJob: string;
  goodEffort: string;
  niceStart: string;
  
  // Tips
  quickTips: string;
  tip1: string;
  tip2: string;
  tip3: string;
  
  // Instructions
  instructions: string;
  
  // Skip Exercise Dialog
  skipExercise: string;
  skipConfirm: string;
  cancel: string;
  
  // Duration Descriptions
  quickBoost: string;
  standardBreak: string;
  thoroughWorkout: string;
  completeWorkout: string;
  
  // Navigation
  settings: string;
  welcomeMessage: string;
  startWorkoutSubtext: string;
  
  // Theme Settings
  appearance: string;
  themeDescription: string;
  lightTheme: string;
  darkTheme: string;
  systemTheme: string;
  lightThemeDesc: string;
  darkThemeDesc: string;
  systemThemeDesc: string;
}

export const translations: { [key: string]: Translations } = {
  da: {
    // App Title & Header
    appTitle: "FitShift",
    appSubtitle: "Din Aktive Pause",
    
    // Workout Setup
    chooseFocus: "Vælg Dit Fokus",
    selectDifficulty: "Vælg Sværhedsgrad",
    workoutDuration: "Trænings Varighed",
    startWorkout: "Start Din Pause 🚀",
    
    // Focus Options
    fullBody: "Hele Kroppen",
    fullBodyDesc: "Træn hele din krop",
    upperBody: "Overkrop",
    upperBodyDesc: "Fokus på arme, bryst og skuldre",
    lowerBody: "Underkrop",
    lowerBodyDesc: "Styrk ben og baller",
    
    // Difficulty Levels
    beginner: "Begynder",
    intermediate: "Mellem",
    advanced: "Avanceret",
    
    // Workout Execution
    ready: "Klar?",
    start: "START",
    pause: "PAUSE",
    complete: "FÆRDIG",
    skip: "Spring Over",
    exit: "Afslut",
    timeRemaining: "Tid Tilbage",
    reps: "gentagelser",
    sets: "sæt",
    restBetweenSets: "Hold 30-60 sekunders pause mellem hvert sæt",
    keepGoing: "Bliv ved!",
    
    // Exercise Types
    active: "AKTIV",
    hold: "HOLD",
    
    // Ready Screen
    getReady: "Gør dig klar til...",
    prepareYourself: "Forbered dig selv!",
    almostThere: "Næsten der!",
    letsDoThis: "Lad os gøre det!",
    go: "KØR!",
    
    // Rest Screen
    rest: "Pause",
    restDescription: "Tag en dyb indånding og forbered dig til næste øvelse",
    secondsRemaining: "sekunder tilbage",
    skipRest: "Spring pause over",
    
    // Workout Summary
    workoutComplete: "Træning Færdig!",
    exercises: "Øvelser",
    minutes: "Minutter",
    complete_percent: "% Færdig",
    exerciseSummary: "Øvelses Oversigt",
    startAnother: "Start Endnu En Pause",
    backToSetup: "Tilbage til Opsætning",
    
    // Motivational Messages
    outstanding: "🎉 Fremragende arbejde! Du gennemførte hele din træning!",
    greatJob: "🔥 Flot arbejde! Du kom igennem det meste af din træning!",
    goodEffort: "💪 God indsats! Hver bevægelse tæller!",
    niceStart: "🌟 Fin start! Husk, konsistens er nøglen!",
    
    // Tips
    quickTips: "💡 Hurtige Tips",
    tip1: "• Tag aktive pauser hver 25-30 minutter for optimal produktivitet",
    tip2: "• Bliv hydreret gennem din arbejdsdag",
    tip3: "• Bland forskellige træningsfokus gennem ugen",
    
    // Instructions
    instructions: "Instruktioner:",
    
    // Skip Exercise Dialog
    skipExercise: "Spring Øvelse Over",
    skipConfirm: "Er du sikker på, at du vil springe denne øvelse over?",
    cancel: "Annuller",
    
    // Duration Descriptions
    quickBoost: "Hurtig energi boost",
    standardBreak: "Standard pause",
    thoroughWorkout: "Grundig træning",
    completeWorkout: "Komplet træning",
    
    // Navigation
    settings: "Indstillinger",
    welcomeMessage: "Velkommen til din aktive pause!",
    startWorkoutSubtext: "Start din træning nu",
    
    // Theme Settings
    appearance: "Udseende",
    themeDescription: "Vælg mellem lyst, mørkt eller automatisk tema",
    lightTheme: "Lys tema",
    darkTheme: "Mørkt tema",
    systemTheme: "System",
    lightThemeDesc: "Altid lyst tema",
    darkThemeDesc: "Altid mørkt tema",
    systemThemeDesc: "Følg enhedens indstilling"
  },
  
  en: {
    // App Title & Header
    appTitle: "FitShift",
    appSubtitle: "Your Active Break Companion",
    
    // Workout Setup
    chooseFocus: "Choose Your Focus",
    selectDifficulty: "Select Difficulty",
    workoutDuration: "Workout Duration",
    startWorkout: "Start Your Break 🚀",
    
    // Focus Options
    fullBody: "Full Body",
    fullBodyDesc: "Work your entire body",
    upperBody: "Upper Body",
    upperBodyDesc: "Focus on arms, chest & shoulders",
    lowerBody: "Lower Body",
    lowerBodyDesc: "Strengthen legs & glutes",
    
    // Difficulty Levels
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    
    // Workout Execution
    ready: "Ready?",
    start: "START",
    pause: "PAUSE", 
    complete: "COMPLETE",
    skip: "Skip",
    exit: "Exit",
    timeRemaining: "Time Remaining",
    reps: "reps",
    sets: "sets",
    restBetweenSets: "Rest 30-60 seconds between each set",
    keepGoing: "Keep going!",
    
    // Exercise Types
    active: "ACTIVE",
    hold: "HOLD",
    
    // Ready Screen
    getReady: "Get ready for...",
    prepareYourself: "Prepare yourself!",
    almostThere: "Almost there!",
    letsDoThis: "Let's do this!",
    go: "GO!",
    
    // Rest Screen
    rest: "Rest",
    restDescription: "Take a deep breath and prepare for the next exercise",
    secondsRemaining: "seconds remaining",
    skipRest: "Skip rest",
    
    // Workout Summary
    workoutComplete: "Workout Complete!",
    exercises: "Exercises",
    minutes: "Minutes",
    complete_percent: "% Complete",
    exerciseSummary: "Exercise Summary",
    startAnother: "Start Another Break",
    backToSetup: "Back to Setup",
    
    // Motivational Messages
    outstanding: "🎉 Outstanding work! You completed your entire break workout!",
    greatJob: "🔥 Great job! You powered through most of your workout!",
    goodEffort: "💪 Good effort! Every bit of movement counts!",
    niceStart: "🌟 Nice start! Remember, consistency is key!",
    
    // Tips
    quickTips: "💡 Quick Tips",
    tip1: "• Take active breaks every 25-30 minutes for optimal productivity",
    tip2: "• Stay hydrated throughout your workday",
    tip3: "• Mix different workout focuses throughout the week",
    
    // Instructions
    instructions: "Instructions:",
    
    // Skip Exercise Dialog
    skipExercise: "Skip Exercise",
    skipConfirm: "Are you sure you want to skip this exercise?",
    cancel: "Cancel",
    
    // Duration Descriptions
    quickBoost: "Quick energy boost",
    standardBreak: "Standard break",
    thoroughWorkout: "Thorough workout",
    completeWorkout: "Complete workout",
    
    // Navigation
    settings: "Settings",
    welcomeMessage: "Welcome to your active break!",
    startWorkoutSubtext: "Start your workout now",
    
    // Theme Settings
    appearance: "Appearance",
    themeDescription: "Choose between light, dark, or automatic theme",
    lightTheme: "Light theme",
    darkTheme: "Dark theme",
    systemTheme: "System",
    lightThemeDesc: "Always light theme",
    darkThemeDesc: "Always dark theme",
    systemThemeDesc: "Follow device setting"
  }
};
