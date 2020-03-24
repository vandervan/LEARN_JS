"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
exports.yandexHomeLocators = {
    logInBtn: protractor_1.element(protractor_1.by.css('a.button > span')),
    loggedUsr: protractor_1.element(protractor_1.by.css('a.home-link.usermenu-link__control.home-link_black_yes > span')),
    userTab: protractor_1.element(protractor_1.by.css('.username.desk-notif-card__user-name')),
    logOutBtn: protractor_1.element(protractor_1.by.css('[href*="logout"]')),
    video: protractor_1.element(protractor_1.by.css('[href*="video"]')),
    pictures: protractor_1.element(protractor_1.by.css('[href*="images"]')),
    news: protractor_1.element(protractor_1.by.css('a.home-link_blue_yes:nth-child(3)')),
    maps: protractor_1.element(protractor_1.by.css('[href="https://yandex.by/maps"]')),
    market: protractor_1.element(protractor_1.by.css('[href*="market"]')),
    translator: protractor_1.element(protractor_1.by.css('[href*="translate"]')),
    music: protractor_1.element(protractor_1.by.css('[href*="music"]')),
    loggedOutUsr: protractor_1.element(protractor_1.by.css('.desk-notif-card__login-mail-promo')),
    errorMsg: protractor_1.element(protractor_1.by.css('.passp-form-field__error')),
    languageBtn: protractor_1.element(protractor_1.by.css('div.headline__bar-item.b-langs')),
    languageMoreBtn: protractor_1.element(protractor_1.by.css('[href*="https://yandex.by/tune/lang"].menu__item')),
    languageDropdown: protractor_1.element(protractor_1.by.css('.select__button')),
    english: protractor_1.element(protractor_1.by.css('option.select__option:nth-child(6)')),
    saveLanguageBtn: protractor_1.element(protractor_1.by.css('.form__save'))
};
//.select__option[value="en"]
