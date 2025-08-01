export interface Theme {
  colors: {
    // Background colors
    primary: string;
    secondary: string;
    surface: string;
    card: string;
    
    // Text colors
    text: string;
    textSecondary: string;
    textMuted: string;
    
    // Accent colors
    accent: string;
    accentSecondary: string;
    
    // Status colors
    success: string;
    warning: string;
    error: string;
    
    // Interactive colors
    button: string;
    buttonText: string;
    buttonSecondary: string;
    buttonSecondaryText: string;
    
    // Border and shadow
    border: string;
    shadow: string;
    
    // Overlay colors
    overlay: string;
    overlayLight: string;
  };
  
  // Accessibility
  accessibility: {
    minContrastRatio: number;
    focusOutlineWidth: number;
    minTouchTarget: number;
  };
}

export const lightTheme: Theme = {
  colors: {
    // Background colors - Light versions of the blue/teal theme
    primary: '#F0F9FF', // Very light blue background
    secondary: '#E0F2FE', // Light cyan background
    surface: '#FFFFFF', // Pure white for cards
    card: '#FFFFFF', // White cards with subtle shadow
    
    // Text colors
    text: '#0F172A', // Dark slate for main text
    textSecondary: '#334155', // Medium slate for secondary text
    textMuted: '#64748B', // Light slate for muted text
    
    // Accent colors - Keeping the blue/cyan theme but darker for contrast
    accent: '#0EA5E9', // Sky blue - darker version of the cyan
    accentSecondary: '#0284C7', // Darker sky blue
    
    // Status colors
    success: '#059669', // Darker emerald for better contrast
    warning: '#D97706', // Darker amber
    error: '#DC2626', // Darker red
    
    // Interactive colors
    button: '#0EA5E9', // Sky blue for buttons
    buttonText: '#FFFFFF', // White text on blue buttons
    buttonSecondary: '#E0F2FE', // Light cyan for secondary buttons
    buttonSecondaryText: '#0369A1', // Dark blue text on light buttons
    
    // Border and shadow
    border: '#CBD5E1', // Light slate border
    shadow: 'rgba(15, 23, 42, 0.1)', // Subtle dark shadow
    
    // Overlay colors
    overlay: 'rgba(15, 23, 42, 0.5)', // Dark overlay
    overlayLight: 'rgba(14, 165, 233, 0.1)', // Light blue overlay
  },
  
  accessibility: {
    minContrastRatio: 4.5, // WCAG AA standard
    focusOutlineWidth: 2,
    minTouchTarget: 44, // iOS/Android minimum
  },
};

export const darkTheme: Theme = {
  colors: {
    // Background colors
    primary: '#1A4A5C',
    secondary: '#0F2027',
    surface: '#2A5A6C',
    card: 'rgba(79, 195, 247, 0.1)',
    
    // Text colors
    text: '#FFFFFF',
    textSecondary: '#E0E0E0',
    textMuted: '#B0C4DE',
    
    // Accent colors
    accent: '#4FC3F7',
    accentSecondary: '#29B6F6',
    
    // Status colors
    success: '#4ADE80',
    warning: '#FBBF24',
    error: '#F87171',
    
    // Interactive colors
    button: '#4FC3F7',
    buttonText: '#1A4A5C',
    buttonSecondary: 'rgba(79, 195, 247, 0.2)',
    buttonSecondaryText: '#4FC3F7',
    
    // Border and shadow
    border: 'rgba(79, 195, 247, 0.3)',
    shadow: 'rgba(0, 0, 0, 0.3)',
    
    // Overlay colors
    overlay: 'rgba(0, 0, 0, 0.7)',
    overlayLight: 'rgba(79, 195, 247, 0.1)',
  },
  
  accessibility: {
    minContrastRatio: 4.5,
    focusOutlineWidth: 2,
    minTouchTarget: 44,
  },
};
