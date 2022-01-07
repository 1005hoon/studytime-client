import { IEvents } from '../../../utils/types/events.interface';
import { IInitialReducerState } from '../interfaces/initial-state.interface';

export interface IEventState extends IInitialReducerState {
  event: IEvents;
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
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
