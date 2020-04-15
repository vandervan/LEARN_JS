import {browser} from "protractor";
import {SecondPullMarket} from "../page_objects/2_pull.market.page.po";

describe('Yandex Pull 2', async () => {

    //let secondPull: SecondPullMarket = new SecondPullMarket(); - как задать конструктор глобально?
    // если раскоментировать эту строку - то появляется ошибка инстанса

    beforeEach(async () => {
        let secondPull: SecondPullMarket = new SecondPullMarket();
        await browser.waitForAngularEnabled(false);
        await browser.manage().window().maximize();
        await secondPull.OpenBrowser('https://yandex.by');
        await secondPull.ClickOnMarket();
    });

    it('Add to match ', async () => {
        let secondPull: SecondPullMarket = new SecondPullMarket();
        await secondPull.searchInputField('Note 8');
        await secondPull.addToMatch();
        await secondPull.comparision();
    });

    it('Delete from match ', async () => {
        let secondPull: SecondPullMarket = new SecondPullMarket();
        await secondPull.searchInputField('Note 8');
        await secondPull.addToMatch();
        await secondPull.listClearer();
    });

    it('Sorting by price', async () => {
        let secondPull: SecondPullMarket = new SecondPullMarket();
        await secondPull.electronics();
        await secondPull.priceChecker();
    });

    it('Sorting by tag', async () => {
        let secondPull: SecondPullMarket = new SecondPullMarket();
        await secondPull.fridges();
        await secondPull.tagChecker();
    });
});
