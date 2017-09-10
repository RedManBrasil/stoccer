import { random, range } from "lodash";
import React, { Component } from 'react';
import { VictoryChart, VictoryLine, VictoryVoronoiContainer, createContainer } from "victory-native";
import { View, Image, Text, ScrollView } from 'react-native';
import { Card, CardSection, Button } from './common';
import { ESCUDOS } from './escudos'; //array com os escudos

class Team extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollEnabled: true,
      staticRandomData: this.generateRandomData(15)
    };
  }

  generateRandomData(points = 6) {
    return range(1, points + 1).map((i) => ({ x: i, y: i + random(-1, 2) }));
  }

  changeScroll(scrollEnabled) {
    this.setState({ scrollEnabled });
  }

  render(){

    const { thumbnailStyle, nameStyle, chartStyle } = styles;

    console.log(this.props.team_solo);

    return (
      <ScrollView>
        <CardSection style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
          <View>
            <Image
              style={thumbnailStyle}
              source={ESCUDOS[this.props.team_solo.name]}
            />
          </View>
          <View>
            <Text style={nameStyle}>{this.props.team_solo.name}{"\n"}</Text>
            <Text style={nameStyle}>Market Cap:</Text>
            <Text style={nameStyle}>US${this.props.team_solo.mc}bi</Text>
          </View>
        </CardSection>

        <CardSection style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
          <VictoryChart
            containerComponent={
              <VictoryVoronoiContainer
                onTouchStart={() => this.changeScroll(false)}
                onTouchEnd={() => this.changeScroll(true)}
                labels={(d) => `( ${d.x} , ${d.y} )`}
              />
            }
          >
           <VictoryLine data={this.state.staticRandomData} />
          </VictoryChart>
        </CardSection>

        <CardSection style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
          <Button>Buy</Button>
          <Button>Sell</Button>
        </CardSection>
      </ScrollView>
    );
  }
}

const styles = {
  thumbnailStyle: {
    height: 120,
    width: 120,
    resizeMode: 'contain'
  },
  nameStyle: {
    fontSize: 25
  },
  chartStyle: {
    height: 300,
    width: 300,
    resizeMode: 'contain'
  }
};

export default Team;
