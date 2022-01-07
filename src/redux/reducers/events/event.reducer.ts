import { IEvent } from '../../../utils/types/event.interface';
import { IInitialReducerState } from '../interfaces/initial-state.interface';

export interface IEventState extends IInitialReducerState {
  event: IEvent;
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
