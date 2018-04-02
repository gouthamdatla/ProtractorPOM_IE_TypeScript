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
var BankManagerButton = /** @class */ (function (_super) {
    __extends(BankManagerButton, _super);
    function BankManagerButton() {
        var _this = _super.call(this) || this;
        _this.bankManagerClick = "//button[@ng-click='manager()']";
        return _this;
    }
    BankManagerButton.prototype.clickBankManagerButton = function () {
        this.myClick(this.bankManagerClick, '');
    };
    return BankManagerButton;
}(Action_1.Actions));
exports.BankManagerButton = BankManagerButton;
