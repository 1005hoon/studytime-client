export interface IPaginatedResult<T> {
  first: number;
  last: number;
  limit: number;
  count: number;
  data: T[];
}
