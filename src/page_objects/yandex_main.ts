
const yandexMain = function () {
    const settingsBtn = element(by.css('.geolink__reg'));
    const changeCity = element(by.id('city__front-input'));
    const moreBtn = element(by.css('div.home-tabs__more'));
    const myUrl = 'https://yandex.by/';
    //const myRedirectedUrl = 'https://yandex.by/tune/geo/';
    this.openPage = async function (string) {
        await browser.waitForAngularEnabled(false);
        await browser.get(string)
    };
    this.cityBtn = async function () {
        await settingsBtn.click()
    };
    this.cityChanger = async function (string) {
        await changeCity.sendKeys(string)
    };
    this.confirmCity = async function () {
        await changeCity.submit()
    }
    this.pressMoreBtn = async function () {
        await moreBtn.click()
    }
};
module.exports = new yandexMain();

