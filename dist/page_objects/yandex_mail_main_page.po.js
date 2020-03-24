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
const yandex_autorization_page_locators_1 = require("../locators/yandex_autorization_page_locators");
const yandex_mail_main_locators_1 = require("../locators/yandex_mail_main_locators");
class pullMethods {
    static loginFunction(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions().mouseMove(locator).click().perform();
        });
    }
    static loginProcess(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield yandex_autorization_page_locators_1.yandexAuthorization.logInField.sendKeys(username);
            yield yandex_autorization_page_locators_1.yandexAuthorization.submitBtn.click();
            yield yandex_autorization_page_locators_1.yandexAuthorization.passField.sendKeys(password);
            yield yandex_autorization_page_locators_1.yandexAuthorization.submitBtn.click();
        });
    }
    static moveDriverToNewTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.getAllWindowHandles().then(function (handles) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield protractor_1.browser.switchTo().window(handles[handles.length - 1]);
                });
            });
        });
    }
    static moveDriverToPreviousTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.getAllWindowHandles().then(function (handles) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield protractor_1.browser.switchTo().window(handles[handles.length - 2]);
                });
            });
        });
    }
    static getLoggedName(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            return locator.getText();
        });
    }
    static logout() {
        return __awaiter(this, void 0, void 0, function* () {
            yield yandex_mail_main_locators_1.yandexHomeLocators.userTab.click();
            yield yandex_mail_main_locators_1.yandexHomeLocators.logOutBtn.click();
        });
    }
    static getErrorName(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            return locator.getText();
        });
    }
    static checkLogin(username) {
        return __awaiter(this, void 0, void 0, function* () {
            yield yandex_autorization_page_locators_1.yandexAuthorization.logInField.sendKeys(username);
            yield yandex_autorization_page_locators_1.yandexAuthorization.submitBtn.click();
        });
    }
    static moveDriverToMainTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.getAllWindowHandles().then(function (handles) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield protractor_1.browser.switchTo().window(handles[0]);
                });
            });
        });
    }
    static urlChecker(locator, string) {
        return __awaiter(this, void 0, void 0, function* () {
            yield locator.click();
            yield this.moveDriverToNewTab();
            let currentUrl = yield protractor_1.browser.getCurrentUrl();
            if (currentUrl.startsWith(string)) {
                yield this.moveDriverToMainTab();
            }
            else {
                throw new Error('Wrong page');
            }
        });
    }
    static languageChanger() {
        return __awaiter(this, void 0, void 0, function* () {
            yield yandex_mail_main_locators_1.yandexHomeLocators.languageBtn.click();
            yield yandex_mail_main_locators_1.yandexHomeLocators.languageMoreBtn.click();
            yield yandex_mail_main_locators_1.yandexHomeLocators.languageDropdown.click();
            yield protractor_1.browser.actions().mouseMove(yandex_mail_main_locators_1.yandexHomeLocators.english).perform();
            yield protractor_1.browser.wait(yandex_mail_main_locators_1.yandexHomeLocators.english.isDisplayed, 5000);
            yield yandex_mail_main_locators_1.yandexHomeLocators.english.click();
            yield yandex_mail_main_locators_1.yandexHomeLocators.saveLanguageBtn.click();
        });
    }
    static goToMore() {
        return __awaiter(this, void 0, void 0, function* () {
            yield yandex_mail_main_locators_1.yandexHomeLocators.languageBtn.click();
            yield yandex_mail_main_locators_1.yandexHomeLocators.languageMoreBtn.click();
        });
    }
    static languageChecker() {
        return __awaiter(this, void 0, void 0, function* () {
            return yandex_mail_main_locators_1.yandexHomeLocators.languageDropdown.getText();
        });
    }
    static anotherAccBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield yandex_autorization_page_locators_1.yandexAuthorization.anotherAcc.click();
        });
    }
}
exports.pullMethods = pullMethods;
