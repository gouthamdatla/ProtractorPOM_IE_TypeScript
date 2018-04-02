"use strict";
exports.__esModule = true;
var BankManagerPage_1 = require("../pages/BankManagerLogin/BankManagerPage");
var HomeBasePage_1 = require("../pages/BankManagerLogin/HomeBasePage");
var addCustomer_1 = require("../pages/BankManagerLogin/addCustomer");
var protractor_1 = require("protractor");
var OpenAccount_1 = require("../pages/BankManagerLogin/OpenAccount");
var deleteCustomer_1 = require("../pages/BankManagerLogin/deleteCustomer");
var a = require('../Data/testData');
//import { async } from 'q';
var del = new deleteCustomer_1.DelCustomer(a.CustomerData1.Code);
var homePage = new HomeBasePage_1.Home();
var managerClick = new BankManagerPage_1.BankManagerButton();
var openaccount = new OpenAccount_1.OpenAccount(a.CustomerData1.firstname + " " + a.CustomerData1.lastname, a.CustomerData1.currency);
var customerdetails = new addCustomer_1.AddCustomer();
describe("BANK MANAGER LOGIN", function () {
    it("Open the xyz bank url", function () {
        homePage.Get();
        protractor_1.browser.manage().window().maximize();
        homePage.verifyTitleName();
    });
    it("click on bank manager button", function () {
        managerClick.clickBankManagerButton();
    });
    it("Click on Add Customer button", function () {
        customerdetails.clickAddCustomerButton();
    });
    it("Enter the first name", function () {
        customerdetails.enterFirstName(a.CustomerData1.firstname);
    });
    it("Enter the last name", function () {
        customerdetails.enterLastName(a.CustomerData1.lastname);
    });
    it("Enter the post code", function () {
        customerdetails.enterPostcode(a.CustomerData1.Code);
    });
    it("Click on Add Customer Button to generte Customer ID", function () {
        customerdetails.addCustomerButtonClick();
        var alertDialog = protractor_1.browser.switchTo().alert();
        expect(alertDialog.accept).toBeDefined();
        alertDialog.getText().then(function (text) {
            console.log(text);
        });
        alertDialog.accept();
    });
    it("Go to homePage", function () {
        homePage.homeButtonClick();
    });
    it("Click on Bank Manager Button", function () {
        managerClick.clickBankManagerButton();
    });
    it("click on open account button", function () {
        openaccount.clickOpenAccountButton();
    });
    it("select customer name", function () {
        openaccount.selectCustomerName();
    });
    it("select currency ", function () {
        openaccount.selectCurrency();
    });
    it("click on Process button to generate account no", function () {
        openaccount.clickOnProcessButton();
        var alertValidate = protractor_1.browser.switchTo().alert();
        expect(alertValidate.accept).toBeDefined();
        alertValidate.getText().then(function (text) {
            console.log(text);
            alertValidate.accept();
        });
    });
    it("After generating account number go to homePage", function () {
        homePage.homeButtonClick();
    });
    it("Click on Bank Manager Button", function () {
        managerClick.clickBankManagerButton();
    });
    it("Click on Customer Button", function () {
        del.clickOnCustomerButton();
    });
    it("Click on Customer Button", function () {
        del.enterCustomerToBeDeleted(a.CustomerData1.Code);
    });
    it("Click on Customer Button", function () {
        del.selectCustomerNameToBeDeleted();
    });
    it("Go to homePage", function () {
        homePage.homeButtonClick();
    });
});
