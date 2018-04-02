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
var protractor_1 = require("protractor");
var Action_1 = require("../../Actions/Action");
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage(keys1) {
        var _this = _super.call(this) || this;
        _this.HomeButtonXpath = "//button[@ng-click='home()']";
        _this.keys1 = keys1;
        _this.VerifyTitleXpath = "//strong[@class='mainHeading']";
        _this.ClickCustomerLoginButton = "//button[@ng-click='customer()']";
        _this.customerLoginColor = "//button[@ng-click='customer()']";
        return _this;
    }
    HomePage.prototype.Get = function () {
        protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        console.log("Browser Launched");
    };
    HomePage.prototype.verifyTitle = function () {
        this.validateText(this.VerifyTitleXpath, 'verifying main title', this.keys1);
    };
    HomePage.prototype.colorOfCustomerLoginButton = function () {
        var ele = protractor_1.element(protractor_1.by.xpath(this.ClickCustomerLoginButton));
        ele.getCssValue('background-color').then(function (value1) {
            console.log("Color of Customer Login before MouseOver: " + value1);
            expect(value1).toBe("rgba(51, 122, 183, 1)");
        });
    };
    HomePage.prototype.colorssofCustomerLoginButton = function () {
        var ele = protractor_1.element(protractor_1.by.xpath(this.ClickCustomerLoginButton));
        protractor_1.browser.actions().mouseMove(ele).perform();
        ele.getCssValue('background-color').then(function (value) {
            console.log("Color of Customer Login after MouseOver: " + value);
            expect(value).toBe("rgba(40, 96, 144, 1)");
        });
    };
    // this.mouseHoverClick(this.ClickCustomerLoginButton,'Clicking Customer Login Button');
    HomePage.prototype.clickLogin = function () {
        this.myClick(this.ClickCustomerLoginButton, "clicking login button ");
    };
    HomePage.prototype.clickHomeButton = function () {
        this.myClick(this.HomeButtonXpath, 'Clicking Home Button');
    };
    return HomePage;
}(Action_1.Actions));
exports.HomePage = HomePage;
