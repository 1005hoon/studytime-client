import { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { axiosErrorHandler } from '../../../utils/axios-error.handler';
import request from '../../../utils/request';
import { IArticle } from '../../../utils/types/article.interface';
import { IPaginatedResult } from '../../../utils/types/paginated-result.interface';
import { FetchArticlesActionType } from '../../action-types';
import { FetchArticlesAction } from '../../actions';

export const getArticlesByStId =
  (stId: string) => async (dispatch: Dispatch<FetchArticlesAction>) => {
    dispatch({ type: FetchArticlesActionType.GET_ARTICLES });

    try {
      const { data } = await request<IPaginatedResult<IArticle>>(
        'GET',
        '/articles',
        { stId }
      );
      dispatch({
        type: FetchArticlesActionType.GET_ARTICLES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FetchArticlesActionType.GET_ARTICLES_ERROR,
        payload: axiosErrorHandler(error as AxiosError),
      });
    }
  };
