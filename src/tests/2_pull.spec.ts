import {browser} from "protractor";
import {SecondPull} from "../page_objects/2_pull.page.po";

fdescribe('Yandex Pull 2', async () => {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.manage().window().maximize();
    })

    fit('Add to match ', async () => {
        let secondPull: SecondPull = new SecondPull();
        await secondPull.OpenBrowser('https://yandex.by');
        await secondPull.ClickOnMarket();
        await secondPull.searchInputField('Note 8');
        await secondPull.addToMatch();
        await secondPull.comparision();
    });

    fit('Delete from match ', async () => {
        let secondPull: SecondPull = new SecondPull();
        await secondPull.OpenBrowser('https://yandex.by');
        await secondPull.ClickOnMarket();
        await secondPull.searchInputField('Note 8');
        await secondPull.addToMatch();
        await secondPull.listClearer();
    });

    fit('Sorting by price', async () => {
        let secondPull: SecondPull = new SecondPull();
        await secondPull.OpenBrowser('https://yandex.by');
        await secondPull.ClickOnMarket();
        await secondPull.electronics();
        await secondPull.priceChecker();
    });
})