import { browser } from "protractor/built";
import { onliner_main_page } from "../page_objects/onliner_main_page";
import { Onliner_main_page_locators } from "../locators/onliner_main_page_locators";

describe('Basic controls: ', async () => {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://catalog.onliner.by/notebook');
    });

    it('Scroll, Checkbox', async () => {
        await onliner_main_page.scroll(Onliner_main_page_locators.help);
        await onliner_main_page.clickIt(Onliner_main_page_locators.checkBox4K);
        await onliner_main_page.clickIt(Onliner_main_page_locators.checkBox4K);
    });

    it('DropDown', async () => {
        await onliner_main_page.DropDown();
    });
});
