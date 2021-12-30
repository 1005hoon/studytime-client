export const __PROD__ = process.env.NODE_ENV === 'production';

export enum ROUTES {
  HOME = '',
  USERS = 'users',
  USERS_DETAIL = 'users/:stId',
  LOGIN = 'login',
  OAUTH = 'oauth',
}

export enum LOGIN_OPTION {
  KAKAO = '카카오',
  GOOGLE = '구글',
}
