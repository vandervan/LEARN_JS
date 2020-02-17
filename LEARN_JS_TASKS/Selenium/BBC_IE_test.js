const {Builder, By, Key,} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('internet explorer').build();
    try {
        await driver.get('https://google.com');
        await driver.findElement(By.name('q')).sendKeys('coronavirus', Key.RETURN);
        await driver.sleep(5000);
        await driver.findElement(By.partialLinkText('Health')).click();

    } finally {
        await driver.quit();
    }
})();

