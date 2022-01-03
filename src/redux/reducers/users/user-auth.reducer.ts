import { IUser } from '../../../utils/types/user.interface';
import { UserAuthActionType } from '../../action-types';
import { UserAuthAction } from '../../actions';
import { InitialState } from '../interfaces/initial-state.interface';

const initialState: InitialState<IUser> = {
  loading: false,
  error: null,
  data: {
    id: 0,
    stId: '',
    isAdmin: 0,
  } as IUser,
};

const reducer = (state = initialState, action: UserAuthAction) => {
  switch (action.type) {
    case UserAuthActionType.LOGIN_USER:
      return {
        ...state,
        loading: true,
      };
    case UserAuthActionType.LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserAuthActionType.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case UserAuthActionType.AUTHENTICATE_USER:
      return {
        ...state,
        loading: true,
      };

    case UserAuthActionType.AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case UserAuthActionType.AUTHENTICATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserAuthActionType.LOGOUT_USER:
      return {
        ...state,
        loading: true,
      };
    case UserAuthActionType.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UserAuthActionType.LOGOUT_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
