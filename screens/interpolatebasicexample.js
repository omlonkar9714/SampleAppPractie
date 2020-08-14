import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  ToastAndroid,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1),
      interpolate: new Animated.Value(0),
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.interpolate, {
      toValue: 1,
      duration: 3500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(this.state.interpolate, {
        toValue: 2,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    });
  };

  render() {
    const animatedInterpolate = this.state.interpolate.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 200, 0],
    });

    const interpolatedInterpolate = animatedInterpolate.interpolate({
      inputRange: [0, 300],
      outputRange: [1, 0.3],
    });

    const translateXInterpolate = animatedInterpolate.interpolate({
      inputRange: [0, 30, 50, 80, 100, 150, 299, 300],
      outputRange: [0, -30, 50, -80, 100, -150, 299, -300],
    });

    const animatedStyles = {
      transform: [
        {translateY: animatedInterpolate},
        {translateX: translateXInterpolate},
      ],
      opacity: interpolatedInterpolate,
    };
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.startAnimation();
          }}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'tomato',
  },
});
export default App;
