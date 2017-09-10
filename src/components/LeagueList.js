import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, TouchableOpacity, ListView } from 'react-native';
import LeagueItem from './LeagueItem';
import * as actions from '../actions'; //importando a pasta ele importa o index.js by default

class LeagueList extends Component {

  componentWillMount() {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.dataSource = ds.cloneWithRows(this.props.leagues);
  }

  renderRow(league) {
    return <LeagueItem league={league} />;
  }

  render() {
    return (
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
    );
  }
}

const mapStateToProps = state => {       //pega o state global do app, pega parte dele e passa como props para o LeagueList, no caso
  return { leagues: state.leagues };
};

export default connect(mapStateToProps, actions)(LeagueList);     //primeiro connect devolve uma funcao e dps chama o segundo parenteses
//entao ele vai chamar o mapStateToProps e depois a funcao de "actions" e passar o seu state como props
