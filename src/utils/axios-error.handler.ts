import { AxiosError } from 'axios';

export const axiosErrorHandler = (e: AxiosError) => {
  let message = '';

  if (e.response) {
    // Request made and server responded
    message = e.response.data.message;
  } else if (e.request) {
    // The request was made but no response was received
    message = e.request;

    if (e.request.status === 0) {
      message = '서버연결 오류';
    }
  } else {
    // Something happened in setting up the request that triggered an Error
    message = e.message;
  }

  return message;
};
