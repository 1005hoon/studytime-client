export interface InitialState<T> {
  data: T;
  loading: boolean;
  error: null | string;
}

export interface IInitialReducerState {
  loading: boolean;
  error: null | string;
}
