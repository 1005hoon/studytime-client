import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { IUser } from '../../../utils/types/user.interface';
import { UserSearchActionType } from '../../action-types';
import { UserFetchAction } from '../../actions/users/user-fetch.action';

import { InitialState } from '../interfaces/initial-state.interface';

const initialState: InitialState<IUser> = {
  loading: true,
  error: null,
  data: {
    id: 0,
    stId: '',
    nickname: '',
    email: '',
    isAdmin: 0,
    thumbnail: '',
    teamId: 0,
    dDayName: '',
    groupId: 0,
    lastLeafName: '',
    isActive: 0,
  },
};

const reducer = (state = initialState, action: UserFetchAction) => {
  switch (action.type) {
    case UserSearchActionType.FETCH_USER_BY_STID:
      return {
        ...state,
        loading: true,
      };
    case UserSearchActionType.FETCH_USER_BY_STID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserSearchActionType.FETCH_USER_BY_STID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
