import { IEventDetail } from '../../../utils/types/event-detail.interface';
import { IEvent } from '../../../utils/types/event.interface';
import { IEvents } from '../../../utils/types/events.interface';
import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';

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

interface ICreateEventDetailAction {
  type: EventAcionType.CREATE_EVENT_DETAIL;
}

interface ICreateEventDetailSuccessAction {
  type: EventAcionType.CREATE_EVENT_DETAIL_SUCCESS;
  payload: IEventDetail;
}

interface ICreateEventDetailErrorAction {
  type: EventAcionType.CREATE_EVENT_DETAIL_ERROR;
  payload: string;
}

interface IFetchEventDetailByEventIdAction {
  type: EventAcionType.FETCH_EVENT_DETAILS_BY_EVENT_ID;
}

interface IFetchEventDetailByEventIdSuccessAction {
  type: EventAcionType.FETCH_EVENT_DETAILS_BY_EVENT_ID_SUCCESS;
  payload: {
    event: IEvent;
    details: IEventDetail[];
  };
}

interface IFetchEventDetailByEventIdErrorAction {
  type: EventAcionType.FETCH_EVENT_DETAILS_BY_EVENT_ID_ERROR;
  payload: string;
}

interface IFetchEventDetailByDetailIdAction {
  type: EventAcionType.FETCH_EVENT_DETAIL_BY_DETAIL_ID;
}

interface IFetchEventDetailByDetailIdSuccessAction {
  type: EventAcionType.FETCH_EVENT_DETAIL_BY_DETAIL_ID_SUCCESS;
  payload: IEventDetail;
}

interface IFetchEventDetailByDetailIdErrorAction {
  type: EventAcionType.FETCH_EVENT_DETAIL_BY_DETAIL_ID_ERROR;
  payload: string;
}

interface IUpdateEventAction {
  type: EventAcionType.UPDATE_EVENT;
}

interface IUpdateEventSuccessAction {
  type: EventAcionType.UPDATE_EVENT_SUCCESS;
  payload: IEvent;
}

interface IUpdateEventErrorAction {
  type: EventAcionType.UPDATE_EVENT_ERROR;
  payload: string;
}

interface IUpdateEventDetailAction {
  type: EventAcionType.UPDATE_EVENT_DETAIL;
}

interface IUpdateEventDetailSuccessAction {
  type: EventAcionType.UPDATE_EVENT_DETAIL_SUCCESS;
  payload: IEventDetail;
}

interface IUpdateEventDetailErrorAction {
  type: EventAcionType.UPDATE_EVENT_DETAIL_ERROR;
  payload: string;
}

interface IDeleteEventAction {
  type: EventAcionType.DELETE_EVENT;
}

interface IDeleteEventSuccessAction {
  type: EventAcionType.DELETE_EVENT_SUCCESS;
}

interface IDeleteEventErrorAction {
  type: EventAcionType.DELETE_EVENT_ERROR;
  payload: string;
}

interface IDeleteEventDetailAction {
  type: EventAcionType.DELETE_EVENT_DETAIL;
}

interface IDeleteEventDetailSuccessAction {
  type: EventAcionType.DELETE_EVENT_DETAIL_SUCCESS;
}

interface IDeleteEventDetailErrorAction {
  type: EventAcionType.DELETE_EVENT_DETAIL_ERROR;
  payload: string;
}

export type EventActions =
  | IFetchEventDetailByDetailIdAction
  | IFetchEventDetailByDetailIdErrorAction
  | IFetchEventDetailByDetailIdSuccessAction
  | IFetchEventDetailByEventIdAction
  | IFetchEventDetailByEventIdErrorAction
  | IFetchEventDetailByEventIdSuccessAction
  | IDeleteEventDetailAction
  | IDeleteEventDetailErrorAction
  | IDeleteEventDetailSuccessAction
  | IDeleteEventAction
  | IDeleteEventErrorAction
  | IDeleteEventSuccessAction
  | IUpdateEventDetailAction
  | IUpdateEventDetailErrorAction
  | IUpdateEventDetailSuccessAction
  | IUpdateEventAction
  | IUpdateEventErrorAction
  | IUpdateEventSuccessAction
  | ICreateEventDetailAction
  | ICreateEventDetailErrorAction
  | ICreateEventDetailSuccessAction
  | ICreateEventAction
  | ICreateEventErrorAction
  | ICreateEventSuccessAction
  | IFetchEventsAction
  | IFetchEventsErrorAction
  | IFetchEventsSuccessAction;
