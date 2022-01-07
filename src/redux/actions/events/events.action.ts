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

export type EventActions =
  | IFetchEventsAction
  | IFetchEventsErrorAction
  | IFetchEventsSuccessAction;
