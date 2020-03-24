"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.yandex_redirected_locators = {
    city: protractor_1.element(protractor_1.by.xpath("//*[@id=\"city__front-input\"]")),
    dropdownFirstElement: protractor_1.element(protractor_1.by.xpath("//li[1]"))
};
