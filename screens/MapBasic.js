import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          showsUserLocation={true}
          style={{flex: 1}}
          initialRegion={{
            latitude: 18.5204,
            longitude: 73.8567,
            latitudeDelta: 0.0526,
            longitudeDelta: 0.0825,
          }}
        />
      </View>
    );
  }
}

export default App;
