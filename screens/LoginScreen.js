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
            <Content/>
                <View style={styles.container}>
                    <View style={styles.getStartedContainer}>
                        <View style={styles.logo} >
                            <Image
                            style={{marginTop:30,width: 200, height: 70,justifyContent: 'center',alignItems: 'center',}}
                                source={
                                    require('../assets/images/instagram-text-logo.png')
                                }
                            />
                            </View> 
                        </View>
                </View>

                <View style={{marginTop:-30}}>
                    <View style={styles.inputFeildOne}>
                        <Item regular style={{borderRadius:4,width:270,height:40}}>
                            <Input style={{opacity:.54,fontSize:13}} placeholder='Phone number, username or email' />
                        </Item>
                    </View>

                    <View style={styles.inputFeildTwo}>
                        <Item regular style={{borderRadius:4,width:270,height:40}}>
                            <Input style={{opacity:.54,fontSize:13}} placeholder='Password' />
                        </Item>
                    </View>

                    {/* <View>
                        
                            <Text style={{justifyContent:'center',textAlign:'center',marginTop:15,fontSize:12}}>Forget password?</Text>
                        
                    </View> */}

                    <View style={styles.button}>
                        <Button onPress={()=>this.swithcMainScreen()} block info style={{borderRadius:4,width:270,height:40,backgroundColor:'#15667e'}}>
                            <Text style={{alignItems:'center',justifyContent:'center'}}>Login</Text>
                        </Button>
                    </View>
                </View>
        
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
const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#fff',
        marginTop:10,
    },
    getStartedContainer: {
    alignItems: 'center',   
    },
    inputFeildOne:{
        flex: 2,
        marginTop:-820,
        alignItems: 'center',
        justifyContent:'center', 
    },
    inputFeildTwo:{
        flex:1,
        marginTop:-700,
        alignItems: 'center',
        justifyContent:'center', 
    },
    button:{
        flex: 0,
        marginLeft:26,
        marginTop:-400,
        alignItems: 'center',
        justifyContent:'center', 
    },

    logo:{
        alignItems:'center',
        width:50,
        height:50,
        justifyContent:'center',
        flexGrow:0,
    }
})