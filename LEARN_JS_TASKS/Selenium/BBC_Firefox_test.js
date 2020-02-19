(async function BBC_FIREFOX() {
    const {Builder, By, Key} = require('selenium-webdriver');
    const driver = new Builder().forBrowser('firefox').build();
        await driver.get('https://www.bbc.com');
        await driver.wait(function waitForEnabled() {
            return driver.findElement(By.id('orb-search-q')).isEnabled();
        }, 10000);
        await driver.findElement(By.id('orb-search-q')).sendKeys('coronavirus', Key.RETURN);
        await driver.wait(function waitForDisplayed() {
            return driver.findElement(By.css('[href="https://www.bbc.com/news"]')).isDisplayed();
        }, 10000);
        await driver.findElement(By.css('[href="https://www.bbc.com/news"]')).click();
        await driver.quit();
})();
