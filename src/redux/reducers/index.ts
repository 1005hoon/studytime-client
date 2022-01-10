import { combineReducers } from 'redux';

import articlesListReducer from './articles/list-article.reducer';
import eventsReducer from './events/event.reducer';
import popupReducer from './popups/popup.reducer';
import userAuthReducer from './users/user-auth.reducer';
import userListReducer from './users/user-fetch.reducer';
import userDetailReducer from './users/user-detail.reducer';

const reducer = combineReducers({
  articleList: articlesListReducer,
  events: eventsReducer,
  popups: popupReducer,
  userAuth: userAuthReducer,
  userList: userListReducer,
  userDetail: userDetailReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
