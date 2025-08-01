import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  AccessibilityInfo,
} from 'react-native';
import { useLocalization } from '../localization/LocalizationContext';
import { useTheme } from '../theme/ThemeContext';

interface ReadyScreenProps {
  onReady: () => void;
  exerciseName: string;
}

const ReadyScreen: React.FC<ReadyScreenProps> = ({ onReady, exerciseName }) => {
  const [countdown, setCountdown] = useState(3);
  const [scaleAnim] = useState(new Animated.Value(0));
  const [fadeAnim] = useState(new Animated.Value(1));
  const { t, language } = useLocalization();
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Announce to screen readers
          AccessibilityInfo.announceForAccessibility(t.go);
          
          // Fade out and call onReady
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            onReady();
          });
          return 0;
        }
        
        // Announce countdown for screen readers
        AccessibilityInfo.announceForAccessibility(prev.toString());
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [fadeAnim, onReady, t.go]);

  useEffect(() => {
    // Animate the countdown number
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [countdown, scaleAnim]);

  const getCountdownText = () => {
    if (countdown === 0) return t.go;
    return countdown.toString();
  };

  const getMotivationalText = () => {
    switch (countdown) {
      case 3:
        return t.getReady;
      case 2:
        return t.prepareYourself;
      case 1:
        return t.almostThere;
      default:
        return t.letsDoThis;
    }
  };

  return (
    <Animated.View 
      style={[styles.container, { opacity: fadeAnim, backgroundColor: theme.colors.primary }]}
      accessible={true}
      accessibilityLabel={`${t.ready} ${exerciseName}. ${getMotivationalText()}`}
    >
      <View style={styles.content}>
        <Text 
          style={[styles.readyText, { color: theme.colors.accent }]}
          accessible={true}
          accessibilityRole="header"
        >
          {t.ready}
        </Text>
        
        <Text 
          style={[styles.exerciseName, { color: theme.colors.text }]}
          accessible={true}
          accessibilityRole="text"
        >
          {exerciseName}
        </Text>
        
        <Text 
          style={[styles.motivationalText, { color: theme.colors.textMuted }]}
          accessible={true}
        >
          {getMotivationalText()}
        </Text>
        
        <Animated.View 
          style={[
            styles.countdownContainer,
            { 
              transform: [{ scale: scaleAnim }],
              backgroundColor: theme.colors.accent,
            }
          ]}
          accessible={true}
          accessibilityLabel={countdown === 0 ? t.go : `${countdown} ${language === 'da' ? 'sekunder' : 'seconds'}`}
          accessibilityRole="timer"
        >
          <Text style={[
            styles.countdownText,
            { 
              color: countdown === 0 ? theme.colors.success : theme.colors.buttonText,
            }
          ]}>
            {getCountdownText()}
          </Text>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  readyText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
  },
  motivationalText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  countdownContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  countdownText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default ReadyScreen;
