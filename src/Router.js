import React from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import Home from './components/Home';
import TeamList from './components/TeamList';
import LeagueList from './components/LeagueList';
import Team from './components/Team';
import Menu from './components/Menu';
import SideMenu from 'react-native-side-menu';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {

  return (
    <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth" >
            <Scene key="login" component={LoginForm} title="Login" />
          </Scene>

          <Scene key="main" initial>
            <Scene key="home" component={Home} title="RedManBrasil" />
          </Scene>

          <Scene key="teams">
              <Scene
                onLeft={() => Actions.main({type: 'reset'})}
                leftTitle="Home"
                key="league_list"
                component={LeagueList}
                title="Leagues" />
              <Scene key="team_list" component={TeamList} title="Teams" />
              <Scene key="soloteam" component={Team} />
          </Scene>
        </Scene>
    </Router>
  );
};

export default RouterComponent;
