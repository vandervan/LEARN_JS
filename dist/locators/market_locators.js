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
    dropdownList: protractor_1.element(protractor_1.by.css('.suggest2-rich-item__text')),
    firstPhone: protractor_1.element(protractor_1.by.css('div.hint_js_inited')),
    secondPhone: protractor_1.element(protractor_1.by.css('a._popup2-destructor')),
    compareBtn: protractor_1.element(protractor_1.by.css('.button_theme_action')),
    content: protractor_1.element(protractor_1.by.partialLinkText('Note 8'))
};
