import { IArticle } from '../../../utils/types/article.interface';
import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { FetchArticlesActionType } from '../../action-types';

interface IFetchArticlesAction {
  type: FetchArticlesActionType.GET_ARTICLES;
}

interface IFetchArticlesSuccessAction {
  type: FetchArticlesActionType.GET_ARTICLES_SUCCESS;
  payload: IPaginatedResult<IArticle>;
}

interface IFetchArticlesErrorAction {
  type: FetchArticlesActionType.GET_ARTICLES_ERROR;
  payload: string;
}

export type FetchArticlesAction =
  | IFetchArticlesAction
  | IFetchArticlesErrorAction
  | IFetchArticlesSuccessAction;
