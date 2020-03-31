import {browser,by, ExpectedConditions} from "protractor";
import {yandexHomeLocators} from "../locators/yandex_mail_main_locators";
import {market} from "../locators/market_locators";
import {pullMethods} from "../page_objects/yandex_mail_main_page.po";

describe('Second pull', async () =>{
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by');
    });
    it('Add to match', async () => {
        await yandexHomeLocators.market.click();
        await pullMethods.moveDriverToNewTab();
        await market.searchField.sendKeys('Note 8');
        await market.searchButton.click();
        browser.actions().mouseMove(market.firstPhone).click();
        browser.actions().mouseMove(market.secondPhone).click();
        await market.compareBtn.click();
        expect(market.content).toContain('Note 8');
    });
});