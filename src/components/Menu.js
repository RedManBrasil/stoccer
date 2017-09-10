import { random, range } from "lodash";
import React, { Component } from "react";
import {
  ScrollView
} from "react-native";
import {
  VictoryChart,
  VictoryLine,
  VictoryVoronoiContainer,
  createContainer
} from "victory-native";

export default class Menu extends Component {
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

  render() {
    return (
      <ScrollView >
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

      </ScrollView>

    );
  }
}
