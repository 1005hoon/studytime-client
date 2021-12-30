import { IEvents } from '../../../utils/types/events.interface';
import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { FetchEventsActionType } from '../../action-types';
import { FetchEventsAction } from '../../actions';
import { InitialState } from '../interfaces/initial-state.interface';

const initialState: InitialState<IPaginatedResult<IEvents>> = {
  loading: true,
  error: null,
  data: {
    first: 0,
    last: 0,
    count: 0,
    limit: 0,
    data: [],
  },
};

const reducer = (state = initialState, action: FetchEventsAction) => {
  switch (action.type) {
    case FetchEventsActionType.FETCH_EVENTS:
      return {
        ...state,
        loading: true,
      };
    case FetchEventsActionType.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FetchEventsActionType.FETCH_EVENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
};

export default reducer;
