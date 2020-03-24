"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Page Object - проба пера
const built_1 = require("protractor/built");
const bbcMainPage = function () {
    const search = built_1.element(built_1.by.id('orb-search-q'));
    const submitBtn = built_1.element(built_1.by.id('orb-search-button'));
    const newsBtn = built_1.element(built_1.by.css('[href="https://www.bbc.com/news"]'));
    const myUrl = 'https://www.bbc.com/';
    this.openPage = function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield built_1.browser.waitForAngularEnabled(false);
            yield built_1.browser.get(myUrl);
        });
    };
    this.inputField = function (yourString) {
        return __awaiter(this, void 0, void 0, function* () {
            yield search.sendKeys(yourString);
        });
    };
    this.submitInputField = function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield submitBtn.click();
        });
    };
    this.pressNews = function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield newsBtn.click();
        });
    };
};
module.exports = new bbcMainPage();
