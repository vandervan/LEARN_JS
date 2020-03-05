import { yandex_redirected_locators } from "./yandex_redirected_locators";
import { yandex_main_locators } from "./yandex_main_locators";
import { browser, by, element } from "protractor/built";

export  class Methods {

     static async pressLocationBtn() {
        await yandex_main_locators.location.click();
    }

     static async  waitForEnabled(element, wait) {
        let isDisplayedElm = await element.isEnabled();
        let i = 0;
        while (!isDisplayedElm && i < wait) {
            browser.sleep(100);
            isDisplayedElm = await element.isEnabled();
            i += 100
        }
    }

     static async  waitForDisplayed(element, wait) {
        let isDisplayedElm = await element.isDisplayed();
        let j = 0;
        while (!isDisplayedElm && j < wait) {
            browser.sleep(100);
            isDisplayedElm = await element.isDisplayed();
            j += 100
        }
    }

     static async moveDriverToNewTab() {
         await browser.getAllWindowHandles().then(async function (handles){
             await browser.switchTo().window(handles[handles.length-1])
         });
     }

     static async sendCity(cityName :string) {
        await this.moveDriverToNewTab();
        await yandex_redirected_locators.city.clear();
        await yandex_redirected_locators.city.sendKeys(cityName);
        await browser.sleep(500);
        await yandex_redirected_locators.dropdownFirstElement.click();
    }

    static async sendCityParis(cityName :string) {
        await this.moveDriverToNewTab();
        await yandex_redirected_locators.city.clear();
        await yandex_redirected_locators.city.sendKeys(cityName);
        await browser.sleep(500);
        await yandex_redirected_locators.dropdownFirstElement.click();
    }

     static async getValueFromLondonMore() {
        await yandex_main_locators.moreTab.click();
        const dataFromTab = element.all(by.css('.home-tabs__more .home-tabs__more-top .home-tabs__more-item[role=\'menuitem\'] a.home-link_black_yes'));
        const valuesLondon =  await dataFromTab.getText();
        browser.sleep(3000);
        return valuesLondon;
    }

     static async getDataFromParisMore() {
        await yandex_main_locators.moreTab.click();
        const dataFromMoreTab = element.all(by.css('.home-tabs__more .home-tabs__more-top .home-tabs__more-item[role=\'menuitem\'] a.home-link_black_yes'));
        const valuesParis = await dataFromMoreTab.getText();
        browser.sleep(3000);
        return valuesParis;
    }
}
