async function waitForEnabled(element, wait) {
    let isDisplayedElm = await element.isEnabled();
    let i = 0;
    while (!isDisplayedElm && i < wait) {
        driver.sleep(100);
        isDisplayedElm = await element.isEnabled();
        i+=100;
    }
}

async function waitForDisplayed(element, wait) {
    let isDisplayedElm = await element.isDisplayed();
    let j = 0;
    while (!isDisplayedElm && j < wait) {
        driver.sleep(100);
        isDisplayedElm = await element.isDisplayed();
        j+=100;
    }
}

(async function BBC_Firefox() {

        const {Builder, By, Key,} = require('selenium-webdriver');
        const driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://bbc.com');
        const search = await driver.findElement(By.id('orb-search-q'));
        await waitForEnabled(search, 10000);
        await search.sendKeys('coronavirus', Key.RETURN);
        const link = await driver.findElement(By.css('[href="https://www.bbc.com/news"]'));
        await waitForDisplayed(link, 10000);
        await link.click();
        await driver.quit();

})();
