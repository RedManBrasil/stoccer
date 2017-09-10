import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';
import { ESCUDOS } from './escudos'; //array com os escudos


class TeamItem extends Component {

  onTeamClick(){
    const { id } = this.props.team;

    this.props.selectdId(id);
    Actions.soloteam({ team_solo: this.props.team, title: this.props.team.name });
}

  render() {

    const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle
  } = styles;

    return (
    <TouchableOpacity
      onPress={this.onTeamClick.bind(this)}
      >
        <Card>
          <CardSection>
            <View style={thumbnailContainerStyle}>
              <Image
                style={thumbnailStyle}
                source={ESCUDOS[this.props.team.name]}
              />
            </View>
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{this.props.team.name}</Text>
            </View>
          </CardSection>
        </Card>
    </TouchableOpacity>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 25
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    resizeMode: 'contain'
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default connect(null, actions)(TeamItem);
