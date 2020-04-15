import {browser} from "protractor";
import {yandexAuthorization} from "../locators/yandex_autorization_page_locators";
import {yandexHomeLocators} from "../locators/yandex_mail_main_locators";

export class pullMethods {
     static async loginFunction(locator) {
        await browser.actions().mouseMove(locator).click().perform();
    }

     static async loginProcess(username, password) {
        await yandexAuthorization.logInField.sendKeys(username);
        await yandexAuthorization.submitBtn.click();
        await yandexAuthorization.passField.sendKeys(password);
        await yandexAuthorization.submitBtn.click();
    }

     static async moveDriverToNewTab() {
        await browser.getAllWindowHandles().then(async function (handles) {
            await browser.switchTo().window(handles[handles.length - 1]);
        });
    }

     static async moveDriverToPreviousTab() {
        await browser.getAllWindowHandles().then(async function (handles) {
            await browser.switchTo().window(handles[handles.length - 2]);
        });
    }

     static async getLoggedName(locator) {
        return locator.getText();
    }

     static async logout() {
        await yandexHomeLocators.userTab.click();
        await yandexHomeLocators.logOutBtn.click();
    }

     static async getErrorName(locator) {
        return locator.getText();
    }

     static async checkLogin(username) {
        await yandexAuthorization.logInField.sendKeys(username);
        await yandexAuthorization.submitBtn.click();
    }

     static async moveDriverToMainTab() {
        await browser.getAllWindowHandles().then(async function (handles) {
            await browser.switchTo().window(handles[0]);
        });
    }

     static async urlChecker(locator, string) {
        await locator.click();
        await this.moveDriverToNewTab();
        let currentUrl = await browser.getCurrentUrl();
        if (currentUrl.startsWith(string)) {
            await this.moveDriverToMainTab();
        }
        else {
            throw new Error('Wrong page');
        }
    }

     static async languageChanger() {
        await yandexHomeLocators.languageBtn.click();
        await yandexHomeLocators.languageMoreBtn.click();
        await yandexHomeLocators.languageDropdown.click();
        await browser.actions().mouseMove(yandexHomeLocators.english).perform();
        await browser.wait(yandexHomeLocators.english.isDisplayed, 5000);
        await yandexHomeLocators.english.click();
        await yandexHomeLocators.saveLanguageBtn.click();
    }

     static async goToMore() {
        await yandexHomeLocators.languageBtn.click();
        await yandexHomeLocators.languageMoreBtn.click();
    }

     static async languageChecker() {
        return yandexHomeLocators.languageDropdown.getText();
    }

     static async anotherAccBtn () {
        await yandexAuthorization.anotherAcc.click();
    }
}
