export const __PROD__ = process.env.NODE_ENV === 'production';
export const isAdmin = (isAdmin: number) => (isAdmin === 0 ? false : true);

export enum ROUTES {
  HOME = '/',
  USERS = '/users',
  USERS_DETAIL = '/users/:stId',
  EVENTS = '/events',
  EVENTS_DETAILS = '/events/:id',
  EVENTS_DETAIL = '/events/:id/details/:detailId',
  POPUPS = '/popups',
  POPUPS_DETAIL = '/popups/:id',
  LOGIN = '/login',
  OAUTH = '/oauth',
}

export enum LOGIN_OPTION {
  KAKAO = '카카오',
  GOOGLE = '구글',
}
