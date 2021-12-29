import { combineReducers } from 'redux';
import userAuthReducer from './users/user-auth.reducer';
import userListReducer from './users/user-list.reducer';

const reducer = combineReducers({
  userAuth: userAuthReducer,
  userList: userListReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
