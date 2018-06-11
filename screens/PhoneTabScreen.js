import React, { Component } from 'react';
import {StyleSheet,View, Vibration, Image,} from 'react-native';
import {Container, Header, Content, Footer, FooterTab, Button, Icon, Text,Item,Input, Right} from 'native-base';


export default class PhoneTabScreen extends Component{
    render(){
        return(
            <Container>
                <Content style={{backgroundColor:'#ffff'}}>                    
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Item regular style={{marginTop:30,borderRadius:4,width:270,height:40,padding:10}}>
                            <Input style={{opacity:.54,fontSize:13}} placeholder='Phone number' />
                        </Item>

                        <Button onPress={()=>this.swithcMainScreen()} block info style={{marginTop:25,marginLeft:6,borderRadius:4,width:270,height:40,backgroundColor:'#15667e'}}>
                            <Text style={{alignItems:'center',justifyContent:'center'}}>Login</Text>
                        </Button>
                    </View>

                    {/* <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Button transparent textStyle={{color: '#87838B',}}>
                            <Icon name="logo-facebook" title="Continue" />
                            <Text>Continue as User</Text>
                        </Button>
                    </View> */}
                    
                
                </Content>
            </Container>
        );
    }
}