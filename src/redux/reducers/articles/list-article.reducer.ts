import { IArticle } from '../../../utils/types/article.interface';
import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { FetchArticlesActionType } from '../../action-types';
import { FetchArticlesAction } from '../../actions';
import { InitialState } from '../interfaces/initial-state.interface';

const initialState: InitialState<IPaginatedResult<IArticle>> = {
  loading: false,
  error: null,
  data: {
    first: 0,
    last: 0,
    limit: 0,
    count: 0,
    data: [],
  },
};

const reducer = (state = initialState, action: FetchArticlesAction) => {
  switch (action.type) {
    case FetchArticlesActionType.GET_ARTICLES:
      return {
        ...state,
        loading: true,
      };
    case FetchArticlesActionType.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case FetchArticlesActionType.GET_ARTICLES_ERROR:
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
