import React, { Component } from 'react';
import { Camera, Permissions,  } from 'expo';
import {  Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import HomeScreen from './HomeScreen'
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text
  } from 'react-native';

  export default class CameraScreen extends Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
      };
    
      async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }

      goBack(){
        this.props.navigation.navigate("HomeScreen");
      }
      render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
          return <View />;
        } else if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
        } else {
          return (
            <View style={{ flex: 1 }}>
            <Header noShadow>
          <Left>
            <Button transparent onPress={()=>this.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            {/* <Title>Header</Title> */}
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
              <Camera style={{ flex: 1 }} type={this.state.type}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    style={{
                      flex: 0.1,
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      this.setState({
                        type: this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                      });
                    }}>
                    <Text
                      style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                      {' '}Flip{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              </Camera>
            </View>
          );
        }
      }
}