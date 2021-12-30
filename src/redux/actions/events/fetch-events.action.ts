import { IEvents } from '../../../utils/types/events.interface';
import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { FetchEventsActionType } from '../../action-types';

interface IFetchEventsAction {
  type: FetchEventsActionType.FETCH_EVENTS;
}

interface IFetchEventsSuccessAction {
  type: FetchEventsActionType.FETCH_EVENTS_SUCCESS;
  payload: IPaginatedResult<IEvents>;
}

interface IFetchEventsErrorAction {
  type: FetchEventsActionType.FETCH_EVENTS_ERROR;
  payload: string;
}

export type FetchEventsAction =
  | IFetchEventsAction
  | IFetchEventsErrorAction
  | IFetchEventsSuccessAction;