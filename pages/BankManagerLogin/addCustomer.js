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
var AddCustomer = /** @class */ (function (_super) {
    __extends(AddCustomer, _super);
    function AddCustomer() {
        var _this = _super.call(this) || this;
        _this.clickAddCustomer = "//button[@ng-click='addCust()']";
        _this.firstName = "fName";
        _this.lastName = "lName";
        _this.postcode = "postCd";
        _this.generateCustomerID = "//button[@type='submit']";
        return _this;
    }
    AddCustomer.prototype.clickAddCustomerButton = function () {
        this.myClick(this.clickAddCustomer, "Click on Add customer");
    };
    AddCustomer.prototype.enterFirstName = function (keys) {
        this.sendKey(this.firstName, "enter first name", keys);
    };
    AddCustomer.prototype.enterLastName = function (keys) {
        this.sendKey(this.lastName, "enter last name", keys);
    };
    AddCustomer.prototype.enterPostcode = function (keys) {
        this.sendKey(this.postcode, "enter post code", keys);
    };
    AddCustomer.prototype.addCustomerButtonClick = function () {
        this.myClick(this.generateCustomerID, "After clicking add customer it generates customer ID");
    };
    return AddCustomer;
}(Action_1.Actions));
exports.AddCustomer = AddCustomer;
