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
    // ToastAndroid.show('Start Animation', ToastAndroid.SHORT);
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(this.state.interpolate, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }).start(() => {
          Animated.timing(this.state.interpolate, {
            toValue: 2,
            duration: 300,
            useNativeDriver: true,
          }).start();
        });
      });
    });
  };

  render() {
    const animatedInterpolate = this.state.interpolate.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 200, 0],
    });

    const interpolatedInterpolate = animatedInterpolate.interpolate({
      inputRange: [0, 200],
      outputRange: [1, 0.3],
    });

    const animatedOpacity = {opacity: this.state.opacity};
    const animatedStyles = {
      transform: [{translateY: animatedInterpolate}],
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
          <Animated.View
            style={[styles.box, animatedOpacity, animatedStyles]}
          />
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
