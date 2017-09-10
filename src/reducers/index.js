import { combineReducers } from 'redux'; //para usar mais de um reducer no app se usa esse combineReducers
import TeamReducer from './TeamReducer';
import LeagueReducer from './LeagueReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  teams: TeamReducer,
  leagues: LeagueReducer,
  selectedId: SelectionReducer
});
