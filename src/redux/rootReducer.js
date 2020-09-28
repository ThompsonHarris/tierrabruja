import { combineReducers } from 'redux';
//reducers
import { NavReducer } from './nav/nav.reducer';
import { UserReducer } from './user/user.reducer';
import { AdminReducer } from './admin/admin.reducer';

export const rootReducer = combineReducers({
  nav: NavReducer,
  user: UserReducer,
  admin: AdminReducer,
});
