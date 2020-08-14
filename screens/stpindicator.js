import React, {Component} from 'react';
import {View, Text} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
const trackData = [
  {name: 'Cart', date: '14/12/2020', extraData: 'ORDSD656432'},
  {name: 'Delivery Address', date: '15/12/2020', extraData: 'ORDSD656432'},
  {name: 'Order Summary', date: '16/12/2020', extraData: 'ORDSD656432'},
  {name: 'Payment Method', date: '17/12/2020', extraData: 'ORDSD656432'},
  {name: 'Track', date: '18/12/2020', extraData: 'ORDSD656432'},
];

const customStyles = {
  stepIndicatorSize: 40,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 5,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#0372BD',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#0372BD',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#0372BD',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#0372BD',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#0372BD',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#0372BD',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 3,
      labels: [],
    };
  }

  componentDidMount() {
    for (i = 0; i < trackData.length; i++) {
      this.state.labels.push(trackData[i].name);
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{JSON.stringify(this.state.labels)}</Text>
        <StepIndicator
          renderLabel={({currentPosition, label, position, stepStatus}) => (
            <View style={{paddingLeft: 20}}>
              <Text style={{fontSize: 20}}>{label}</Text>
              <Text style={{fontSize: 12}}>{trackData[position].date}</Text>
            </View>
          )}
          renderStepIndicator={({stepStatus, position}) => {
            <View style={{backgroundColor: 'red', height: 20, width: 15}}>
              <Text style={{color: 'red'}}>{position}</Text>
            </View>;
          }}
          direction="vertical"
          customStyles={customStyles}
          currentPosition={this.state.currentPosition}
          labels={this.state.labels}
        />
      </View>
    );
  }
}

export default App;
