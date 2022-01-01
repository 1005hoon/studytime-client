import { IEventWithDetails } from '../../../utils/types/events.interface';
import { CreateEventDetailActionType } from '../../action-types';

interface ICreateEventDetailAction {
  type: CreateEventDetailActionType.CREATE_EVENT_DETAIL;
}

interface ICreateEventDetailSuccessAction {
  type: CreateEventDetailActionType.CREATE_EVENT_DETAIL_SUCCESS;
  payload: IEventWithDetails;
}

interface ICreateEventDetailErrorAction {
  type: CreateEventDetailActionType.CREATE_EVENT_DETAIL_ERROR;
  payload: string;
}

interface IGetS3URLAction {
  type: CreateEventDetailActionType.GET_S3_URL;
}

interface IGetS3URLSuccessAction {
  type: CreateEventDetailActionType.GET_S3_URL_SUCCESS;
  payload: string;
}

interface IGetS3URLErrorAction {
  type: CreateEventDetailActionType.GET_S3_URL_ERROR;
  payload: string;
}

export type CreateEventDetailAction =
  | ICreateEventDetailAction
  | ICreateEventDetailErrorAction
  | ICreateEventDetailSuccessAction
  | IGetS3URLAction
  | IGetS3URLErrorAction
  | IGetS3URLSuccessAction;
