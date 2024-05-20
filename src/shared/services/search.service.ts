import {BaseResponse} from '../models/base-response';

export interface ISearchService<T> {
  search(model: T): Promise<BaseResponse<any>>;
  create(model: any): Promise<BaseResponse<any>>;
  update(model: any): Promise<BaseResponse<any>>;
  delete(model: any): Promise<BaseResponse<any>>;
}
