import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection, Button } from './common';
import { Actions } from 'react-native-router-flux';

class Home extends Component {

  render(){

    return(
      <View>
        <CardSection>
          <Button>Portfolio</Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => Actions.teams()}>Teams</Button>
        </CardSection>

        <CardSection>
          <Button>Your League</Button>
        </CardSection>

        <CardSection>
          <Button>Ranking</Button>
        </CardSection>
      </View>
    );
  }
}

export default Home;
