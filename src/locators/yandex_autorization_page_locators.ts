import {by, element} from "protractor";

export const yandexAuthorization = {
    logInField: element(by.id('passp-field-login')),
    submitBtn: element(by.css('div.passp-button.passp-sign-in-button')),
    passField: element(by.id('passp-field-passwd')),
};