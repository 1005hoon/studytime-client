import { combineReducers } from 'redux';
import userAuthReducer from './users/user-auth.reducer';

const reducer = combineReducers({
  userAuth: userAuthReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
