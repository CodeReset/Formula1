import {combineReducers} from 'redux';
import driversReducer from './drivers';
import racesReducer from './races';

const reducer = combineReducers({
  driversReducer,
  racesReducer,
});
export default reducer;
