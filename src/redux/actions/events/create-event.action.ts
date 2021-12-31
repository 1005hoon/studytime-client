import { IEventWithDetails } from '../../../utils/types/events.interface';
import { CreateEventsActionType } from '../../action-types';

interface ICreateEventAction {
  type: CreateEventsActionType.CREATE_EVENT;
}

interface ICreateEventSuccessAction {
  type: CreateEventsActionType.CREATE_EVENT_SUCCESS;
  payload: IEventWithDetails;
}

interface ICreateEventErrorAction {
  type: CreateEventsActionType.CREATE_EVENT_ERROR;
  payload: string;
}

export type CreateEventAction =
  | ICreateEventAction
  | ICreateEventErrorAction
  | ICreateEventSuccessAction;
