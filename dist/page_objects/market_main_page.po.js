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
const protractor_1 = require("protractor");
const market_locators_1 = require("../locators/market_locators");
class marketMethods {
    static moveMeToElement(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions().mouseMove(locator).perform();
        });
    }
    static clickOn(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions().mouseMove(locator).click().perform();
        });
    }
    static putText(text, locator) {
        return __awaiter(this, void 0, void 0, function* () {
            locator.sendKeys(text);
        });
    }
    static getTextFrom(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            let targetLocator = locator;
            let getText = yield targetLocator.getAttribute('value');
            let getAttribute = yield targetLocator.getAttribute('class');
            console.log(getText);
            console.log(getAttribute);
        });
    }
    static DropDown(text, locator) {
        return __awaiter(this, void 0, void 0, function* () {
            let timer = 5000;
            let counter = 0;
            locator.sendKeys(text);
            let dropdownBtn = market_locators_1.market.dropdownList;
            while (!dropdownBtn.isPresent() && counter < timer) {
                protractor_1.browser.sleep(1000);
                counter += 1000;
            }
            if (!dropdownBtn.isPresent() && counter === 5000) {
                throw new Error('No such element exception');
            }
            else
                yield protractor_1.browser.actions().mouseMove(dropdownBtn).click().perform();
            protractor_1.browser.sleep(5000);
        });
    }
}
exports.marketMethods = marketMethods;
