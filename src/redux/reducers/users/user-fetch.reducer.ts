import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { IUser } from '../../../utils/types/user.interface';
import { UserSearchActionType } from '../../action-types';
import { UserFetchAction } from '../../actions/users/user-fetch.action';

import { InitialState } from '../interfaces/initial-state.interface';

const initialState: InitialState<IPaginatedResult<IUser>> = {
  loading: false,
  error: null,
  data: {
    first: 0,
    last: 0,
    limit: 0,
    count: 0,
    data: [],
  },
};

const reducer = (state = initialState, action: UserFetchAction) => {
  switch (action.type) {
    case UserSearchActionType.FETCH_USERS:
      return {
        ...state,
        loading: true,
      };
    case UserSearchActionType.FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserSearchActionType.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case UserSearchActionType.SEARCH_USERS:
      return {
        ...state,
        loading: true,
      };
    case UserSearchActionType.SEARCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserSearchActionType.SEARCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
