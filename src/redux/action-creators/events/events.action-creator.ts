import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { axiosErrorHandler } from '../../../utils/axios-error.handler';
import request from '../../../utils/request';
import { IEvent } from '../../../utils/types/event.interface';
import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { EventAcionType } from '../../action-types/events/events.action-type';
import { EventActions } from '../../actions';

export const handleFetchAllEvents =
  (pages: number, search?: string) =>
  async (dispatch: Dispatch<EventActions>) => {
    dispatch({ type: EventAcionType.FETCH_EVENTS });

    try {
      const { data } = await request<IPaginatedResult<IEvent>>(
        'GET',
        '/events',
        { search, pages }
      );
      dispatch({ type: EventAcionType.FETCH_EVENTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: EventAcionType.FETCH_EVENTS_ERROR,
        payload: axiosErrorHandler(error as AxiosError),
      });
    }
  };

export const handleCreateEvent =
  (dto: Partial<IEvent>) => async (dispatch: Dispatch<EventActions>) => {
    dispatch({ type: EventAcionType.CREATE_EVENT });

    try {
      const { data } = await request<IEvent>(
        'POST',
        '/events',
        {},
        {
          ...dto,
        }
      );
      dispatch({ type: EventAcionType.CREATE_EVENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: EventAcionType.CREATE_EVENT_ERROR,
        payload: axiosErrorHandler(error as AxiosError),
      });
    }
  };
