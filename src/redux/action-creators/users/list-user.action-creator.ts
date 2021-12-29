import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { axiosErrorHandler } from '../../../utils/axios-error.handler';
import request from '../../../utils/request';
import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { IUser } from '../../../utils/types/user.interface';
import { UserListActionType } from '../../action-types';
import { UserListAction } from '../../actions/users/user-list.action';

export const onFetchAllUsers =
  () => async (dispatch: Dispatch<UserListAction>) => {
    dispatch({ type: UserListActionType.FETCH_USERS });

    try {
      const { data } = await request<IPaginatedResult<IUser>>('GET', '/users');
      dispatch({ type: UserListActionType.FETCH_USERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UserListActionType.FETCH_USERS_ERROR,
        payload: axiosErrorHandler(error as AxiosError),
      });
    }
  };
