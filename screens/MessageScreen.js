import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,

} from 'react-native';
import { Container, Icon, Right, Header, Left, Button, Body, Title, Thumbnail, Text, Content, Item, Input } from 'native-base';
import ChatList from './ChatList';
export default class MessageScreen extends Component {

    goBack() {
        // alert("work");
        
        this.props.navigation.navigate("ChatList");
    }

    render() {
        return (
            <Container>
                <Header style={{ height: 80 }}>
                    <Left>
                        <Button transparent onPress={() => this.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body style={{ alignItems: 'center' }}>
                        <Thumbnail small source={require('../assets/images/TeamMember.jpg')} />
                        <Text note>Sankadeep</Text>
                        {/* /<Title>Sankadeep</Title> */}
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.goBack()}>
                            <Icon name="videocam" />
                        </Button>
                    </Right>
                </Header>
                <Content searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                </Content>
                {/* <Left>
                    <Icon name="camera" />
                </Left>
                <Right>
                    <Item rounded>
                        <Input placeholder='Regular Textbox' />
                    </Item>
                    <Icon name="images" />
                    <Icon name="heart-empty" />
                </Right> */}

            </Container>
        )
    }
}