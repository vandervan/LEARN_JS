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
const {Builder, By, Key,} = require('selenium-webdriver');

(async function GOOGLE_IE() {
    const driver = await new Builder().forBrowser('internet explorer').build();

        await driver.get('https://google.com');
        const search = await driver.findElement(By.name('q'));
        await waitForDisplayed(search); //.sendKeys('coronavirus', Key.RETURN);
        const link = await driver.findElement(By.partialLinkText('Europa')); //.click();
        await waitForEnabled(link);
        await driver.quit();

})();

