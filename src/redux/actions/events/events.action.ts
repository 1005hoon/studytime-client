import { IEvent } from '../../../utils/types/event.interface';
import {
  IEvents,
  IEventWithDetails,
} from '../../../utils/types/events.interface';
import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { FetchEventsActionType } from '../../action-types';
import { EventAcionType } from '../../action-types/events/events.action-type';

interface IFetchEventsAction {
  type: EventAcionType.FETCH_EVENTS;
}

interface IFetchEventsSuccessAction {
  type: EventAcionType.FETCH_EVENTS_SUCCESS;
  payload: IPaginatedResult<IEvents>;
}

interface IFetchEventsErrorAction {
  type: EventAcionType.FETCH_EVENTS_ERROR;
  payload: string;
}

interface ICreateEventAction {
  type: EventAcionType.CREATE_EVENT;
}

interface ICreateEventSuccessAction {
  type: EventAcionType.CREATE_EVENT_SUCCESS;
  payload: IEvent;
}

interface ICreateEventErrorAction {
  type: EventAcionType.CREATE_EVENT_ERROR;
  payload: string;
}

export type EventActions =
  | ICreateEventAction
  | ICreateEventErrorAction
  | ICreateEventSuccessAction
  | IFetchEventsAction
  | IFetchEventsErrorAction
  | IFetchEventsSuccessAction;
