import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { IUser } from '../../../utils/types/user.interface';
import { UserListActionType } from '../../action-types';
import { UserListAction } from '../../actions/users/user-list.action';

import { InitialState } from '../interfaces/initial-state.interface';

const initialState: InitialState<IPaginatedResult<IUser>> = {
  loading: true,
  error: null,
  data: {
    first: 0,
    last: 0,
    limit: 0,
    count: 0,
    data: [],
  },
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
