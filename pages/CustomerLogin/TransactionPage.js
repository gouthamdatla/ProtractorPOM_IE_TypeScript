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
var protractor_1 = require("protractor");
var Transaction = /** @class */ (function (_super) {
    __extends(Transaction, _super);
    function Transaction(val1, val) {
        var _this = _super.call(this) || this;
        _this.val = val;
        _this.logoutButtonXpath = "//button[@ng-click='byebye()']";
        _this.CreditedAmountXpath = "//*[contains(text(),'" + val1 + "')]";
        _this.DebitedAmountXpath = "//*[contains(text(),'" + val + "')]";
        return _this;
    }
    Transaction.prototype.LogoutButton = function () {
        this.myClick(this.logoutButtonXpath, 'Clicking Logout Button');
    };
    Transaction.prototype.printAmountCredited = function () {
        // this.GetText(this.CreditedAmountXpath,'Amount Credited is ')
        var ele = protractor_1.element(protractor_1.by.xpath(this.CreditedAmountXpath)).getText().then(function (text) {
            console.log("Amount Credited is: " + text);
        });
    };
    Transaction.prototype.printAmountDebited = function () {
        // this.GetText(this.DebitedAmountXpath,'Amount Debited is ')
        var ele = protractor_1.element(protractor_1.by.xpath(this.DebitedAmountXpath)).getText().then(function (text) {
            console.log("Amount Debited is: " + text);
        });
    };
    return Transaction;
}(Action_1.Actions));
exports.Transaction = Transaction;
