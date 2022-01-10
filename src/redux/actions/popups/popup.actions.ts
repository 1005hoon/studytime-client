import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { IPopup } from '../../../utils/types/popup.interface';
import { PopupsActionType } from '../../action-types';

interface IFetchPopupsAction {
  type: PopupsActionType.FETCH_ALL_POPUPS;
}

interface IFetchPopupsSuccessAction {
  type: PopupsActionType.FETCH_ALL_POPUPS_SUCCESS;
  payload: IPaginatedResult<IPopup>;
}

interface IFetchPopupsErrorAction {
  type: PopupsActionType.FETCH_ALL_POPUPS_ERROR;
  payload: string;
}

export type PopupsAction =
  | IFetchPopupsSuccessAction
  | IFetchPopupsErrorAction
  | IFetchPopupsAction;
