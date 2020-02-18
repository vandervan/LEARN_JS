const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    const driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://www.bbc.com');
        const searchField = await driver.findElement(By.id('orb-search-q'));

            await driver.wait(function () {
                return searchField.isEnabled();
            }, 15000);

        await searchField.sendKeys('coronavirus', Key.RETURN);

        const searchField2 = await driver.findElement(By.id('q'));
            await driver.wait(function () {
                return searchField2.isEnabled();
             }, 15000);

        const newsButton = await driver.findElement(By.css('[href="https://www.bbc.com/news"]'));

            await driver.wait(function () {
                return newsButton.isEnabled();
            }, 15000);
        await newsButton.click();

        await driver.quit();
})();


// implicitWait - Driver - неявные - noSuchElementException
// explicitWait - Selenium Library - явные - timeoutException
//isDisplayed() -- TRUE if isPresent() --true + element is visible
// - Fail; isEnabled() - OK; isPresent() - Fail;

