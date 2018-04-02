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
var CustomerSelection = /** @class */ (function (_super) {
    __extends(CustomerSelection, _super);
    function CustomerSelection(name) {
        var _this = _super.call(this) || this;
        _this.CustomerSelectionXpath = "//*[contains(text(),'" + name + "')]";
        _this.LoginButtonXpath = "//button[@type='submit']";
        return _this;
    }
    CustomerSelection.prototype.selectDropDown = function () {
        this.dropDown(this.CustomerSelectionXpath, 'Selecting Drop Down');
    };
    CustomerSelection.prototype.clickLoginButton = function () {
        this.myClick(this.LoginButtonXpath, 'Clicked Login Button');
    };
    return CustomerSelection;
}(Action_1.Actions));
exports.CustomerSelection = CustomerSelection;
