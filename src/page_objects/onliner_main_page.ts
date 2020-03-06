import { browser, by, element } from "protractor/built";
import { Onliner_main_page_locators } from "../locators/onliner_main_page_locators";

export class onliner_main_page {

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

    public static async scroll (element) {
        await browser.actions().mouseMove(element).perform();
    }

    public static async clickIt (radioBtn) {
        await browser.actions().mouseMove(radioBtn).perform();
        await radioBtn.click();
    }

    public static async DropDown () {
        await this.waitForDisplayed(Onliner_main_page_locators.dropdown, 5000);
        await browser.actions().mouseMove(Onliner_main_page_locators.dropdown).perform();
        await Onliner_main_page_locators.dropdown.click();
        await Onliner_main_page_locators.dropDownValue.click();
    }
}
