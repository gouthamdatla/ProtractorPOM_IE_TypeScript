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
var AccountsPage = /** @class */ (function (_super) {
    __extends(AccountsPage, _super);
    function AccountsPage(keys1, name, amountMessage, amountWithDraw, name1) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.name1 = name1;
        _this.keys1 = keys1;
        _this.amountWithDraw = amountWithDraw;
        _this.amountMessage = amountMessage;
        _this.customerTitleXpath = "//span[contains(text(),'Harry')]";
        _this.depositButtonXpath = "//button[@ng-class='btnClass2']";
        _this.addAmount = "//input[@type='number']";
        _this.verifyAmount = "//span[@ng-show='message']";
        _this.AfterDepositButtonXpath = "//button[@type='submit']";
        _this.amountDepositedXpath = "//*[contains(text(),'" + name + "')]";
        _this.withDrawlButton = "//button[@ng-class='btnClass3']";
        _this.enterAmountToWithDraw = "//input[@type='number']";
        _this.afterAmountWithDrawlButton = "//button[@type='submit']";
        _this.withDrawConfirmation = "//span[@ng-show='message']";
        _this.transactionButtonXpath = "//button[@ng-class='btnClass1']";
        _this.verifyWithDrawAmount = "//*[contains(text(),'" + name1 + "')]";
        return _this;
    }
    AccountsPage.prototype.verifyTitle = function () {
        this.validateText(this.customerTitleXpath, 'Verifying Title', this.keys1);
    };
    AccountsPage.prototype.depositButton = function () {
        this.myClick(this.depositButtonXpath, 'Clicking Deposit Button');
        protractor_1.browser.sleep(2000);
    };
    AccountsPage.prototype.mouseMoveToAmount = function () {
        var ele = protractor_1.element(protractor_1.by.xpath(this.addAmount));
        protractor_1.browser.actions().mouseMove(ele).perform();
    };
    AccountsPage.prototype.depositAmount = function () {
        this.mySendKeys(this.addAmount, 'Depositing Amount', this.name);
    };
    AccountsPage.prototype.afterDepositButton = function () {
        this.myClick(this.AfterDepositButtonXpath, 'Click deposit button after depositing amount');
    };
    AccountsPage.prototype.verifyAmountDepositMessage = function () {
        this.validateText(this.verifyAmount, 'Verify Amount', this.amountMessage);
        protractor_1.element(protractor_1.by.xpath(this.verifyAmount)).getCssValue('color').then(function (value1) {
            console.log("Deposit successful text color is: " + value1);
        });
    };
    AccountsPage.prototype.printAmount = function () {
        this.GetText(this.amountDepositedXpath, 'Amount Deposited is ');
        /* let ele=element(by.xpath(this.amountDepositedXpath)).getText().then((text)=>{
             console.log("Helllooooo"+text)
         })*/
    };
    AccountsPage.prototype.clickWithDrawlButton = function () {
        this.myClick(this.withDrawlButton, 'Clicked WithDrawl Button ');
    };
    AccountsPage.prototype.enterWithDrawAmount = function () {
        this.mySendKeys(this.enterAmountToWithDraw, 'Entering Amount ', this.amountWithDraw);
    };
    AccountsPage.prototype.clickWithDrawButton = function () {
        this.myClick(this.afterAmountWithDrawlButton, 'Clicked withDraw Button');
    };
    AccountsPage.prototype.ConfirmWithDraw = function () {
        this.validateText(this.withDrawConfirmation, 'confirm withDraw', this.name1);
        protractor_1.element(protractor_1.by.xpath(this.withDrawConfirmation)).getCssValue('color').then(function (value) {
            console.log("Withdrawl successful text color is: " + value);
        });
    };
    AccountsPage.prototype.printRemainingBalance = function () {
        this.GetText(this.verifyWithDrawAmount, 'Remaining Balance is ');
        protractor_1.browser.sleep(1000);
    };
    AccountsPage.prototype.TransactionButtonClick = function () {
        this.myClick(this.transactionButtonXpath, 'Clicking Transaction Button ');
        protractor_1.browser.sleep(2000);
    };
    return AccountsPage;
}(Action_1.Actions));
exports.AccountsPage = AccountsPage;
