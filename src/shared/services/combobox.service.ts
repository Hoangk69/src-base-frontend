import {BaseHttpService} from 'src/shared/services/base-http.service';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseResponse} from 'src/shared/models/base-response';

@Injectable()
export class ComboboxService extends BaseHttpService{

  constructor(protected http: HttpClient) {
    super(http);
  }
  async getParentStores(): Promise<BaseResponse<any>> {
      return await super.getAsync('common/parent-stores');
  }
  async getParentStoresOption(): Promise<BaseResponse<any>> {
    return await super.getAsync('common/parent-stores?option=1');
  }
  async getChildStore(storecode: string): Promise<BaseResponse<any>> {
    return await super.getAsync(`common/child-stores?storecode=${storecode}`);
  }
  async getChildStoreByGroupCode(): Promise<BaseResponse<any>> {
    return await super.getAsync(`common/child-stores/group-code`);
  }
  async getChildStoreOption(storecode: string): Promise<BaseResponse<any>> {
    return await super.getAsync(`common/child-stores?storecode=${storecode}&option=1`);
  }
  async findProductByCodeOrBarcode(productCode: string, barcode: string): Promise<BaseResponse<any>> {
    return await super.getAsync(`common/get-product-by-code-or-barcode`, {product_code: productCode, barcode});
  }
}
