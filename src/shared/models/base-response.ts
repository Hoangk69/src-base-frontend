export class BaseResponse<T> {
  constructor(){
    this.type = 'success';
    this.message = '';
    this.total = 0;
  }
  type: 'success'|'error';
  code: any;
  message: string;
  data: any;
  metadata: unknown;
  meta: any;
  total: number;
}
