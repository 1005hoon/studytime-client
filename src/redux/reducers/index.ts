import { combineReducers } from 'redux';
import userAuthReducer from './users/user-auth.reducer';
import userListReducer from './users/user-fetch.reducer';
import userDetailReducer from './users/user-detail.reducer';
import eventsListReducer from './events/list-events.reducer';

const reducer = combineReducers({
  eventList: eventsListReducer,
  userAuth: userAuthReducer,
  userList: userListReducer,
  userDetail: userDetailReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
