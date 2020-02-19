function waitForEnabled(element) {
    if (element.isEnabled()) {
        return element.click();
    } else {
        return  waitForEnabled();
    }
}

function waitForDisplayed(element) {
    if (element.isDisplayed()) {
       return element.sendKeys('coronavirus', Key.RETURN);
    } else {
       return waitForDisplayed();
    }
}

const {Builder, By, Key} = require('selenium-webdriver');

(async function BBC_FIREFOX() {
    const driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://www.bbc.com');
        const searchField = await driver.findElement(By.id('orb-search-q'));
        await waitForDisplayed(searchField);
        const newsButton = await driver.findElement(By.css('[href="https://www.bbc.com/news"]'));
        await waitForEnabled(newsButton);
        await driver.quit();
})();
