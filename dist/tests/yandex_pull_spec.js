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
fdescribe('First pull of test cases on Yandex ', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.protractor.browser.manage().window().maximize();
        yield protractor_1.browser.driver.controlFlow().reset();
        yield protractor_1.protractor.browser.waitForAngularEnabled(false);
        yield protractor_1.protractor.browser.get('https://yandex.by/');
    }));
    // afterEach(async () => {
    //     await pullMethods.logout();
    //     await browser.refresh();
    //     await pullMethods.moveDriverToPreviousTab();
    // });
    fit('Login on Yandex Mail ', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandex_mail_main_page_po_1.pullMethods.loginFunction(yandex_mail_main_locators_1.yandexHomeLocators.logInBtn);
        yield yandex_mail_main_page_po_1.pullMethods.moveDriverToNewTab();
        yield yandex_mail_main_page_po_1.pullMethods.loginProcess('AutotestUser', 'AutotestUser123');
        yield yandex_mail_main_page_po_1.pullMethods.moveDriverToPreviousTab();
        yield protractor_1.protractor.browser.refresh();
        const currentName = yield yandex_mail_main_page_po_1.pullMethods.getLoggedName(yandex_mail_main_locators_1.yandexHomeLocators.loggedUsr);
        expect(currentName).toContain('AutotestUser');
    }));
    fit('Logout from Yandex Mail', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandex_mail_main_page_po_1.pullMethods.loginFunction(yandex_mail_main_locators_1.yandexHomeLocators.logInBtn);
        yield yandex_mail_main_page_po_1.pullMethods.moveDriverToNewTab();
        yield yandex_mail_main_page_po_1.pullMethods.loginProcess('AutotestUser', 'AutotestUser123');
        yield yandex_mail_main_page_po_1.pullMethods.moveDriverToPreviousTab();
        yield protractor_1.protractor.browser.refresh();
        yield yandex_mail_main_page_po_1.pullMethods.logout();
        const currentName = yield yandex_mail_main_page_po_1.pullMethods.getLoggedName(yandex_mail_main_locators_1.yandexHomeLocators.loggedOutUsr);
        expect(currentName).toContain('Завести почту');
    }));
    fit('Invalid password ', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandex_mail_main_page_po_1.pullMethods.loginFunction(yandex_mail_main_locators_1.yandexHomeLocators.logInBtn);
        yield yandex_mail_main_page_po_1.pullMethods.moveDriverToNewTab();
        yield yandex_mail_main_page_po_1.pullMethods.loginProcess('AutotestUser', 'NoAutotestUser123');
        const errorMessage = yield yandex_mail_main_page_po_1.pullMethods.getErrorName(yandex_mail_main_locators_1.yandexHomeLocators.errorMsg);
        expect(errorMessage).toContain('Неверный пароль');
    }));
    fit('Invalid login ', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandex_mail_main_page_po_1.pullMethods.loginFunction(yandex_mail_main_locators_1.yandexHomeLocators.logInBtn);
        yield yandex_mail_main_page_po_1.pullMethods.moveDriverToNewTab();
        yield yandex_mail_main_page_po_1.pullMethods.checkLogin('NoAutotestUser');
        const errorMessage = yield yandex_mail_main_page_po_1.pullMethods.getErrorName(yandex_mail_main_locators_1.yandexHomeLocators.errorMsg);
        expect(errorMessage).toContain('Такого аккаунта нет');
    }));
    fit('Navigation ', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandex_mail_main_page_po_1.pullMethods.urlChecker(yandex_mail_main_locators_1.yandexHomeLocators.video, 'https://yandex.by/portal/');
        yield yandex_mail_main_page_po_1.pullMethods.urlChecker(yandex_mail_main_locators_1.yandexHomeLocators.pictures, 'https://yandex.by/images/');
        yield yandex_mail_main_page_po_1.pullMethods.urlChecker(yandex_mail_main_locators_1.yandexHomeLocators.news, 'https://yandex.by/news/');
        yield yandex_mail_main_page_po_1.pullMethods.urlChecker(yandex_mail_main_locators_1.yandexHomeLocators.maps, 'https://yandex.by/maps/');
        yield yandex_mail_main_page_po_1.pullMethods.urlChecker(yandex_mail_main_locators_1.yandexHomeLocators.market, 'https://market.yandex.by/');
        yield yandex_mail_main_page_po_1.pullMethods.urlChecker(yandex_mail_main_locators_1.yandexHomeLocators.translator, 'https://translate.yandex.by/');
        yield yandex_mail_main_page_po_1.pullMethods.urlChecker(yandex_mail_main_locators_1.yandexHomeLocators.music, 'https://music.yandex.by/home');
        const numberOfTabs = yield protractor_1.protractor.browser.getAllWindowHandles();
        expect(numberOfTabs.length).toEqual(12);
    }));
    fit('Change language ', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandex_mail_main_page_po_1.pullMethods.languageChanger();
        yield yandex_mail_main_page_po_1.pullMethods.goToMore();
        const currentLanguage = yield yandex_mail_main_page_po_1.pullMethods.languageChecker();
        expect(currentLanguage).toEqual('English');
    }));
}));
