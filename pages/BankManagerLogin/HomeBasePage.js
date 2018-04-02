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
var heading;
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super.call(this) || this;
        _this.titleColor = '//div[@class="box mainhdr"]';
        _this.verifyTitle = '//strong[@class="mainHeading"]';
        _this.homeButton = '//button[@ng-click="home()"]';
        return _this;
    }
    Home.prototype.Get = function () {
        protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login").then(function () {
            console.log("Browser launched");
        });
    };
    Home.prototype.verifyTitleName = function () {
        protractor_1.element(protractor_1.by.xpath(this.verifyTitle)).getText().then(function (text) {
            //console.log(text);
            // let text1  = this.GetText(this.verifyTitle,"Check the given title");
            heading = "XYZ Bank";
            if (text == heading) {
                console.log("Print the title: " + heading);
            }
            else {
                console.log("title not matched: " + heading);
            }
        });
    };
    Home.prototype.homeButtonClick = function () {
        this.myClick(this.homeButton, "click on home button");
    };
    Home.prototype.checkColorOfTitleBg = function () {
        protractor_1.element(protractor_1.by.xpath(this.titleColor)).getCssValue('background-color').then(function (value) {
            console.log("Background color of title Page: " + value);
        });
    };
    return Home;
}(Action_1.Actions));
exports.Home = Home;
