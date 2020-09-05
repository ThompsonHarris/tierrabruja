import { combineReducers } from 'redux';
//reducers
import { NavReducer } from './nav/nav.reducer';

export const rootReducer = combineReducers({
  nav: NavReducer,
});
