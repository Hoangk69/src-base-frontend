import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseResponse } from "src/shared/models/base-response";
import { BaseHttpService } from "src/shared/services/base-http.service";

@Injectable({providedIn: 'root'})
export class HomeService extends BaseHttpService {

    constructor(protected override http: HttpClient) {
    super(http);
    }

    async lookupBanks(model: any){
        return await super.postAsync(`auth/user`, model);
    }
    
    async getSingedUrlUploadStore(models: any[]) {
    const abc = models.map(model => super.getAsync('pre_upload', model));
    return await Promise.all(abc);
    }

    async insertImgStore(model: any) {
    return await super.postAsync(`parent-store-images`, model);
    }

    async getDetailAsync(storecode: number): Promise<BaseResponse<any>> {
    return await super.getAsync(`parent-stores/`, {'storecode': storecode});
    }
}
