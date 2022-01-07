import { combineReducers } from 'redux';

import articlesListReducer from './articles/list-article.reducer';
import eventsReducer from './events/event.reducer';
import eventsListReducer from './events/list-events.reducer';
import eventDetailsListReducer from './events/list-event-details.reducer';
import eventWithDetailListReducer from './events/list-event-details.reducer';
import userAuthReducer from './users/user-auth.reducer';
import userListReducer from './users/user-fetch.reducer';
import userDetailReducer from './users/user-detail.reducer';

const reducer = combineReducers({
  articleList: articlesListReducer,
  events: eventsReducer,
  eventList: eventsListReducer,
  eventListWithDetail: eventWithDetailListReducer,
  eventDetailsList: eventDetailsListReducer,
  userAuth: userAuthReducer,
  userList: userListReducer,
  userDetail: userDetailReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
