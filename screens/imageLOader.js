import React, {Component} from 'react';
import {View, Text, Image as ViewImage} from 'react-native';
import {HOME, LINE, MUSIC} from './assets/Images';
import Image from 'react-native-image-progress';
import {Pie, Bar, Circle, CircleSnail} from 'react-native-progress';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={{
            uri:
              'https://loremflickr.com/cache/resized/65535_49801929133_c9853bf8e8_z_640_480_nofilter.jpg',
          }}
          indicator={Bar}
          indicatorProps={{
            size: 80,
            borderWidth: 0,
            color: 'rgba(150, 150, 150, 1)',
            unfilledColor: 'rgba(200, 200, 200, 0.2)',
          }}
          style={{
            width: 320,
            height: 240,
          }}
        />
      </View>
    );
  }
}

export default App;
