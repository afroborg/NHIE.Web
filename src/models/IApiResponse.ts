export interface IApiResponse<T> {
  success: boolean;
  length?: number;
  data: T;
}
