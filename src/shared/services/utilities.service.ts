import { Injectable } from '@angular/core';
import { environment} from 'src/environments/environment';
import { CustomStorage } from '../custom-storage';
import { TranslateService } from '@ngx-translate/core';
import { CompressImageService } from './compress-image.service';
import { take } from 'rxjs/internal/operators';
import { Constants } from '../models/constants';

@Injectable()
export class Utilities {
  lpad(padString, length, value) {
    let str = value.toString();
    while (str.length < length) str = padString + str;
    return str;
  }

  protected base = 'claim';
  public maskDate = [/[1-9]/, /[1-9]/, '/', /[1-9]/, /[1-9]/, '/', /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/];
  constructor(
    private translate: TranslateService,
    private compressImage: CompressImageService
    ) {
  }

  /*
  * getURL API
  * @return: {String}
  */
  getUrlServerHost() {
    return `${environment.endpoint}`;
  }

  /*
  * regex number
  * @param: {String} input
  * @return: {boolean}
  */
  isNumber(input): boolean {
    const numberExtension = new RegExp('[^0-9]');
    let check = true;
    if (input) {
      check = !numberExtension.test(input);
    }
    return check;
  }

  /*
  * regex Email
  * @param: {String} email address
  * @return: {boolean}
  */
  isEmail(email): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  /*
  * format Price
  * @param: {number}
  * @return: {number}
  */
  formatPrice(input) {
    if (input) {
      input += '';
      const output = input.replace(/\./g, '');
      return output.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    return 0;
  }

  /*
  * get current User from localStorage
  * @return: {AuthorizationModel}
  */
  currentUser() {
    return CustomStorage.currentUser;
  }

  /*
  * Check role
  * @param: {String} Role
  * @return: {boolean}true/false
  */
  checkRole(textRole): boolean{
    return textRole === localStorage.getItem('role');
  }

  /*
  * Check role admin
  * @return: {boolean}true/false
  */
  isAdmin(): boolean {
    return this.checkRole('Admin');
  }

  /**
   * get user logged role
   * @return: string
   */
  getRole():string {
    return localStorage.getItem('role');
  }

  /*
  * Copy object
  * @param: {Object}
  * @return: {Object}
  */
  copyObject(input: any) {
    return Object.assign({}, input);
  }

  /*
  * Copy Array
  * @param: {Array}
  * @return: {Array}
  */
  copyArray(arrInput: any) {
    return [...arrInput];
  }

  checkIsUserParent(): boolean {
    return (Constants.LIST_ROLE_PARENT.some((role) => this.currentUser().role.includes(role)));
  }

  /*
  * get Text from i18n
  * @param: {String} Key
  * @return: {Promise<string>}
  */
  async trans(key: string): Promise<string> {
    return await this.translate.get(key).toPromise();
  }

  uploadImageWithCompress(event) {
    const image: File = event.target.files[0]
    console.log(`Image size before compressed: ${image.size} bytes.`);
    this.compressImage.compress(image)
        .pipe(take(1))
        .subscribe(compressedImage => {
            console.log(`Image size after compressed: ${compressedImage.size} bytes.`);
            // TODO: Now you can do upload the compressed image
        });
  }

  checkRoleAccess(roles: string[]): boolean {
    const currentRole = CustomStorage.currentUser.role;
    if (roles) {
      return roles.some((role) => currentRole.includes(role));
    }
    else {
      return true;
    }
  }

  checkAllianceAccess(allianceAccept: number[]): boolean {
    const currentTypeAlliance = CustomStorage.currentUser.alliance_type;
    if (allianceAccept) {
      return allianceAccept.filter(e => e === currentTypeAlliance).length > 0;
    }
    else {
      return true;
    }
  }

  checkAccessCampaign(id: string): boolean {
    const groupCode = CustomStorage.currentUser.group_code;
    const accessCampaign = Constants.ACCESS_CAMPAIGN
    if(id === 'campaign'){
      return accessCampaign.includes(groupCode)
    }else{
      return true;
    }
  }
}
