import { IEvent } from '../../../utils/types/event.interface';
import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { IPopup } from '../../../utils/types/popup.interface';
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

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
