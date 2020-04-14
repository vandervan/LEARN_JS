"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class yandexHomeLocators {
    constructor() {
        this.logInBtn = protractor_1.element(protractor_1.by.css('a.button > span'));
    }
    loggedUsrelement(by, css) { }
}
exports.yandexHomeLocators = yandexHomeLocators;
('a.home-link.usermenu-link__control.home-link_black_yes > span');
userTab: protractor_1.element(protractor_1.by.css('.username.desk-notif-card__user-name')),
    logOutBtn;
protractor_1.element(protractor_1.by.css('[href*="logout"]')),
    video;
protractor_1.element(protractor_1.by.css('[href*="video"]')),
    pictures;
protractor_1.element(protractor_1.by.css('[href*="images"]')),
    news;
protractor_1.element(protractor_1.by.css('a.home-link_blue_yes:nth-child(3)')),
    maps;
protractor_1.element(protractor_1.by.css('[href="https://yandex.by/maps"]')),
    market;
protractor_1.element(protractor_1.by.css('[href*="market"]')),
    translator;
protractor_1.element(protractor_1.by.css('[href*="translate"]')),
    music;
protractor_1.element(protractor_1.by.css('[href*="music"]')),
    loggedOutUsr;
protractor_1.element(protractor_1.by.css('.desk-notif-card__login-mail-promo')),
    errorMsg;
protractor_1.element(protractor_1.by.css('.passp-form-field__error')),
    languageBtn;
protractor_1.element(protractor_1.by.css('div.headline__bar-item.b-langs')),
    languageMoreBtn;
protractor_1.element(protractor_1.by.css('[href*="https://yandex.by/tune/lang"].menu__item')),
    languageDropdown;
protractor_1.element(protractor_1.by.css('.select__button')),
    english;
protractor_1.element(protractor_1.by.css('div.popup__content .select__item:nth-child(6)')),
    saveLanguageBtn;
protractor_1.element(protractor_1.by.css('.form__save'));
OpenBrowser(url, string);
{
    protractor_1.browser.get(url);
}
// export const yandexHomeLocators = {
//     logInBtn: element(by.css('a.button > span')),
//     loggedUsr: element(by.css('a.home-link.usermenu-link__control.home-link_black_yes > span')),
//     userTab: element(by.css('.username.desk-notif-card__user-name')),
//     logOutBtn: element(by.css('[href*="logout"]')),
//     video: element(by.css('[href*="video"]')),
//     pictures: element(by.css('[href*="images"]')),
//     news: element(by.css('a.home-link_blue_yes:nth-child(3)')),
//     maps: element(by.css('[href="https://yandex.by/maps"]')),
//     market: element(by.css('[href*="market"]')),
//     translator: element(by.css('[href*="translate"]')),
//     music: element(by.css('[href*="music"]')),
//     loggedOutUsr: element(by.css('.desk-notif-card__login-mail-promo')),
//     errorMsg: element(by.css('.passp-form-field__error')),
//     languageBtn: element(by.css('div.headline__bar-item.b-langs')),
//     languageMoreBtn: element(by.css('[href*="https://yandex.by/tune/lang"].menu__item')),
//     languageDropdown: element(by.css('.select__button')),
//     english: element(by.css('div.popup__content .select__item:nth-child(6)')),
//     saveLanguageBtn: element(by.css('.form__save'))
// };
