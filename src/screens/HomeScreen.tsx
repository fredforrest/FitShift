import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar,
} from 'react-native';
import { useLocalization } from '../localization/LocalizationContext';
import { useTheme } from '../theme/ThemeContext';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

interface HomeScreenProps {
  onStartWorkout: () => void;
  onOpenSettings: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onStartWorkout, onOpenSettings }) => {
  const { t } = useLocalization();
  const { theme, isDark } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <StatusBar 
        barStyle={isDark ? "light-content" : "dark-content"} 
        backgroundColor={theme.colors.primary} 
      />
      
      {/* Header with Language Switcher */}
      <View style={styles.header}>
        <View style={styles.languageSwitcherContainer}>
          <LanguageSwitcher compact />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* App Title Section */}
        <View style={styles.titleSection}>
          <Text style={[styles.appTitle, { color: theme.colors.text }]}>{t.appTitle}</Text>
          <Text style={[styles.appSubtitle, { color: theme.colors.textSecondary }]}>{t.appSubtitle}</Text>
          <Text style={[styles.welcomeText, { color: theme.colors.textMuted }]}>
            {t.welcomeMessage}
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={[styles.primaryButton, { backgroundColor: theme.colors.accent }]} 
            onPress={onStartWorkout}
          >
            <Text style={[styles.primaryButtonText, { color: theme.colors.buttonText }]}>
              🏃‍♂️ {t.startWorkout}
            </Text>
            <Text style={[styles.buttonSubtext, { color: theme.colors.buttonText }]}>
              {t.startWorkoutSubtext}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.secondaryButton, { 
              backgroundColor: theme.colors.buttonSecondary,
              borderColor: theme.colors.accent 
            }]} 
            onPress={onOpenSettings}
          >
            <Text style={[styles.secondaryButtonText, { color: theme.colors.buttonSecondaryText }]}>
              ⚙️ {t.settings}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quick Stats or Tips */}
        <View style={[styles.tipsContainer, { 
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border 
        }]}>
          <Text style={[styles.tipsTitle, { color: theme.colors.accent }]}>💡 {t.quickTips}</Text>
          <Text style={[styles.tipText, { color: theme.colors.textMuted }]}>• {t.tip1}</Text>
          <Text style={[styles.tipText, { color: theme.colors.textMuted }]}>• {t.tip2}</Text>
          <Text style={[styles.tipText, { color: theme.colors.textMuted }]}>• {t.tip3}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor removed - now using theme
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    paddingTop: 8,
  },
  languageSwitcherContainer: {
    // Positioned in top right
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 60,
  },
  appTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    // color removed - now using theme
    textAlign: 'center',
    marginBottom: 8,
  },
  appSubtitle: {
    fontSize: 18,
    // color removed - now using theme
    textAlign: 'center',
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 16,
    // color removed - now using theme
    textAlign: 'center',
    fontStyle: 'italic',
  },
  actionsContainer: {
    gap: 16,
    marginBottom: 40,
  },
  primaryButton: {
    // backgroundColor removed - now using theme
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  primaryButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    // color removed - now using theme
    marginBottom: 4,
  },
  buttonSubtext: {
    fontSize: 14,
    // color removed - now using theme
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    // borderColor removed - now using theme
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    // color removed - now using theme
  },
  tipsContainer: {
    // backgroundColor removed - now using theme
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    // borderLeftColor removed - now using theme
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    // color removed - now using theme
    marginBottom: 12,
  },
  tipText: {
    fontSize: 14,
    // color removed - now using theme
    marginBottom: 6,
    lineHeight: 20,
  },
});
