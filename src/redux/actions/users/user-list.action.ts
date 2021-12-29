import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { IUser } from '../../../utils/types/user.interface';
import { UserListActionType } from '../../action-types';

interface IFetchUsersAction {
  type: UserListActionType.FETCH_USERS;
}

interface IFetchUsersSuccessAction {
  type: UserListActionType.FETCH_USERS_SUCCESS;
  payload: IPaginatedResult<IUser>;
}

interface IFetchUsersErrorAction {
  type: UserListActionType.FETCH_USERS_ERROR;
  payload: string;
}

export type UserListAction =
  | IFetchUsersAction
  | IFetchUsersErrorAction
  | IFetchUsersSuccessAction;
