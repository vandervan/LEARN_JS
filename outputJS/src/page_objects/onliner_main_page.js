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
const built_1 = require("protractor/built");
const onliner_main_page_locators_1 = require("../locators/onliner_main_page_locators");
class onliner_main_page {
    static waitForEnabled(element, wait) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDisplayedElm = yield element.isEnabled();
            let i = 0;
            while (!isDisplayedElm && i < wait) {
                built_1.browser.sleep(100);
                isDisplayedElm = yield element.isEnabled();
                i += 100;
            }
        });
    }
    static waitForDisplayed(element, wait) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDisplayedElm = yield element.isDisplayed();
            let j = 0;
            while (!isDisplayedElm && j < wait) {
                built_1.browser.sleep(100);
                isDisplayedElm = yield element.isDisplayed();
                j += 100;
            }
        });
    }
    static scroll(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield built_1.browser.actions().mouseMove(element).perform();
        });
    }
    static clickIt(radioBtn) {
        return __awaiter(this, void 0, void 0, function* () {
            yield built_1.browser.actions().mouseMove(radioBtn).perform();
            yield radioBtn.click();
        });
    }
    static DropDown() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForDisplayed(onliner_main_page_locators_1.Onliner_main_page_locators.dropdown, 5000);
            yield built_1.browser.actions().mouseMove(onliner_main_page_locators_1.Onliner_main_page_locators.dropdown).perform();
            yield onliner_main_page_locators_1.Onliner_main_page_locators.dropdown.click();
            yield onliner_main_page_locators_1.Onliner_main_page_locators.dropDownValue.click();
        });
    }
}
exports.onliner_main_page = onliner_main_page;
