import { IUser } from '../../../utils/types/user.interface';
import { UserAuthActionType } from '../../action-types';

interface IUserLoginAction {
  type: UserAuthActionType.LOGIN_USER;
}

interface IUserLoginSuccessAction {
  type: UserAuthActionType.LOGIN_USER_SUCCESS;
  payload: IUser;
}

interface IUserLoginErrorAction {
  type: UserAuthActionType.LOGIN_USER_ERROR;
  payload: string;
}

interface IUserLogoutAction {
  type: UserAuthActionType.LOGOUT_USER;
}

interface IUserLogoutSuccessAction {
  type: UserAuthActionType.LOGOUT_USER_SUCCESS;
}

interface IUserLogoutErrorAction {
  type: UserAuthActionType.LOGOUT_USER_ERROR;
  payload: string;
}

export type UserAuthAction =
  | IUserLoginAction
  | IUserLoginErrorAction
  | IUserLoginSuccessAction
  | IUserLogoutAction
  | IUserLogoutErrorAction
  | IUserLogoutSuccessAction;
