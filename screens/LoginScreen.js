import React, { Component } from 'react';
import {StyleSheet,View, Vibration, Image,} from 'react-native';
import {Container, Header, Content, Footer, FooterTab, Button, Icon, Text,Item,Input, Right} from 'native-base';
import { SwitchNavigator, createStackNavigator } from 'react-navigation';
import MainTabNavigator from '../navigation/MainTabNavigator'


class LoginScreen extends Component{

    static navigationOptions={
        headerMode: 'none'
    }

    swithcMainScreen(){
        this.props.navigation.navigate('MainTabNavigator')
    }

    render(){
        return(       
            <Container>
                <Header style={{width:0, height:0}}></Header>
                <Content>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Image
                    style={{marginTop:30,width: 200, height: 70,justifyContent: 'center',alignItems: 'center',justifyContent:'center'}}
                        source={
                            require('../assets/images/instagram-text-logo.png')
                        }
                    />
                    </View>
                    
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Item regular style={{marginTop:30,borderRadius:4,width:270,height:40,padding:10}}>
                            <Input style={{opacity:.54,fontSize:13}} placeholder='Phone number, username or email' />
                        </Item>

                        <Item regular style={{marginTop:15,borderRadius:4,width:270,height:40}}>
                            <Input style={{opacity:.54,fontSize:13}} placeholder='Password' />
                        </Item>>

                        <Button onPress={()=>this.swithcMainScreen()} block info style={{marginTop:25,marginLeft:26,borderRadius:4,width:270,height:40,backgroundColor:'#15667e'}}>
                            <Text style={{alignItems:'center',justifyContent:'center'}}>Login</Text>
                        </Button>
                    </View>
                
                </Content>
                <Footer style={{height:40}}>
                    <Text style={{justifyContent:'center',textAlign:'center',marginTop:15,opacity:.54,fontSize:12}}>Don't have an account? </Text>
                    <Text  style={{justifyContent:'center',textAlign:'center',marginTop:15,fontSize:12,color:'#45b2c5'}}>Sign Up</Text>
                </Footer>
            </Container>
        )
    }
}


export default screens=createStackNavigator({
    LoginScreen:{
        screen:LoginScreen,
        headerMode:'none'
    },
    MainTabNavigator:{screen:MainTabNavigator},
},{
    headerMode:'none',
    navigationOptions:{
        headerMode:'none',
    }
})
