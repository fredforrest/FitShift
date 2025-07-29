import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';

interface CircularTimerProps {
  duration: number; // in seconds
  isActive: boolean;
  onComplete: () => void;
  size?: number;
  strokeWidth?: number;
}

const CircularTimer: React.FC<CircularTimerProps> = ({
  duration,
  isActive,
  onComplete,
  size = 200,
  strokeWidth = 8,
}) => {
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const [animatedValue] = useState(new Animated.Value(0));

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    setTimeRemaining(duration);
    animatedValue.setValue(0);
  }, [duration]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          const newTime = prev - 1;
          if (newTime <= 0) {
            onComplete();
            return 0;
          }
          return newTime;
        });
      }, 1000);

      // Animate the progress ring
      Animated.timing(animatedValue, {
        toValue: (duration - timeRemaining + 1) / duration,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }

    return () => clearInterval(interval);
  }, [isActive, timeRemaining]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Animated.View style={styles.timerContainer}>
        <Text style={[styles.timeText, { fontSize: size / 6 }]}>
          {formatTime(timeRemaining)}
        </Text>
        <Text style={[styles.labelText, { fontSize: size / 15 }]}>
          {isActive ? 'Keep going!' : 'Ready?'}
        </Text>
      </Animated.View>
      
      {/* Progress ring would go here in a full implementation */}
      <View style={[
        styles.progressRing,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: strokeWidth,
          borderColor: isActive ? '#667eea' : '#e0e0e0',
        }
      ]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  timeText: {
    fontWeight: 'bold',
    color: '#333',
  },
  labelText: {
    color: '#666',
    marginTop: 4,
  },
  progressRing: {
    position: 'absolute',
  },
});

export default CircularTimer;
