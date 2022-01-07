import { Dispatch } from 'redux';
import { EventAcionType } from '../../action-types/events/events.action-type';
import { EventActions } from '../../actions';

export const handleCreateEvent = () => async () => {};

export const handleFetchAllEvents =
  (page: number, search?: string) =>
  async (dispatch: Dispatch<EventActions>) => {
    dispatch({ type: EventAcionType.FETCH_EVENTS });
  };
