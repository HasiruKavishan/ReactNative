import React, { Component } from 'react';
import { StyleSheet, View, Vibration, Image, } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Item, Input, Right } from 'native-base';
import { SwitchNavigator, createStackNavigator } from 'react-navigation';
import MainTabNavigator from '../navigation/MainTabNavigator'
import RegisterScreen from './RegisterScreen'
import ChatList from './ChatList';
import CameraScreen from './CameraScreen';
import MessageScreen from './MessageScreen';


class LoginScreen extends Component {

    static navigationOptions = {
        header: {
            visible: false,
            headerMode: 'screen'
        }
    }

    swithcMainScreen() {
        this.props.navigation.navigate('MainTabNavigator')
    }

    registerScreen() {
        this.props.navigation.navigate('RegisterScreen')
    }
    render() {
        return (
            <Container>
                <Content>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{ marginTop: 50, width: 200, height: 70, justifyContent: 'center', alignItems: 'center', justifyContent: 'center' }}
                            source={
                                require('../assets/images/instagram-text-logo.png')
                            }
                        />
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Item regular style={{ marginTop: 30, borderRadius: 4, width: 270, height: 40, padding: 10 }}>
                            <Input style={{ opacity: .54, fontSize: 13 }} placeholder='Phone number, username or email' />
                        </Item>

                        <Item regular style={{ marginTop: 15, borderRadius: 4, width: 270, height: 40 }}>
                            <Input style={{ opacity: .54, fontSize: 13 }} placeholder='Password' />
                        </Item>>

                        <Button onPress={() => this.swithcMainScreen()} block info style={{ marginTop: 25, marginLeft: 26, borderRadius: 4, width: 270, height: 40, backgroundColor: '#15667e' }}>
                            <Text style={{ alignItems: 'center', justifyContent: 'center' }}>Login</Text>
                        </Button>
                    </View>

                    {/* <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Button transparent textStyle={{color: '#87838B',}}>
                            <Icon name="logo-facebook" title="Continue" />
                            <Text>Continue as User</Text>
                        </Button>
                    </View> */}


                </Content>
                <Footer style={{ height: 40 }}>
                    <Text style={{ justifyContent: 'center', textAlign: 'center', marginTop: 15, opacity: .54, fontSize: 12 }}>Don't have an account? </Text>
                    <Button transparent style={{ justifyContent: 'center', marginRight: 30 }} onPress={() => this.registerScreen()}>
                        <Text style={{ justifyContent: 'center', textAlign: 'center', fontSize: 12, color: '#45b2c5' }}>Sign Up</Text>
                    </Button>

                </Footer>
            </Container>
        )
    }
}


export default screens = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        headerMode: 'none'
    },
    MainTabNavigator: { screen: MainTabNavigator },
    RegisterScreen: { screen: RegisterScreen },
    ChatList: { screen: ChatList },
    CameraScreen: { screen: CameraScreen },
    MessageScreen:{screen:MessageScreen},
}, {
        headerMode: 'none',
        navigationOptions: {
            headerMode: 'none',
        }
    })
