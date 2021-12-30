import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { axiosErrorHandler } from '../../../utils/axios-error.handler';
import request from '../../../utils/request';
import { IUser } from '../../../utils/types/user.interface';
import { UpdateUserActionType } from '../../action-types';
import { UserUpdateAction } from '../../actions';

export const onUpdateUserAdminStatus =
  (stId: string, isAdmin: number) =>
  async (dispatch: Dispatch<UserUpdateAction>) => {
    dispatch({ type: UpdateUserActionType.UPDATE_USER_ADMIN_STATUS });
    try {
      const {} = await request<IUser>(
        'PATCH',
        `/users/${stId}`,
        {},
        { isAdmin }
      );
    } catch (error) {
      dispatch({
        type: UpdateUserActionType.UPDATE_USER_ADMIN_STATUS_ERROR,
        payload: axiosErrorHandler(error as AxiosError),
      });
    }
  };
