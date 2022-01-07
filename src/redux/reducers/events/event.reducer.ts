import { IEvent } from '../../../utils/types/event.interface';
import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { EventAcionType } from '../../action-types/events/events.action-type';
import { EventActions } from '../../actions';
import { IInitialReducerState } from '../interfaces/initial-state.interface';

export interface IEventState extends IInitialReducerState {
  event: IEvent;
  eventList: IPaginatedResult<IEvent>;
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
  eventList: {
    first: 0,
    last: 0,
    count: 0,
    limit: 10,
    data: [],
  },
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
        eventList: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
