import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, AccessibilityRole } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

interface AccessibleButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?: AccessibilityRole;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onPress,
  title,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole = 'button',
  style,
  textStyle,
}) => {
  const { theme } = useTheme();
  
  const buttonStyles = [
    styles.button,
    {
      backgroundColor: variant === 'primary' ? theme.colors.button : theme.colors.buttonSecondary,
      borderColor: theme.colors.border,
      minHeight: theme.accessibility.minTouchTarget,
      minWidth: theme.accessibility.minTouchTarget,
    },
    size === 'small' && styles.smallButton,
    size === 'large' && styles.largeButton,
    disabled && { opacity: 0.6 },
    style,
  ];
  
  const textStyles = [
    styles.buttonText,
    {
      color: variant === 'primary' ? theme.colors.buttonText : theme.colors.buttonSecondaryText,
    },
    size === 'small' && styles.smallText,
    size === 'large' && styles.largeText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
      accessible={true}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel || title}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  largeButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  smallText: {
    fontSize: 14,
  },
  largeText: {
    fontSize: 18,
  },
});
