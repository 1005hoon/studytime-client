import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { axiosErrorHandler } from '../../../utils/axios-error.handler';
import request from '../../../utils/request';
import { IEvents } from '../../../utils/types/events.interface';
import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { FetchEventsActionType } from '../../action-types';
import { FetchEventsAction } from '../../actions';

export const onFetchAllEvents =
  (page: number, search?: string) =>
  async (dispatch: Dispatch<FetchEventsAction>) => {
    dispatch({ type: FetchEventsActionType.FETCH_EVENTS });
    try {
      const { data } = await request<IPaginatedResult<IEvents>>(
        'GET',
        '/events',
        { page, search }
      );
      dispatch({
        type: FetchEventsActionType.FETCH_EVENTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FetchEventsActionType.FETCH_EVENTS_ERROR,
        payload: axiosErrorHandler(error as AxiosError),
      });
    }
  };
