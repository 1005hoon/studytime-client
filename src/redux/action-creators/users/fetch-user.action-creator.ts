import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { axiosErrorHandler } from '../../../utils/axios-error.handler';
import request from '../../../utils/request';
import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { IUser } from '../../../utils/types/user.interface';
import { UserSearchActionType } from '../../action-types';
import { UserFetchAction } from '../../actions/users/user-fetch.action';

export const onFetchAllUsers =
  (page: number, search?: string) =>
  async (dispatch: Dispatch<UserFetchAction>) => {
    dispatch({ type: UserSearchActionType.FETCH_USERS });

    try {
      const { data } = await request<IPaginatedResult<IUser>>('GET', '/users', {
        page,
        search,
      });
      dispatch({
        type: UserSearchActionType.FETCH_USERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UserSearchActionType.FETCH_USERS_ERROR,
        payload: axiosErrorHandler(error as AxiosError),
      });
    }
  };

export const onSearchUserWithKeyword =
  (search: string) => async (dispatch: Dispatch<UserFetchAction>) => {
    dispatch({ type: UserSearchActionType.SEARCH_USERS });

    try {
      const { data } = await request<IPaginatedResult<IUser>>('GET', '/users', {
        search,
      });

      dispatch({
        type: UserSearchActionType.SEARCH_USERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UserSearchActionType.SEARCH_USERS_ERROR,
        payload: axiosErrorHandler(error as AxiosError),
      });
    }
  };

export const onSearchUserWithStId =
  (stId: string) => async (dispatch: Dispatch<UserFetchAction>) => {
    dispatch({ type: UserSearchActionType.FETCH_USER_BY_STID });

    try {
      const { data } = await request<IUser>('GET', '/users', { st_id: stId });
      dispatch({
        type: UserSearchActionType.FETCH_USER_BY_STID_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UserSearchActionType.FETCH_USER_BY_STID_ERROR,
        payload: axiosErrorHandler(error as AxiosError),
      });
    }
  };
