"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
exports.yandexAuthorization = {
    logInField: protractor_1.element(protractor_1.by.id('passp-field-login')),
    submitBtn: protractor_1.element(protractor_1.by.css('div.passp-button.passp-sign-in-button')),
    passField: protractor_1.element(protractor_1.by.id('passp-field-passwd'))
};
