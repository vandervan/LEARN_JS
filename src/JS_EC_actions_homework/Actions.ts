import {browser, ExpectedConditions} from "protractor";
import {elements} from "../locators/Automation_testing_practice.main.po";

describe('Actions', async () => {
   beforeEach(async () => {
       await browser.waitForAngularEnabled(false);
       await browser.get('http://testautomationpractice.blogspot.com/')
   });

    it('Scroll', async () => {
        await browser.actions().
            mouseMove(elements.footer).
            perform();
    });

    it('Input', async () => {
        await browser.actions().
        mouseMove(elements.input).
        click().
        sendKeys('123').
        perform();
        expect(browser.wait
        (ExpectedConditions.textToBePresentInElementValue(elements.input, '123'), 3000)).
        toBeTruthy();
    });

    it('Click & Input', async () => {
        await browser.executeScript("document.getElementById('Wikipedia1_wikipedia-search-input').value='mama'");
        await browser.executeScript("arguments[0].click()", elements.searchBtn);
    });

    it('Click', async () => {
        await browser.actions().
            mouseMove(elements.ClickMe).
            click().
            perform();
        expect(browser.wait(ExpectedConditions.alertIsPresent(), 3000)).
        toBeTruthy();
    });
});
