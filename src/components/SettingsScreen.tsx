import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useLocalization } from '../localization/LocalizationContext';
import { useTheme } from '../theme/ThemeContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface SettingsScreenProps {
  onBack: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ onBack }) => {
  const { t, language } = useLocalization();
  const { theme, themeMode, setThemeMode, isDark } = useTheme();

  const themeOptions = [
    { 
      key: 'light' as const, 
      label: t.lightTheme,
      icon: '☀️',
      description: t.lightThemeDesc
    },
    { 
      key: 'dark' as const, 
      label: t.darkTheme,
      icon: '🌙',
      description: t.darkThemeDesc
    },
    { 
      key: 'system' as const, 
      label: t.systemTheme,
      icon: '📱',
      description: t.systemThemeDesc
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <StatusBar 
        barStyle={isDark ? "light-content" : "dark-content"} 
        backgroundColor={theme.colors.primary} 
      />
      
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: theme.colors.border }]}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={[styles.backButtonText, { color: theme.colors.accent }]}>
            ← {language === 'da' ? 'Tilbage' : 'Back'}
          </Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.colors.accent }]}>{t.settings}</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Settings Content */}
      <ScrollView 
        style={styles.content} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Theme Section */}
        <View style={[styles.settingSection, { 
          backgroundColor: theme.colors.card,
          borderLeftColor: theme.colors.accent 
        }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.accent }]}>
            🎨 {t.appearance}
          </Text>
          <Text style={[styles.sectionDescription, { color: theme.colors.textMuted }]}>
            {t.themeDescription}
          </Text>
          
          <View style={styles.themeOptions}>
            {themeOptions.map((option) => (
              <TouchableOpacity
                key={option.key}
                style={[
                  styles.themeOption,
                  {
                    backgroundColor: themeMode === option.key 
                      ? theme.colors.accent 
                      : theme.colors.surface,
                    borderColor: theme.colors.border,
                  }
                ]}
                onPress={() => setThemeMode(option.key)}
                accessible={true}
                accessibilityLabel={`${option.label}. ${option.description}`}
                accessibilityRole="button"
                accessibilityState={{ selected: themeMode === option.key }}
              >
                <Text style={styles.themeIcon}>{option.icon}</Text>
                <View style={styles.themeTextContainer}>
                  <Text style={[
                    styles.themeLabel,
                    { 
                      color: themeMode === option.key 
                        ? theme.colors.buttonText 
                        : theme.colors.text 
                    }
                  ]}>
                    {option.label}
                  </Text>
                  <Text style={[
                    styles.themeDescription,
                    { 
                      color: themeMode === option.key 
                        ? theme.colors.buttonText 
                        : theme.colors.textMuted 
                    }
                  ]}>
                    {option.description}
                  </Text>
                </View>
                {themeMode === option.key && (
                  <Text style={[styles.selectedIndicator, { color: theme.colors.buttonText }]}>
                    ✓
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Language Section */}
        <View style={[styles.settingSection, { 
          backgroundColor: theme.colors.card,
          borderLeftColor: theme.colors.accent 
        }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.accent }]}>
            🌐 {language === 'da' ? 'Sprog / Language' : 'Language / Sprog'}
          </Text>
          <Text style={[styles.sectionDescription, { color: theme.colors.textMuted }]}>
            {language === 'da' 
              ? 'Vælg dit foretrukne sprog' 
              : 'Choose your preferred language'
            }
          </Text>
          <LanguageSwitcher style={styles.languageSwitcher} />
        </View>

        {/* App Info Section */}
        <View style={[styles.settingSection, { 
          backgroundColor: theme.colors.card,
          borderLeftColor: theme.colors.accent 
        }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.accent }]}>
            ℹ️ {language === 'da' ? 'Om Appen' : 'About App'}
          </Text>
          <View style={styles.infoItem}>
            <Text style={[styles.infoLabel, { color: theme.colors.textMuted }]}>
              {language === 'da' ? 'Version' : 'Version'}:
            </Text>
            <Text style={[styles.infoValue, { color: theme.colors.text }]}>1.0.0</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={[styles.infoLabel, { color: theme.colors.textMuted }]}>
              {language === 'da' ? 'Formål' : 'Purpose'}:
            </Text>
            <Text style={[styles.infoValue, { color: theme.colors.text }]}>
              {language === 'da' 
                ? 'Aktive pauser på arbejdspladsen' 
                : 'Active breaks in the workplace'
              }
            </Text>
          </View>
        </View>

        {/* Quick Tips */}
        <View style={[styles.settingSection, { 
          backgroundColor: theme.colors.card,
          borderLeftColor: theme.colors.accent 
        }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.accent }]}>💡 {t.quickTips}</Text>
          <Text style={[styles.tipText, { color: theme.colors.textMuted }]}>• {t.tip1}</Text>
          <Text style={[styles.tipText, { color: theme.colors.textMuted }]}>• {t.tip2}</Text>
          <Text style={[styles.tipText, { color: theme.colors.textMuted }]}>• {t.tip3}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSpacer: {
    width: 60, // Same width as back button for centering
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40, // Extra bottom padding for better scrolling
  },
  settingSection: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderLeftWidth: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    marginBottom: 16,
  },
  // Theme Options Styles
  themeOptions: {
    gap: 12,
  },
  themeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  themeIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  themeTextContainer: {
    flex: 1,
  },
  themeLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  themeDescription: {
    fontSize: 14,
  },
  selectedIndicator: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Language Switcher
  languageSwitcher: {
    alignSelf: 'flex-start',
  },
  // App Info
  infoItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    width: 80,
  },
  infoValue: {
    fontSize: 14,
    flex: 1,
  },
  // Tips
  tipText: {
    fontSize: 14,
    marginBottom: 6,
    lineHeight: 20,
  },
});
