import {browser} from "protractor";
import {yandexHomeLocators} from "../locators/yandex_mail_main_locators";
import {pullMethods} from "../page_objects/yandex_mail_main_page.po";

describe('First pull of test cases on Yandex ', async () => {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
});

    it('Login on Yandex Mail ', async () =>  {
        await pullMethods.loginFunction(yandexHomeLocators.logInBtn);
        await pullMethods.moveDriverToNewTab();
        await pullMethods.loginProcess('AutotestUser', 'AutotestUser123');
        await pullMethods.moveDriverToMainTab();
        browser.refresh();
        const currentName = pullMethods.getLoggedName(yandexHomeLocators.loggedUsr);
        expect(currentName).toContain('AutotestUser');
    });

    it('Logout from Yandex Mail', async () => {
        await pullMethods.logout();
        browser.refresh();
        const currentName = pullMethods.getLoggedName(yandexHomeLocators.loggedOutUsr);
        expect(currentName).toContain('Завести почту');
    });

    it('Invalid password ', async () => {
        await pullMethods.loginFunction(yandexHomeLocators.logInBtn);
        await pullMethods.moveDriverToNewTab();
        await pullMethods.anotherAccBtn();
        await pullMethods.loginProcess('AutotestUser', 'NoAutotestUser123');
        const errorMessage = pullMethods.getErrorName(yandexHomeLocators.errorMsg);
        expect(errorMessage).toContain('Неверный пароль')
    });

    it('Invalid login ', async () => {
        await pullMethods.loginFunction(yandexHomeLocators.logInBtn);
        await pullMethods.moveDriverToNewTab();
        await pullMethods.anotherAccBtn();
        await pullMethods.checkLogin('NoAutotestUser');
        const errorMessage = pullMethods.getErrorName(yandexHomeLocators.errorMsg);
        expect(errorMessage).toContain('Такого аккаунта нет')
    });

    it('Navigation ', async () => {
        await pullMethods.urlChecker(yandexHomeLocators.video, 'https://yandex.by/portal/');
        await pullMethods.urlChecker(yandexHomeLocators.pictures, 'https://yandex.by/images/');
        await pullMethods.urlChecker(yandexHomeLocators.news, 'https://yandex.by/news/');
        await pullMethods.urlChecker(yandexHomeLocators.maps, 'https://yandex.by/maps/');
        await pullMethods.urlChecker(yandexHomeLocators.market, 'https://market.yandex.by/');
        await pullMethods.urlChecker(yandexHomeLocators.translator, 'https://translate.yandex.by/');
        await pullMethods.urlChecker(yandexHomeLocators.music, 'https://music.yandex.by/home');
        const numberOfTabs = await browser.getAllWindowHandles();
        expect(numberOfTabs.length).toEqual(11);
    });

    it('Change language ', async () => {
        await pullMethods.languageChanger();
        await pullMethods.goToMore();
        const currentLanguage = await pullMethods.languageChecker();
        expect(currentLanguage).toEqual('English');
    });
});
