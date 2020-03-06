import { browser } from "protractor/built";
import { onlinerMethods } from "../page_objects/onlinerMethods";
import { Helpers } from "../page_objects/Helpers";


describe('Basic controls: ', async () => {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://catalog.onliner.by/notebook');
        await browser.sleep(5000);
    });

    it('Scroll, Checkbox', async () => {
        await onlinerMethods.scroll(Helpers.help);
        await browser.sleep(1000);
        await onlinerMethods.clickIt(Helpers.checkBox4K);
        await browser.sleep(2000);
        await onlinerMethods.clickIt(Helpers.checkBox4K);
    });

    it('DropDown', async () => {
        await onlinerMethods.DropDown();
    });

});
