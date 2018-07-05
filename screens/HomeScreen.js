import React,{Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Card, CardItem, Thumbnail, Text,ActionSheet, Root } from 'native-base';
// import { Container, Header,  Button, Left, Body, Right } from 'native-base'
import ChatList from './ChatList';
import { createStackNavigator } from 'react-navigation';
// import { RNCamera } from 'react-native-camera';
// import { Camera, Permissions } from 'expo';

var BUTTONS = ["Share to Facebook", "Share to Messenger", "Copy Link", "Turn On Post Notification","Report","Mute","Unfollow", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class HomeScreen extends Component {

  // state = {
  //   hasCameraPermission: null,
  //   type: Camera.Constants.Type.back,
  // };

  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    header: null,
    headerVisible: false,
  };

  chatList(){
    this.props.navigation.navigate('ChatList');
  }
  
  // takePicture = async () => {
  //   try {
  //     const data = await this.camera.takePictureAsync();
  //     console.log('Path to image: ' + data.uri);
  //   } catch (err) {
  //     // console.log('err: ', err);
  //   }
  // };

  render() {
    // const { hasCameraPermission } = this.state;
    return (
      <Root>
        <Container>
        <Header>
          <Left>
          {/* <Camera style={{ flex: 1 }} type={this.state.type}> */}
              
              <Button transparent 
              // onPress={() => {
              //     this.setState({
              //       type: this.state.type === Camera.Constants.Type.back
              //         ? Camera.Constants.Type.front
              //         : Camera.Constants.Type.back,
              //     });
              //   }}
              >
                <Icon name='ios-camera-outline' />
              </Button>
            {/* </Camera>   */}
          </Left>
          <Body>
            <Image
              source={require('../assets/images/instagram-text-logo.png')}
              style={{width:100,height:35}}
              resizeMode="contain"
            />
          </Body>
          <Right>
            <Button transparent onPress={()=>this.chatList()}>
              <Icon name='ios-send-outline' />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/images/TeamMember.jpg')} />
                <Body>
                  <Text>Jhone Doe</Text>
                  <Text note>JDoe</Text>
                </Body>
              </Left>
              <Right>
                <Button transparent
                  onPress={() =>
                    ActionSheet.show(
                      {
                        options: BUTTONS,
                        cancelButtonIndex: CANCEL_INDEX,
                        destructiveButtonIndex: DESTRUCTIVE_INDEX,
                        // title: "Testing ActionSheet"
                      },
                      buttonIndex => {
                        this.setState({ clicked: BUTTONS[buttonIndex] });
                      }
                    )}
                >
                  <Icon name='more'/>
                </Button>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/images/story.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="ios-heart-outline" />
                  <Text></Text>
                </Button>
                <Button transparent>
                  <Icon active name="ios-chatbubbles-outline" />
                  <Text></Text>
                </Button>
                <Button transparent>
                  <Icon active name="ios-send-outline" />
                  <Text></Text>
                </Button>
              </Left>
              <Body>
                {/* <Button transparent>
                  <Icon active name="ios-chatbubbles-outline" />
                  <Text></Text>
                </Button> */}
              </Body>
              <Right>
                <Button transparent>
                <Icon active name="ios-bookmark-outline"/>
                <Text></Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/images/TeamMember2.jpg')} />
                <Body>
                  <Text>Jhone Doe</Text>
                  <Text note>JDoe</Text>
                </Body>
              </Left>
              <Right>
                <Button transparent
                  onPress={() =>
                    ActionSheet.show(
                      {
                        options: BUTTONS,
                        cancelButtonIndex: CANCEL_INDEX,
                        destructiveButtonIndex: DESTRUCTIVE_INDEX,
                        // title: "Testing ActionSheet"
                      },
                      buttonIndex => {
                        this.setState({ clicked: BUTTONS[buttonIndex] });
                      }
                    )}
                >
                  <Icon name='more'/>
                </Button>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/images/instaHomePicture.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
            <Left>
            <Button transparent>
              <Icon active name="ios-heart-outline" />
              <Text></Text>
            </Button>
            <Button transparent>
              <Icon active name="ios-chatbubbles-outline" />
              <Text></Text>
            </Button>
            <Button transparent>
              <Icon active name="ios-send-outline" />
              <Text></Text>
            </Button>
          </Left>
          <Body>
            {/* <Button transparent>
              <Icon active name="ios-chatbubbles-outline" />
              <Text></Text>
            </Button> */}
          </Body>
              <Right>
                <Button transparent>
                <Icon active name="ios-bookmark-outline"/>
                <Text></Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
      </Root>
      
    );
  }
}

// export default screen = createStackNavigator({
//   HomeScreen:{screen:HomeScreen},
//   ChatList:{screen:ChatList},
// },{
//   headerMode:'none',
//   navigationOptions:{
//       headerMode:'none',
//       header: null,
//     headerVisible: false,
//   }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
