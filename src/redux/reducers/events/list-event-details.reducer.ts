import { IEventDetail } from '../../../utils/types/event-detail.interface';
import { FetchEventsActionType } from '../../action-types';
import { FetchEventsAction } from '../../actions';
import { InitialState } from '../interfaces/initial-state.interface';

const initialState: InitialState<IEventDetail[]> = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state = initialState, action: FetchEventsAction) => {
  switch (action.type) {
    case FetchEventsActionType.FETCH_EVENT_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case FetchEventsActionType.FETCH_EVENT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case FetchEventsActionType.FETCH_EVENT_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
