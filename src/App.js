import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import TeamList from './components/TeamList';
import Router from './Router';
import reducers from './reducers'; //so importando a pasta ja esta implicito que se quer o index.js

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCBlrMqzS17lHMsf2qPeTtTDG1fJu4VsDo",
      authDomain: "stoccer-a8cb2.firebaseapp.com",
      databaseURL: "https://stoccer-a8cb2.firebaseio.com",
      projectId: "stoccer-a8cb2",
      storageBucket: "stoccer-a8cb2.appspot.com",
      messagingSenderId: "937244283198"
    };

  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); //por causa do firebase

  return (
    <Provider store={store}>
      <Router />
    </Provider>
    );
  }
}

export default App;
