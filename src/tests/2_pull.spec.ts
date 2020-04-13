import {browser} from "protractor";
import {SecondPull} from "../page_objects/2_pull.page.po";

let sp: SecondPull = new SecondPull();

describe('Yandex Pull 2', async () => {

    beforeEach(async () => {
        browser.waitForAngularEnabled(false);
    })

    it('Should add to match ', async () => {
        await sp.OpenBrowser('https://yandex.by');
        await sp.ClickOnMarket();
        await sp.searchInputField('Note 8');
        await sp.addToMatch();
        await sp.comparision();
        expect(sp.comparision).toContain('Note 8')
    });
})