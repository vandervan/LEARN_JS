import {browser} from 'protractor';
import {market} from '../locators/market_locators';

export class marketMethods {

    public static async moveMeToElement (locator) {
        await browser.actions().mouseMove(locator).perform();
    }

    public static async clickOn (locator) {
        await browser.actions().mouseMove(locator).click().perform();
    }

    public static async putText (text, locator) {
        locator.sendKeys(text);
    }

    public static async getTextFrom (locator) {
        let targetLocator = locator;
        let getText = await targetLocator.getAttribute('value');
        let getAttribute = await targetLocator.getAttribute('class');
        console.log(getText);
        console.log(getAttribute);
    }

    public static async DropDown (text, locator) {
        let timer = 5000;
        let counter = 0;
        locator.sendKeys(text);
        let dropdownBtn = market.dropdownList;
        while (!dropdownBtn.isPresent() && counter<timer) {
            browser.sleep(1000);
            counter +=1000;
        } if (!dropdownBtn.isPresent() && counter === 5000) {
            throw new Error('No such element exception');
        } else
            await browser.actions().mouseMove(dropdownBtn).click().perform();
        browser.sleep(5000);
    }
}
