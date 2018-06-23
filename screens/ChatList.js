import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, Text,Content,List,ListItem,Thumbnail } from 'native-base';
import HomeScreen from './HomeScreen'
export default class ChatList extends Component {

  
    static navigationOptions={
        header:{
          headervisible:false,
          header: null,  
        }
    }

    goBack(){
      this.props.navigation.navigate("HomeScreen");
    }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Direct</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>this.goBack()}>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={require('../assets/images/colorInsta.png')} />
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
        <Footer>
          <Button transparent >
            <Icon name='camera' ti/>
            <Title>Camera</Title>
          </Button>
        </Footer>
      </Container>
    );
  }
}
