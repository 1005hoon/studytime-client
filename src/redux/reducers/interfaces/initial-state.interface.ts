export interface InitialState<T> {
  data: T | T[];
  loading: boolean;
  error: null | string;
}
