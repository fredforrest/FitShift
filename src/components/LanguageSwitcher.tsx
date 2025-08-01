import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useLocalization } from '../localization/LocalizationContext';

interface LanguageSwitcherProps {
  style?: any;
  compact?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ style, compact = false }) => {
  const { language, setLanguage } = useLocalization();

  const languages = [
    { code: 'da', flag: '🇩🇰', name: 'Dansk' },
    { code: 'en', flag: '🇺🇸', name: 'English' }
  ];

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
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
    backgroundColor: '#4A90E2',
  },
  compactFlag: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  activeFlag: {
    borderColor: '#4A90E2',
    backgroundColor: '#E3F2FD',
  },
  flagEmoji: {
    fontSize: 20,
  },
  languageName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeText: {
    color: '#fff',
  },
});
