import { AxiosError } from 'axios';

export const axiosErrorHandler = (e: AxiosError) => {
  let message = '';

  if (e.response) {
    // Request made and server responded

    message = e.response.data.message;
  } else if (e.request) {
    // The request was made but no response was received
    message = e.request;
  } else {
    // Something happened in setting up the request that triggered an Error
    message = e.message;
  }
  return message;
};
