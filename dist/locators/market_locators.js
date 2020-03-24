"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.market = {
    checkBox4Ram: protractor_1.element(protractor_1.by.css('input[type=\'checkbox\'][tabindex=\'0\'][name=\'Оперативная память 4 Гб\']')),
    radioBtn4Stars: protractor_1.element(protractor_1.by.css('[type=\'radio\'][tabindex=\'0\'][name=\'Рейтинг магазина\'][id=\'qrfrom_4\']')),
    globalSearchText: protractor_1.element(protractor_1.by.css('.suggest2-autocomplete__entered')),
    searchButton: protractor_1.element(protractor_1.by.css('[type=\'submit\'][role=\'button\']')),
    searchField: protractor_1.element(protractor_1.by.css('#header-search')),
    moneyFromField: protractor_1.element(protractor_1.by.css('#glpricefrom')),
    dropdownList: protractor_1.element(protractor_1.by.css('.suggest2-rich-item__text'))
};
