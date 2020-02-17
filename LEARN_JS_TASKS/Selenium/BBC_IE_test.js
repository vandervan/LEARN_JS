const {Builder, By, Key,} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('internet explorer').build();
    try {
        await driver.get('https://www.bbc.co.uk/');
        await driver.sleep(10000);
        await driver.findElement(By.id('#orb-search-form')).sendKeys('coronavirus', Key.RETURN);
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

