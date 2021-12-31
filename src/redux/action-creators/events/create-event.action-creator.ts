import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { axiosErrorHandler } from '../../../utils/axios-error.handler';
import request from '../../../utils/request';
import {
  IEvents,
  IEventWithDetails,
} from '../../../utils/types/events.interface';
import { CreateEventsActionType } from '../../action-types';
import { CreateEventAction } from '../../actions';

export const onCreateEvent =
  (event: Partial<IEvents>) =>
  async (dispatch: Dispatch<CreateEventAction>) => {
    dispatch({ type: CreateEventsActionType.CREATE_EVENT });

    try {
      const { data } = await request<IEventWithDetails>(
        'POST',
        '/events',
        {},
        event
      );
      dispatch({
        type: CreateEventsActionType.CREATE_EVENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CreateEventsActionType.CREATE_EVENT_ERROR,
        payload: axiosErrorHandler(error as AxiosError),
      });
    }
  };
