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
const yandex_redirected_locators_1 = require("./yandex_redirected_locators");
const yandex_main_locators_1 = require("./yandex_main_locators");
const built_1 = require("protractor/built");
class Methods {
    static saveLocation() {
        return __awaiter(this, void 0, void 0, function* () {
            yield yandex_main_locators_1.yandex_main_locators.location.click();
        });
    }
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
    static sendCity(cityName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield yandex_main_locators_1.yandex_main_locators.location.click();
            yield yandex_redirected_locators_1.yandex_redirected_locators.city.clear();
            yield yandex_redirected_locators_1.yandex_redirected_locators.city.sendKeys(cityName);
            built_1.browser.sleep(3000);
            yield yandex_redirected_locators_1.yandex_redirected_locators.dropdownFirstElement.click();
        });
    }
    static getValueFromLondonMore() {
        return __awaiter(this, void 0, void 0, function* () {
            yield yandex_main_locators_1.yandex_main_locators.moreTab.click();
            const dataFromTab = built_1.element.all(built_1.by.css('".home-tabs__more .home-tabs__more-top .home-tabs__more-item[role=\'menuitem\'] a.home-link_black_yes"'));
            const valuesLondon = yield dataFromTab.getText();
            built_1.browser.sleep(3000);
            return valuesLondon;
        });
    }
    static getDataFromParisMore() {
        return __awaiter(this, void 0, void 0, function* () {
            yield yandex_main_locators_1.yandex_main_locators.moreTab.click();
            const dataFromMoreTab = built_1.element.all(built_1.by.css('.home-tabs__more .home-tabs__more-top .home-tabs__more-item[role=\'menuitem\'] a.home-link_black_yes'));
            const valuesParis = yield dataFromMoreTab.getText();
            built_1.browser.sleep(3000);
            return valuesParis;
        });
    }
}
exports.Methods = Methods;
