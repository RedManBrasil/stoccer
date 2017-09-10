import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import TeamList from './components/TeamList';
import Router from './Router';
import reducers from './reducers'; //so importando a pasta ja esta implicito que se quer o index.js

class App extends Component {

  render() {

  return (
    <Provider store={createStore(reducers)}>
      <Router />
    </Provider>
    );
  }
}

export default App;
