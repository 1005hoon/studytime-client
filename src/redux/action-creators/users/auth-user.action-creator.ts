import { Dispatch } from 'redux';
import request from '../../../utils/request';
import { stringify } from 'qs';
import { UserAuthActionType } from '../../action-types';
import { UserAuthAction } from '../../actions';
import { IUser } from '../../../utils/types/user.interface';
import { AxiosError } from 'axios';
import { axiosErrorHandler } from '../../../utils/axios-error.handler';
import { LOGIN_OPTION } from '../../../utils/constants';

export const onUserLogin = (loginOption: LOGIN_OPTION) => async () => {
  const uri = `${process.env.REACT_APP_OAUTH_KAKAO_BASE_HOST}/oauth/authorize?client_id=${process.env.REACT_APP_OAUTH_KAKAO_CLIENT_ID}&client_secret=${process.env.REACT_APP_OAUTH_KAKAO_CLIENT_SECRET}&redirect_uri=${process.env.REACT_APP_OAUTH_KAKAO_REDIRECT_URI}&scope=account_email&response_type=code&prompt=login`;
  window.open(uri, '_parent');
};

export const onUserAuthChange =
  (code: string) => async (dispatch: Dispatch<UserAuthAction>) => {
    dispatch({ type: UserAuthActionType.LOGIN_USER });

    try {
      const { data } = await request<IUser>(
        'GET',
        `/auth/kakao?${stringify({ code })}`
      );

      dispatch({ type: UserAuthActionType.LOGIN_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UserAuthActionType.LOGIN_USER_ERROR,
        payload: axiosErrorHandler(error as AxiosError),
      });
    }
  };

export const isUserLoggedIn =
  () => async (dispatch: Dispatch<UserAuthAction>) => {
    dispatch({ type: UserAuthActionType.AUTHENTICATE_USER });
    try {
      const { data } = await request<IUser>('GET', '/auth');
      dispatch({
        type: UserAuthActionType.AUTHENTICATE_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UserAuthActionType.AUTHENTICATE_USER_ERROR,
        payload: axiosErrorHandler(error as AxiosError),
      });
    }
  };
