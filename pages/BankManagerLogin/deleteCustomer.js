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
var DelCustomer = /** @class */ (function (_super) {
    __extends(DelCustomer, _super);
    function DelCustomer(select) {
        var _this = _super.call(this) || this;
        _this.clickOnCustomer = "//button[@ng-click='showCust()']";
        _this.enterText = "searchCustomer";
        _this.searchDeleteButton = "//td[contains(text(),'" + select + "')]/following-sibling::td[2]/button";
        return _this;
    }
    DelCustomer.prototype.clickOnCustomerButton = function () {
        this.myClick(this.clickOnCustomer, "click on customer button");
    };
    DelCustomer.prototype.enterCustomerToBeDeleted = function (value) {
        this.sendKey(this.enterText, "enter the customer name", value);
    };
    DelCustomer.prototype.selectCustomerNameToBeDeleted = function () {
        this.dropDown(this.searchDeleteButton, "select the customer name");
    };
    return DelCustomer;
}(Action_1.Actions));
exports.DelCustomer = DelCustomer;
