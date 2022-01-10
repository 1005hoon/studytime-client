import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { axiosErrorHandler } from '../../../utils/axios-error.handler';
import request from '../../../utils/request';
import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { IPopup } from '../../../utils/types/popup.interface';
import { PopupsActionType } from '../../action-types';
import { PopupsAction } from '../../actions';

export const handleFetchAllPopups =
  (page: number, search?: string) =>
  async (dispatch: Dispatch<PopupsAction>) => {
    dispatch({ type: PopupsActionType.FETCH_ALL_POPUPS });
    try {
      const { data } = await request<IPaginatedResult<IPopup>>(
        'GET',
        'popups',
        { page, search }
      );

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
