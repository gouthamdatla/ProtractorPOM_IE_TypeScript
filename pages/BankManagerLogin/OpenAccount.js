"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Action_1 = require("../../Actions/Action");
var OpenAccount = /** @class */ (function (_super) {
    __extends(OpenAccount, _super);
    function OpenAccount(select, value1) {
        var _this = _super.call(this) || this;
        _this.clickOpenAccount = "//button[@ng-click='openAccount()']";
        _this.customerName = "//*[contains(text(),'" + select + "')]";
        _this.currency = "//*[contains(text(),'" + value1 + "')]";
        _this.processClick = "//button[@type='submit']";
        return _this;
    }
    OpenAccount.prototype.clickOpenAccountButton = function () {
        this.myClick(this.clickOpenAccount, "click on open account");
    };
    OpenAccount.prototype.selectCustomerName = function () {
        this.dropDown(this.customerName, "select customer name");
    };
    OpenAccount.prototype.selectCurrency = function () {
        this.dropDown(this.currency, "select currency name");
    };
    OpenAccount.prototype.clickOnProcessButton = function () {
        this.myClick(this.processClick, "click on process button");
    };
    return OpenAccount;
}(Action_1.Actions));
exports.OpenAccount = OpenAccount;
