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
const yandex_mail_main_locators_1 = require("../locators/yandex_mail_main_locators");
const yandex_mail_main_page_po_1 = require("../page_objects/yandex_mail_main_page.po");
describe('First pull of test cases on Yandex ', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('https://yandex.by/');
    }));
    it('Login on Yandex Mail ', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandex_mail_main_page_po_1.pullMethods.loginFunction(yandex_mail_main_locators_1.yandexHomeLocators.logInBtn);
        yield yandex_mail_main_page_po_1.pullMethods.moveDriverToNewTab();
        yield yandex_mail_main_page_po_1.pullMethods.loginProcess('AutotestUser', 'AutotestUser123');
        yield yandex_mail_main_page_po_1.pullMethods.moveDriverToMainTab();
        yield protractor_1.browser.refresh();
        const currentName = yandex_mail_main_page_po_1.pullMethods.getLoggedName(yandex_mail_main_locators_1.yandexHomeLocators.loggedUsr);
        expect(currentName).toContain('AutotestUser');
    }));
    it('Logout from Yandex Mail', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandex_mail_main_page_po_1.pullMethods.logout();
        protractor_1.browser.refresh();
        const currentName = yandex_mail_main_page_po_1.pullMethods.getLoggedName(yandex_mail_main_locators_1.yandexHomeLocators.loggedOutUsr);
        expect(currentName).toContain('Завести почту');
    }));
    it('Invalid password ', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandex_mail_main_page_po_1.pullMethods.loginFunction(yandex_mail_main_locators_1.yandexHomeLocators.logInBtn);
        yield yandex_mail_main_page_po_1.pullMethods.moveDriverToNewTab();
        yield yandex_mail_main_page_po_1.pullMethods.anotherAccBtn();
        yield yandex_mail_main_page_po_1.pullMethods.loginProcess('AutotestUser', 'NoAutotestUser123');
        const errorMessage = yandex_mail_main_page_po_1.pullMethods.getErrorName(yandex_mail_main_locators_1.yandexHomeLocators.errorMsg);
        expect(errorMessage).toContain('Неверный пароль');
    }));
    it('Invalid login ', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandex_mail_main_page_po_1.pullMethods.loginFunction(yandex_mail_main_locators_1.yandexHomeLocators.logInBtn);
        yield yandex_mail_main_page_po_1.pullMethods.moveDriverToNewTab();
        yield yandex_mail_main_page_po_1.pullMethods.anotherAccBtn();
        yield yandex_mail_main_page_po_1.pullMethods.checkLogin('NoAutotestUser');
        const errorMessage = yandex_mail_main_page_po_1.pullMethods.getErrorName(yandex_mail_main_locators_1.yandexHomeLocators.errorMsg);
        expect(errorMessage).toContain('Такого аккаунта нет');
    }));
    it('Navigation ', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandex_mail_main_page_po_1.pullMethods.urlChecker(yandex_mail_main_locators_1.yandexHomeLocators.video, 'https://yandex.by/portal/');
        yield yandex_mail_main_page_po_1.pullMethods.urlChecker(yandex_mail_main_locators_1.yandexHomeLocators.pictures, 'https://yandex.by/images/');
        yield yandex_mail_main_page_po_1.pullMethods.urlChecker(yandex_mail_main_locators_1.yandexHomeLocators.news, 'https://yandex.by/news/');
        yield yandex_mail_main_page_po_1.pullMethods.urlChecker(yandex_mail_main_locators_1.yandexHomeLocators.maps, 'https://yandex.by/maps/');
        yield yandex_mail_main_page_po_1.pullMethods.urlChecker(yandex_mail_main_locators_1.yandexHomeLocators.market, 'https://market.yandex.by/');
        yield yandex_mail_main_page_po_1.pullMethods.urlChecker(yandex_mail_main_locators_1.yandexHomeLocators.translator, 'https://translate.yandex.by/');
        yield yandex_mail_main_page_po_1.pullMethods.urlChecker(yandex_mail_main_locators_1.yandexHomeLocators.music, 'https://music.yandex.by/home');
        const numberOfTabs = yield protractor_1.browser.getAllWindowHandles();
        expect(numberOfTabs.length).toEqual(11);
    }));
    it('Change language ', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandex_mail_main_page_po_1.pullMethods.languageChanger();
        yield yandex_mail_main_page_po_1.pullMethods.goToMore();
        const currentLanguage = yield yandex_mail_main_page_po_1.pullMethods.languageChecker();
        expect(currentLanguage).toEqual('English');
    }));
}));
