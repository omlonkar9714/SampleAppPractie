import React from 'react';
import {
  View,
  Alert,
  Text,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
  Button,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import mapStyle from '../../constants/mapStyle.json';
import Geolocation from 'react-native-geolocation-service';
export default class Map extends React.Component {
  state = {
    latitude: 0,
    longitude: 0,
    coordinates: [],
    permissionGranted: false,
    locationMarker: false,
  };

  componentDidMount() {
    this.getRequiredPermission();
  }

  getRequiredPermission = () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ])
        .then((result) => {
          if (
            result['android.permission.ACCESS_COARSE_LOCATION'] &&
            result['android.permission.ACCESS_COARSE_LOCATION'] === 'granted'
          ) {
            this.setState({permissionGranted: true}, () => {
              this.getLocation();
            });
          } else if (
            result['android.permission.ACCESS_COARSE_LOCATION'] ||
            result['android.permission.ACCESS_COARSE_LOCATION'] ===
              'never_ask_again'
          ) {
            alert('Allow required permission');
          }
        })
        .catch((error) => {
          alert(JSON.stringify(error));
        });
    }
  };

  getLocation = () => {
    Geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
          locationMarker: false,
        });
      },
      (error) => {
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
        distanceFilter: 1,
      },
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.latitude == 0 && (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              onPress={() => {
                this.getRequiredPermission();
              }}
              title="Allow Access to permission"></Button>
          </View>
        )}

        {this.state.latitude != 0 && (
          <MapView
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            style={{flex: 1}}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
              }}></Marker>
            <Polyline
              coordinates={this.state.coordinates}
              strokeColor="#bf8221"
              strokeColors={[
                '#bf8221',
                '#ffe066',
                '#ffe066',
                '#ffe066',
                '#ffe066',
              ]}
              strokeWidth={3}
            />
          </MapView>
        )}
      </View>
    );
  }
}
