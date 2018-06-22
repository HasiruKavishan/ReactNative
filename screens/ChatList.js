import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
export default class ChatList extends Component {
    static navigationOptions={
        header:{
            visible:false,
            headerMode: 'screen',
        }
    }
  render() {
    return (
      <Container>
        <Header />
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
      </Container>
    );
  }
}
