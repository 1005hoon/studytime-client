import { PopupsActionType } from '../../action-types';

interface IFetchPopupsAction {
  type: PopupsActionType.FETCH_ALL_POPUPS;
  payload: any;
}

export type PopupsAction = IFetchPopupsAction;
