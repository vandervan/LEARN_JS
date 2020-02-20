async function isEnabled(element, wait) {
    let isDisplayedElm = await element.isEnabled();
    let i = 0;
    while (!isDisplayedElm && i < wait) {
        await driver.sleep(100);
        isDisplayedElm = await element.isEnabled();
        i+=100;
    }
}

async function isDisplayed(element, wait) {
    let isDisplayedElm = await element.isDisplayed();
    let j = 0;
    while (!isDisplayedElm && j < wait) {
        await driver.sleep(100);
        isDisplayedElm = await element.isDisplayed();
        j+=100;
    }
}

(async function GOOGLE_IE() {
    const {Builder, By, Key,} = require('selenium-webdriver');
    const driver = await new Builder().forBrowser('internet explorer').build();
    await driver.get('https://google.com');
    const search = await driver.findElement(By.name('q'));
    await isEnabled(search, 10000);
    await search.sendKeys('coronavirus', Key.RETURN);
    const link = await driver.findElement(By.partialLinkText('who'));
    await isDisplayed(link, 10000);
    await link.click();
    await driver.quit();

})();
