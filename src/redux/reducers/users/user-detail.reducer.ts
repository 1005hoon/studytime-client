import { IUserDetail } from '../../../utils/types/user-detail.interface';
import { IUser } from '../../../utils/types/user.interface';
import { UpdateUserActionType, UserSearchActionType } from '../../action-types';
import { UserUpdateAction } from '../../actions';
import { UserFetchAction } from '../../actions/users/user-fetch.action';

import { InitialState } from '../interfaces/initial-state.interface';

const initialState: InitialState<IUserDetail> = {
  loading: true,
  error: null,
  data: {
    user: {
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
    articles: [],
  },
};

const reducer = (
  state = initialState,
  action: UserFetchAction | UserUpdateAction
) => {
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
    case UpdateUserActionType.UPDATE_USER_ADMIN_STATUS:
      return {
        ...state,
        loading: true,
      };
    case UpdateUserActionType.UPDATE_USER_ADMIN_STATUS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UpdateUserActionType.UPDATE_USER_ADMIN_STATUS_SUCCESS:
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
