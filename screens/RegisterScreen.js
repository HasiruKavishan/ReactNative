import React, { Component } from 'react';
import {StyleSheet,View, Vibration, Image,} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text,  Tab, Tabs, Footer } from 'native-base';
import { SwitchNavigator, createStackNavigator } from 'react-navigation';
import PhoneTabScreen from './PhoneTabScreen';
import EmailTabScreen from './EmailTabScreen';

export default class RegisterScreen extends Component{
    static navigationOptions = {
        header: null,
      };
    render(){
        return(
            <Container style={{backgroundColor:'#ffff'}}>
        {/* <Header hasTabs /> */}
        <Content style={{margin:20,backgroundColor:'#ffff'}}>
        <Tabs initialPage={0}>
          <Tab style={{backgroundColor:'#ffff',}} heading="Phone">
            <PhoneTabScreen />
          </Tab>
          <Tab style={{backgroundColor:'#ffff'}} heading="Email">
            <EmailTabScreen />
          </Tab>
        </Tabs>
        </Content>
        <Footer style={{height:40}}>
                    <Text style={{justifyContent:'center',textAlign:'center',marginTop:15,opacity:.54,fontSize:12}}>Already have an account? </Text>
                    <Button transparent style={{justifyContent:'center',marginRight:30}} onPress={()=>this.registerScreen()}>
                    <Text  style={{justifyContent:'center',textAlign:'center',fontSize:12,color:'#45b2c5'}}>Sign In</Text>
                    </Button>
                    
        </Footer>
      </Container>
        );
    }
}