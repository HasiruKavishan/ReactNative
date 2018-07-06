import React, { Component } from 'react';
import {
  Container, Header, Left, Body, Right, Button, Icon, Title, Footer,
  Text, Content, List, ListItem, Thumbnail, Item, Input
} from 'native-base';
import HomeScreen from './HomeScreen';
import CameraScreen from './CameraScreen';
export default class ChatList extends Component {


  static navigationOptions = {
    header: {
      headervisible: false,
      header: null,
    }
  }

  goBack() {
    alert("work");
    this.props.navigation.navigate("HomeScreen");
  }

  cameraScreen() {
    this.props.navigation.navigate("CameraScreen");
  }

  add() {
    alert("add friends");
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Direct</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.add()}>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>
        <Content style={{ backgroundColor: '#ffff', padding: 8 }}>
          <Item searchBar rounded style={{ borderRadius: 8, height: 40, backgroundColor: '#ECEFF1', width: 298 }}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={require('../assets/images/TeamMember.jpg')} />
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={require('../assets/images/TeamMember1.jpg')} />
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={require('../assets/images/TeamMember2.jpg')} />
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
        <Footer>
          <Button transparent onPress={() => this.cameraScreen()}>
            <Icon name='camera' ti />
            {/* <Title>Camera</Title> */}
          </Button>
        </Footer>
      </Container>
    );
  }
}
