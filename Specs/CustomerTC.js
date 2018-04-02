"use strict";
exports.__esModule = true;
var HomePage_1 = require("../pages/CustomerLogin/HomePage");
var CustomerSelection_1 = require("../pages/CustomerLogin/CustomerSelection");
var AccountsPage_1 = require("../pages/CustomerLogin/AccountsPage");
var protractor_1 = require("protractor");
var TransactionPage_1 = require("../pages/CustomerLogin/TransactionPage");
//import * as data from '../Data/testData';
var a = require('../Data/testData');
//import json= require('../Data/testData')
var openPage = new HomePage_1.HomePage(a.CustomerData.Title);
var customer = new CustomerSelection_1.CustomerSelection(a.CustomerData.name);
var accounts = new AccountsPage_1.AccountsPage(a.CustomerData.name, a.CustomerData.DAmt, a.CustomerData.Msg, a.CustomerData.WAmt, a.CustomerData.Msg1);
var transactions = new TransactionPage_1.Transaction(a.CustomerData.DAmt, a.CustomerData.WAmt);
describe('CUSTOMER LOGIN', function () {
    it('Open the browser', function () {
        protractor_1.browser.manage().window().maximize();
        openPage.Get();
    });
    it('Verify Title', function () {
        openPage.verifyTitle();
    });
    it('Color of Customer Login before MouseOver', function () {
        openPage.colorOfCustomerLoginButton();
    });
    /*
    it('Color of Customer Login after MouseOver', ()=>{
        openPage.colorssofCustomerLoginButton();
    }) */
    it('click customer login button', function () {
        openPage.clickLogin();
    });
    it('Select Customer from Drop Down', function () {
        customer.selectDropDown();
        protractor_1.browser.sleep(500);
    });
    it('Click on Login button', function () {
        customer.clickLoginButton();
    });
    it('verify customer title', function () {
        accounts.verifyTitle();
    });
    it('Click on Deposit Button', function () {
        accounts.depositButton();
    });
    it('Deposit amount', function () {
        accounts.depositAmount();
    });
    it('Click deposit button after entering amount', function () {
        accounts.afterDepositButton();
    });
    it('Verify Deposit Amount Message', function () {
        accounts.verifyAmountDepositMessage();
    });
    it('Amount deposited Value is: ', function () {
        accounts.printAmount();
    });
    it('Click on WithDrawl Button', function () {
        accounts.clickWithDrawlButton();
    });
    it('WithDraw Amount', function () {
        accounts.enterWithDrawAmount();
    });
    it('Click on WithDrawl Button after Entering Amount', function () {
        accounts.clickWithDrawButton();
    });
    it('Verify Withdraw Amount Message', function () {
        accounts.ConfirmWithDraw();
    });
    it('Remaining Balance is ', function () {
        accounts.printRemainingBalance();
    });
    it('Amount Debited in Transactions page', function () {
        accounts.TransactionButtonClick();
        protractor_1.browser.sleep(2000);
    });
    it('Credited Amount is ', function () {
        transactions.printAmountCredited();
    });
    it('Debited Amount is ', function () {
        transactions.printAmountDebited();
    });
    it('Click On Logout Button', function () {
        transactions.LogoutButton();
    });
    it('Click on Home Button', function () {
        openPage.clickHomeButton();
        protractor_1.browser.sleep(1500);
    });
});
