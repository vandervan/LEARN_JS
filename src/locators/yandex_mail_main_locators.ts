import {browser, by, element, ElementFinder} from "protractor";

export class yandexHomeLocators{
     logInBtn = element(by.css('a.button > span'));
     loggedUsrelement(by.css('a.home-link.usermenu-link__control.home-link_black_yes > span')),
     userTab: element(by.css('.username.desk-notif-card__user-name')),
     logOutBtn: element(by.css('[href*="logout"]')),
     video: element(by.css('[href*="video"]')),
     pictures: element(by.css('[href*="images"]')),
     news: element(by.css('a.home-link_blue_yes:nth-child(3)')),
     maps: element(by.css('[href="https://yandex.by/maps"]')),
     market: element(by.css('[href*="market"]')),
     translator: element(by.css('[href*="translate"]')),
     music: element(by.css('[href*="music"]')),
     loggedOutUsr: element(by.css('.desk-notif-card__login-mail-promo')),
     errorMsg: element(by.css('.passp-form-field__error')),
     languageBtn: element(by.css('div.headline__bar-item.b-langs')),
     languageMoreBtn: element(by.css('[href*="https://yandex.by/tune/lang"].menu__item')),
     languageDropdown: element(by.css('.select__button')),
     english: element(by.css('div.popup__content .select__item:nth-child(6)')),
     saveLanguageBtn: element(by.css('.form__save'))

     OpenBrowser(url: string){
          browser.get(url);

     }
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
