/// <reference types="react-scripts" />

namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_SERVER_URL: string;
    REACT_APP_NODE_ENV: string;

    REACT_APP_OAUTH_KAKAO_BASE_HOST: string;
    REACT_APP_OAUTH_KAKAO_CLIENT_ID: string;
    REACT_APP_OAUTH_KAKAO_CLIENT_SECRET: string;
    REACT_APP_OAUTH_KAKAO_REDIRECT_URI: string;

    REACT_APP_GOOGLE_OAUTH_CLIENT_ID: string;
    REACT_APP_OAUTH_GOOGLE_REDIRECT_URI: string;
    REACT_APP_OAUTH_GOOGLE_BASE_URI: string;
  }
}
