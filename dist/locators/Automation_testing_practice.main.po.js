"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.elements = {
    input: protractor_1.element(protractor_1.by.id('field2')),
    ClickMe: protractor_1.element(protractor_1.by.buttonText('Click Me')),
    footer: protractor_1.element(protractor_1.by.id('age')),
    searchBtn: protractor_1.element(protractor_1.by.css('input.wikipedia-search-button'))
};
