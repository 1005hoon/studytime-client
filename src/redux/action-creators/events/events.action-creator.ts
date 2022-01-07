import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { axiosErrorHandler } from '../../../utils/axios-error.handler';
import request from '../../../utils/request';
import { IEvent } from '../../../utils/types/event.interface';
import { EventAcionType } from '../../action-types/events/events.action-type';
import { EventActions } from '../../actions';

export const handleCreateEvent =
  (name: string) => async (dispatch: Dispatch<EventActions>) => {
    dispatch({ type: EventAcionType.CREATE_EVENT });

    try {
      const { data } = await request<IEvent>('POST', '/events', {}, { name });
      dispatch({ type: EventAcionType.CREATE_EVENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: EventAcionType.CREATE_EVENT_ERROR,
        payload: axiosErrorHandler(error as AxiosError),
      });
    }
  };

export const handleFetchAllEvents =
  (page: number, search?: string) =>
  async (dispatch: Dispatch<EventActions>) => {
    dispatch({ type: EventAcionType.FETCH_EVENTS });
  };
