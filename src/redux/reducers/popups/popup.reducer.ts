import { IEvent } from '../../../utils/types/event.interface';
import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { IPopup } from '../../../utils/types/popup.interface';
import { PopupsActionType } from '../../action-types';
import { PopupsAction } from '../../actions';
import { IInitialReducerState } from '../interfaces/initial-state.interface';

export interface IPopupState extends IInitialReducerState {
  popup: IPopup;
  popupList: IPaginatedResult<IPopup>;
  eventList: IEvent[];
}

const initialState: IPopupState = {
  loading: false,
  error: null,
  eventList: [],
  popupList: {
    first: 0,
    last: 0,
    limit: 10,
    count: 0,
    data: [],
  },
  popup: {
    id: 0,
    screen: '',
    targetId: 0,
    imgUrl: '',
    url: '',
    useYn: 0,
    createdAt: new Date(),
    isDeleted: 0,
    description: '',
  },
};

const reducer = (state = initialState, action: PopupsAction) => {
  switch (action.type) {
    case PopupsActionType.FETCH_ALL_POPUPS:
      return {
        ...state,
        loading: true,
      };

    case PopupsActionType.FETCH_ALL_POPUPS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        popupList: { ...action.payload.popups },
        eventList: [...action.payload.events],
      };

    case PopupsActionType.FETCH_ALL_POPUPS_ERROR:
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
