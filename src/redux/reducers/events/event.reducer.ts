import { IEventDetail } from '../../../utils/types/event-detail.interface';
import { IEvent } from '../../../utils/types/event.interface';
import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { EventAcionType } from '../../action-types/events/events.action-type';
import { EventActions } from '../../actions';
import { IInitialReducerState } from '../interfaces/initial-state.interface';

export interface IEventState extends IInitialReducerState {
  event: IEvent;
  eventDetail: IEventDetail;
  eventList: IPaginatedResult<IEvent>;
  detailList: IEventDetail[];
}

const initialState: IEventState = {
  loading: false,
  error: null,
  event: {
    id: 0,
    name: '',
    createdAt: new Date(),
    isDeleted: 0,
  },
  eventDetail: {
    id: 0,
    eventId: 0,
    type: '',
    img_url: '',
    url1: '',
    urlButtonName1: '',
    url2: '',
    urlButtonName2: '',
    description: '',
    createdAt: new Date(),
    isDeleted: 0,
  },
  eventList: {
    first: 0,
    last: 0,
    count: 0,
    limit: 10,
    data: [],
  },
  detailList: [],
};

const reducer = (state: IEventState = initialState, action: EventActions) => {
  switch (action.type) {
    case EventAcionType.CREATE_EVENT:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case EventAcionType.CREATE_EVENT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case EventAcionType.CREATE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        event: action.payload,
      };

    case EventAcionType.UPDATE_EVENT:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case EventAcionType.UPDATE_EVENT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case EventAcionType.UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        event: action.payload,
      };

    case EventAcionType.DELETE_EVENT:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case EventAcionType.DELETE_EVENT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case EventAcionType.DELETE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case EventAcionType.CREATE_EVENT_DETAIL:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case EventAcionType.CREATE_EVENT_DETAIL_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case EventAcionType.CREATE_EVENT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        eventDetail: action.payload,
      };

    case EventAcionType.FETCH_EVENTS:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case EventAcionType.FETCH_EVENTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case EventAcionType.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        eventList: { ...action.payload },
      };

    case EventAcionType.FETCH_EVENT_DETAILS_BY_EVENT_ID:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case EventAcionType.FETCH_EVENT_DETAILS_BY_EVENT_ID_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case EventAcionType.FETCH_EVENT_DETAILS_BY_EVENT_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        detailList: [...action.payload.details],
        event: { ...action.payload.event },
      };

    default:
      return state;
  }
};

export default reducer;
