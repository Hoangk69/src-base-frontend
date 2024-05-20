"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.SearchComponent = void 0;
var core_1 = require("@angular/core");
var pager_component_1 = require("../../modules/pager/pager/pager.component");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(loader, common, notification, confirmService, service, type) {
        this.loader = loader;
        this.common = common;
        this.notification = notification;
        this.confirmService = confirmService;
        this.service = service;
        this.type = type;
        this.search = this.getNew();
        this.searchCache = this.getNew();
        this.$items = [];
        this.total = 0;
    }
    SearchComponent.prototype.getNew = function () {
        return new this.type();
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.btnSearchClick();
    };
    SearchComponent.prototype.btnSearchClick = function () {
        // refresh search cache
        this.searchCache = this.common.copyObject(this.search);
        this.pagerChanges({
            page: 1,
            size: 20
        });
    };
    SearchComponent.prototype.searchKeyDown = function (event) {
        // Search when enter key pressed
        if (event.keyCode === 13) {
            this.btnSearchClick();
        }
    };
    SearchComponent.prototype.searchAsync = function () {
        return __awaiter(this, void 0, Promise, function () {
            var result, msg, $this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.show();
                        return [4 /*yield*/, this.service.search(this.searchCache)];
                    case 1:
                        result = _a.sent();
                        if (result.status === 1 || result.status === 'success') {
                            this.$items = result.data.items;
                            this.total = result.data.total ? result.data.total : 0;
                        }
                        else {
                            this.$items = [];
                            this.total = 0;
                            msg = await this.common.trans('message.try_later');
                            this.notification.showError(msg);
                        }
                        this.loader.hide();
                        $this = this;
                        setTimeout(function () {
                            $this.pagers.forEach(function (pager) {
                                pager.refresh();
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.btnAddClick = function () {
        // show the dialog
        this.isEdit = false;
        if (this.newOrEditComponent) {
            this.newOrEditComponent.isEdit = false;
            this.newOrEditComponent.initBeforeShow(this.getNew());
        }
        if (this.newOrEditModal) {
            this.newOrEditModal.show();
        }
    };
    SearchComponent.prototype.btnEditClick = function (model) {
        this.isEdit = true;
        if (this.newOrEditComponent) {
            this.newOrEditComponent.isEdit = true;
            this.newOrEditComponent.initBeforeShow(model);
        }
        if (this.newOrEditModal) {
            this.newOrEditModal.show();
        }
    };
    SearchComponent.prototype.btnDeleteClick = function (model) {
        return __awaiter(this, void 0, Promise, function () {
            var msg, resultConfirm, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        msg = await this.common.trans('message.confirm_delete');
                        return [4 /*yield*/, this.confirmService.show(msg)];
                    case 1:
                        resultConfirm = _a.sent();
                        if (!resultConfirm) return [3 /*break*/, 6];
                        this.loader.show();
                        return [4 /*yield*/, this.service["delete"](model)];
                    case 2:
                        result = _a.sent();
                        if (!(result.status === 1)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.searchAsync()];
                    case 3:
                        _a.sent();
                        this.notification.showSuccess(await this.common.trans('message.delete_success'));
                        return [3 /*break*/, 5];
                    case 4:
                        this.notification.showError(await this.common.trans('message.delete_error'));
                        _a.label = 5;
                    case 5:
                        this.loader.hide();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.onModalShown = function () {
        // trigger event onShow on dialog
        if (this.newOrEditComponent) {
            this.newOrEditComponent.onShow(this);
        }
    };
    SearchComponent.prototype.onModalHide = function () {
        // trigger event onShow on dialog
        if (this.newOrEditComponent) {
            this.newOrEditComponent.onHide(this);
        }
    };
    /*
     * event when pager changed
     */
    SearchComponent.prototype.pagerChanges = function (pageInfo) {
        this.searchCache.page = pageInfo.page - 1;
        this.searchCache.size = pageInfo.size;
        // sync other pager value
        if (this.pagers) {
            this.pagers.forEach(function (pager) {
                pager.pageSize = pageInfo.size;
                pager.pager.currentPage = pageInfo.page;
            });
        }
        // call search function
        this.searchAsync();
    };
    SearchComponent.prototype.save = function (model) {
        return __awaiter(this, void 0, Promise, function () {
            var result, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.show();
                        if (!!this.isEdit) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.service.create(model)];
                    case 1:
                        result = _a.sent();
                        if (!(result.status === 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.searchAsync()];
                    case 2:
                        _a.sent();
                        this.notification.showSuccess(await this.common.trans('message.add_new_success'));
                        return [3 /*break*/, 4];
                    case 3:
                        this.notification.showError(await this.common.trans('message.add_new_error'));
                        _a.label = 4;
                    case 4: return [3 /*break*/, 9];
                    case 5: return [4 /*yield*/, this.service.update(model)];
                    case 6:
                        result = _a.sent();
                        if (!(result.status === 1)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.searchAsync()];
                    case 7:
                        _a.sent();
                        this.notification.showSuccess(await this.common.trans('message.update_success'));
                        return [3 /*break*/, 9];
                    case 8:
                        this.notification.showError(await this.common.trans('message.update_error'));
                        _a.label = 9;
                    case 9:
                        if (this.newOrEditModal) {
                            this.newOrEditModal.hide();
                        }
                        this.loader.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.calculateItemNo = function (i) {
        var page = this.searchCache.page;
        var size = this.searchCache.size;
        return page * size + i + 1;
    };
    __decorate([
        core_1.ViewChild('newOrEditComponent')
    ], SearchComponent.prototype, "newOrEditComponent");
    __decorate([
        core_1.ViewChild('newOrEditModal')
    ], SearchComponent.prototype, "newOrEditModal");
    __decorate([
        core_1.ViewChildren(pager_component_1.PagerComponent)
    ], SearchComponent.prototype, "pagers");
    SearchComponent = __decorate([
        core_1.Directive()
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
