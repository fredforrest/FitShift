import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useLocalization } from '../localization/LocalizationContext';
import { useTheme } from '../theme/ThemeContext';

interface LanguageSwitcherProps {
  style?: any;
  compact?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ style, compact = false }) => {
  const { language, setLanguage } = useLocalization();
  const { theme } = useTheme();

  const languages = [
    { code: 'da', flag: '🇩🇰', name: 'Dansk' },
    { code: 'en', flag: '🇺🇸', name: 'English' }
  ];

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      padding: 4,
    },
    compactContainer: {
      flexDirection: 'row',
      gap: 8,
    },
    languageButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
      gap: 8,
    },
    activeButton: {
      backgroundColor: theme.colors.accent,
    },
    compactFlag: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.colors.surface,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: 'transparent',
    },
    activeFlag: {
      borderColor: theme.colors.accent,
      backgroundColor: theme.colors.accentSecondary + '20',
    },
    flagEmoji: {
      fontSize: 20,
    },
    languageName: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.colors.textSecondary,
    },
    activeText: {
      color: theme.colors.buttonText,
    },
  });

  if (compact) {
    return (
      <View style={[styles.compactContainer, style]}>
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.code}
            style={[
              styles.compactFlag,
              language === lang.code && styles.activeFlag
            ]}
            onPress={() => setLanguage(lang.code)}
          >
            <Text style={styles.flagEmoji}>{lang.flag}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      {languages.map((lang) => (
        <TouchableOpacity
          key={lang.code}
          style={[
            styles.languageButton,
            language === lang.code && styles.activeButton
          ]}
          onPress={() => setLanguage(lang.code)}
        >
          <Text style={styles.flagEmoji}>{lang.flag}</Text>
          <Text style={[
            styles.languageName,
            language === lang.code && styles.activeText
          ]}>
            {lang.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
