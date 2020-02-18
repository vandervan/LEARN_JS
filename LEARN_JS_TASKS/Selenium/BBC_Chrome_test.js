const {Builder, By, Key,} = require('selenium-webdriver');

(async function example() {
    const driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.bbc.com');
        await driver.findElement(By.css('#orb-search-q')).sendKeys('coronavirus', Key.RETURN);
        const isDisplay = await driver.findElement(By.id('se-searchbox-input-field')).isDisplayed();
        console.log(isDisplay);
        const isEnable = await driver.findElement(By.id('se-searchbox-input-field')).isEnabled();
        console.log(isEnable);
        await driver.findElement(By.css('[href="https://www.bbc.com/news"]')).click();
        await driver.sleep(5000);

    } finally {
        await driver.quit();
    }
})();

