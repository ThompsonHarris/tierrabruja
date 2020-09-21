import { combineReducers } from 'redux';
//reducers
import { NavReducer } from './nav/nav.reducer';
import { UserReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
  nav: NavReducer,
  user: UserReducer,
});
