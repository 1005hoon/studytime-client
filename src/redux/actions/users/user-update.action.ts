import { IUserDetail } from '../../../utils/types/user-detail.interface';
import { UpdateUserActionType } from '../../action-types';

interface IUpdateUserAction {
  type: UpdateUserActionType.UPDATE_USER_ADMIN_STATUS;
}

interface IUpdateUserSuccessAction {
  type: UpdateUserActionType.UPDATE_USER_ADMIN_STATUS_SUCCESS;
  payload: IUserDetail;
}

interface IUpdateUserErrorAction {
  type: UpdateUserActionType.UPDATE_USER_ADMIN_STATUS_ERROR;
  payload: string;
}

export type UserUpdateAction =
  | IUpdateUserAction
  | IUpdateUserErrorAction
  | IUpdateUserSuccessAction;
