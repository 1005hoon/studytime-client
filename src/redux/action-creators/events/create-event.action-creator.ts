import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { axiosErrorHandler } from '../../../utils/axios-error.handler';
import request from '../../../utils/request';
import {
  IEvents,
  IEventWithDetails,
} from '../../../utils/types/events.interface';
import { CreateEventsActionType } from '../../action-types';
import { CreateEventAction, CreateEventDetailAction } from '../../actions';

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
      window.location.reload();
    } catch (error) {
      dispatch({
        type: CreateEventsActionType.CREATE_EVENT_ERROR,
        payload: axiosErrorHandler(error as AxiosError),
      });
    }
  };

export const onCreateEventDetail =
  (eventId: number, formData: FormData) =>
  async (dispatch: Dispatch<CreateEventDetailAction>) => {
    try {
      await request(
        'POST',
        `/events/${eventId}/details`,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
        formData
      );
    } catch (error) {}
    // dispatch({ type: CreateEventDetailActionType.GET_S3_URL });
    // try {
    //   const { data } = await request<{ url: string }>('GET', `/files`, {
    //     event,
    //   });

    //   console.log('DATA URL');

    //   console.log(data.url);
    //   const upload = await request('PUT', data.url, file, {
    //     headers: {
    //       'Content-Type': file.type,
    //     },
    //   });

    //   console.log('UPLOAD');

    //   console.log(upload);
    // } catch (error) {}
  };
