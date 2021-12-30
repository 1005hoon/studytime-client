import { combineReducers } from 'redux';
import userAuthReducer from './users/user-auth.reducer';
import userListReducer from './users/user-fetch.reducer';
import userDetailReducer from './users/user-detail.reducer';

const reducer = combineReducers({
  userAuth: userAuthReducer,
  userList: userListReducer,
  userDetail: userDetailReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
