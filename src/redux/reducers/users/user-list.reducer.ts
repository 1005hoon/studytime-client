import { IUser } from '../../../utils/types/user.interface';
import { UserListActionType } from '../../action-types';
import { UserListAction } from '../../actions/users/user-list.action';

import { InitialState } from '../interfaces/initial-state.interface';

const initialState: InitialState<IUser[]> = {
  loading: true,
  error: null,
  data: [],
};

const reducer = (state = initialState, action: UserListAction) => {
  switch (action.type) {
    case UserListActionType.FETCH_USERS:
      return {
        ...initialState,
        loading: true,
      };
    case UserListActionType.FETCH_USERS_ERROR:
      return {
        ...initialState,
        loading: false,
        error: action.payload,
      };
    case UserListActionType.FETCH_USERS_SUCCESS:
      return {
        ...initialState,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
