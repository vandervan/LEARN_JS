"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.yandexAuthorization = {
    logInField: protractor_1.element(protractor_1.by.id('passp-field-login')),
    submitBtn: protractor_1.element(protractor_1.by.css('div.passp-button.passp-sign-in-button')),
    passField: protractor_1.element(protractor_1.by.id('passp-field-passwd')),
    anotherAcc: protractor_1.element(protractor_1.by.css('a.control.link_theme_normal.passp-auth-header-link_visible'))
};
