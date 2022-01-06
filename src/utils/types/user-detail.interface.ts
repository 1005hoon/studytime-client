import { IArticle } from './article.interface';
import { IUser } from './user.interface';

export interface IUserDetail {
  user: IUser;
  articles: IArticle[];
}
