import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, TouchableOpacity, ListView } from 'react-native';
import TeamItem from './TeamItem';
import * as actions from '../actions'; //importando a pasta ele importa o index.js by default

class TeamList extends Component {

  componentWillMount() {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.dataSource = ds.cloneWithRows(this.props.teams[this.props.lg_id]);
  }

  renderRow(team) {
    return <TeamItem team={team} />;
  }

  render() {
    console.log(this.props.lg_id)
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {       //pega o state global do app, pega parte dele e passa como props para o TeamList, no caso
  return { teams: state.teams };
};

export default connect(mapStateToProps, actions)(TeamList);     //primeiro connect devolve uma funcao e dps chama o segundo parenteses
//entao ele vai chamar o mapStateToProps e depois a funcao de "actions" e passar o seu state como props
