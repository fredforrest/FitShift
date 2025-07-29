import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

interface ReadyScreenProps {
  onReady: () => void;
  exerciseName: string;
}

const ReadyScreen: React.FC<ReadyScreenProps> = ({ onReady, exerciseName }) => {
  const [countdown, setCountdown] = useState(3);
  const [scaleAnim] = useState(new Animated.Value(0));
  const [fadeAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
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
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
  }, [countdown]);

  const getCountdownText = () => {
    if (countdown === 0) return 'GO!';
    return countdown.toString();
  };

  const getMotivationalText = () => {
    switch (countdown) {
      case 3:
        return 'Get ready for...';
      case 2:
        return 'Prepare yourself!';
      case 1:
        return 'Almost there!';
      default:
        return 'Let\'s do this!';
    }
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.content}>
        <Text style={styles.readyText}>Ready?</Text>
        
        <Text style={styles.exerciseName}>{exerciseName}</Text>
        
        <Text style={styles.motivationalText}>
          {getMotivationalText()}
        </Text>
        
        <Animated.View style={[
          styles.countdownContainer,
          { transform: [{ scale: scaleAnim }] }
        ]}>
          <Text style={[
            styles.countdownText,
            { color: countdown === 0 ? '#4CAF50' : '#667eea' }
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
    backgroundColor: 'rgba(102, 126, 234, 0.95)',
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
    color: 'white',
    marginBottom: 20,
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  motivationalText: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 40,
  },
  countdownContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
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
