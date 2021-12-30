import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { IUser } from '../../../utils/types/user.interface';
import { UserSearchActionType } from '../../action-types';

interface IFetchUsersAction {
  type: UserSearchActionType.FETCH_USERS;
}

interface IFetchUsersSuccessAction {
  type: UserSearchActionType.FETCH_USERS_SUCCESS;
  payload: IPaginatedResult<IUser>;
}

interface IFetchUsersErrorAction {
  type: UserSearchActionType.FETCH_USERS_ERROR;
  payload: string;
}

interface ISearchUserAction {
  type: UserSearchActionType.SEARCH_USERS;
}

interface ISearchUserSuccessAction {
  type: UserSearchActionType.SEARCH_USERS_SUCCESS;
  payload: IPaginatedResult<IUser>;
}

interface ISearchUserErrorAction {
  type: UserSearchActionType.SEARCH_USERS_ERROR;
  payload: string;
}

export type UserFetchAction =
  | IFetchUsersAction
  | IFetchUsersErrorAction
  | IFetchUsersSuccessAction
  | ISearchUserAction
  | ISearchUserErrorAction
  | ISearchUserSuccessAction;
