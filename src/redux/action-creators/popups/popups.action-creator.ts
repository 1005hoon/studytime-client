import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { axiosErrorHandler } from '../../../utils/axios-error.handler';
import request from '../../../utils/request';
import { IPopup } from '../../../utils/types/popup.interface';
import { PopupsActionType } from '../../action-types';
import { IFetchAllPopupsResult, PopupsAction } from '../../actions';

export const handleFetchAllPopups =
  (page: number, search?: string) =>
  async (dispatch: Dispatch<PopupsAction>) => {
    dispatch({ type: PopupsActionType.FETCH_ALL_POPUPS });
    try {
      const { data } = await request<IFetchAllPopupsResult>('GET', '/popups', {
        page,
        search,
      });

      dispatch({
        type: PopupsActionType.FETCH_ALL_POPUPS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PopupsActionType.FETCH_ALL_POPUPS_ERROR,
        payload: axiosErrorHandler(error as AxiosError),
      });
    }
  };

export const handlePopupCreate =
  (formData: any) => async (dispatch: Dispatch<PopupsAction>) => {
    dispatch({ type: PopupsActionType.CREATE_POPUP });

    try {
      const { data } = await request<IPopup>('POST', '/popups', {}, formData);
      dispatch({
        type: PopupsActionType.CREATE_POPUP,
        payload: data,
      });

      const { data: fetchData } = await request<IFetchAllPopupsResult>(
        'GET',
        '/popups',
        { page: 1, search: '' }
      );

      dispatch({
        type: PopupsActionType.FETCH_ALL_POPUPS_SUCCESS,
        payload: fetchData,
      });
    } catch (error) {
      dispatch({
        type: PopupsActionType.FETCH_ALL_POPUPS_ERROR,
        payload: axiosErrorHandler(error as AxiosError),
      });
    }
  };
