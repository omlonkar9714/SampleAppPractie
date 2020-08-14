import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Gradient from 'react-native-linear-gradient';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      read: false,
    };
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="position"
        style={{flex: 1, backgroundColor: '#e6e6e6'}}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"></StatusBar>

        <Gradient
          colors={['#ffc121', '#f9b23d']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={{
            backgroundColor: 'orange',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: hp('50%'),
            // borderRadius: hp('10%'),
            borderBottomRightRadius: hp('10%'),
            borderBottomLeftRadius: hp('10%'),
          }}>
          <View
            style={{
              marginTop: hp('3%'),
              height: hp('12%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{flex: 1, aspectRatio: 1.5}}
              resizeMode="contain"
              source={{
                uri: 'https://wallpapercave.com/wp/wp4600617.jpg',
              }}></Image>
          </View>
        </Gradient>
        <View
          style={{
            borderRadius: hp('1%'),
            marginTop: -hp('32%'),
            // flex: 0.5,
            padding: hp('1%'),
            marginHorizontal: hp('2%'),
            backgroundColor: 'white',
            // height: hp('70%'),
          }}>
          <View style={{marginHorizontal: hp('1%')}}>
            <View>
              <Text
                style={{
                  fontSize: hp('2.5%'),
                  fontWeight: 'bold',
                  marginTop: hp('2%'),
                }}>
                SIGN UP
              </Text>
              <View
                style={{
                  marginTop: hp('3%'),
                  borderWidth: hp('0.1%'),
                  borderColor: '#ccc',
                  borderRadius: hp('0.5%'),
                }}>
                <TextInput
                  style={{
                    fontSize: hp('1.6%'),
                    paddingLeft: hp('2%'),
                  }}
                  placeholder="First Name"></TextInput>
              </View>
              <View
                style={{
                  marginTop: hp('2.5%'),
                  borderWidth: hp('0.1%'),
                  borderColor: '#ccc',
                  borderRadius: hp('0.5%'),
                }}>
                <TextInput
                  style={{
                    fontSize: hp('1.6%'),
                    paddingLeft: hp('2%'),
                  }}
                  placeholder="Last Name"></TextInput>
              </View>
              <View
                style={{
                  marginTop: hp('2.5%'),
                  borderWidth: hp('0.1%'),
                  borderColor: '#ccc',
                  borderRadius: hp('0.5%'),
                }}>
                <TextInput
                  style={{
                    fontSize: hp('1.6%'),
                    paddingLeft: hp('2%'),
                  }}
                  placeholder="Email"></TextInput>
              </View>
              <View
                style={{
                  marginTop: hp('2.5%'),
                  borderWidth: hp('0.1%'),
                  borderColor: '#ccc',
                  borderRadius: hp('0.5%'),
                }}>
                <TextInput
                  style={{
                    fontSize: hp('1.6%'),
                    paddingLeft: hp('2%'),
                  }}
                  placeholder="Phone Number"></TextInput>
              </View>
              <View
                style={{
                  marginTop: hp('2.5%'),
                  borderWidth: hp('0.1%'),
                  borderColor: '#ccc',
                  borderRadius: hp('0.5%'),
                }}>
                <TextInput
                  style={{
                    fontSize: hp('1.6%'),
                    paddingLeft: hp('2%'),
                  }}
                  placeholder="Password"></TextInput>
              </View>
              <View
                style={{
                  marginTop: hp('2.5%'),
                  borderWidth: hp('0.1%'),
                  borderColor: '#ccc',
                  borderRadius: hp('0.5%'),
                }}>
                <TextInput
                  style={{
                    fontSize: hp('1.6%'),
                    paddingLeft: hp('2%'),
                  }}
                  placeholder="Confirm Password"></TextInput>
              </View>
              <View
                style={{
                  marginTop: hp('2.5%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#',
                  padding: hp('1%'),
                }}>
                <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                  SIGN UP
                </Text>
              </View>
              <View
                style={{
                  marginVertical: hp('2%'),
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  //   backgroundColor: 'orange',
                  //   padding: hp('1%'),
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({read: !this.state.read});
                  }}
                  style={{
                    backgroundColor:
                      this.state.read == false ? 'white' : 'green',
                    height: hp('2%'),
                    borderWidth: hp('0.1%'),
                    width: hp('2%'),
                    borderColor: this.state.read == true ? 'green' : 'black',
                    borderRadius: hp('1%'),
                  }}></TouchableOpacity>
                <Text style={{fontSize: hp('1.5%'), marginLeft: hp('2%')}}>
                  I have read and agree to Privacy
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: hp('2.5%'),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: hp('1.5%')}}>
            I have an account! <Text style={{fontWeight: 'bold'}}>Sign In</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({});

export default SignUp;
