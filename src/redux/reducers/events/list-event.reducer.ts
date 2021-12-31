import { IEventWithDetails } from '../../../utils/types/events.interface';
import { CreateEventsActionType } from '../../action-types';
import { CreateEventAction } from '../../actions';
import { InitialState } from '../interfaces/initial-state.interface';

const initialState: InitialState<IEventWithDetails> = {
  loading: true,
  error: null,
  data: {
    id: 0,
    name: '',
    createdAt: new Date(),
    isDeleted: 0,
    details: [],
  },
};

const reducer = (state = initialState, action: CreateEventAction) => {
  switch (action.type) {
    case CreateEventsActionType.CREATE_EVENT:
      return {
        ...state,
        loading: true,
      };
    case CreateEventsActionType.CREATE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case CreateEventsActionType.CREATE_EVENT_ERROR:
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
