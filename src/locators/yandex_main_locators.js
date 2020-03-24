"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
exports.yandex_main_locators = {
    location: protractor_1.element(protractor_1.by.css('span.geolink__reg')),
    moreTab: protractor_1.element(protractor_1.by.css('[role=\'navigation\'] [data-statlog=\'tabs.more\']'))
};
