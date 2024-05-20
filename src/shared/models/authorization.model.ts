export class AuthorizationModel {
  token: string;
  role: string[] | string;
  username: string;
  userName: string;
  name: string;
  email: string;
  group_manager: string;
  parent_store_manager: string;
  group_code: string;
  allianceId: string;
  storeId: string;
  parent_store_code: string;
  parent_store_name: string;
  storeName: string;
  ischangedpassword: number;
  alliance_type: number;

  constructor(model: any = null) {
    if (model) {
      this.token = model.token;
      this.role = model.role;
      this.username = model.username;
      this.userName = model.userName;
      this.name = model.name;
      this.email = model.email;
      this.group_manager = model.group_manager;
      this.parent_store_manager = model.parent_store_manager;
      this.group_code = model.group_code;
      this.allianceId = model.allianceId;
      this.parent_store_name = model.parent_store_name;
      this.storeName = model.storeName;
      this.ischangedpassword = model.ischangedpassword;
      this.parent_store_code = model.parent_store_code;
      this.alliance_type = model.alliance_type;
      if (typeof this.role === 'string') {
        this.role = this.role.split(',');
      }
    }
  }

  hasRole(role: string) {
    return this.role.includes(role);
  }

  notYetChangePassword() {
    return this.ischangedpassword === 0;
  }
}
