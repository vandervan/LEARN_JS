"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const built_1 = require("protractor/built");
exports.market = {
    checkBox4Ram: built_1.element(built_1.by.css('input[type=\'checkbox\'][tabindex=\'0\'][name=\'Оперативная память 4 Гб\']')),
    radioBtn4Stars: built_1.element(built_1.by.css('[type=\'radio\'][tabindex=\'0\'][name=\'Рейтинг магазина\']')),
    globalSearch: built_1.element(built_1.by.css('#header-search')),
    globalSearchText: built_1.element(built_1.by.css('.suggest2-autocomplete__entered')),
    searchButton: built_1.element(built_1.by.css('[type=\'submit\'][role=\'button\']')),
    iphoneXR: built_1.element(built_1.by.css('[href=\'/product--smartfon-apple-iphone-xr-64gb/175941311?show-uid=15691661646024169092816001&nid=54726&context=search\']')),
    searchField: built_1.element(built_1.by.css('#header-search')),
    moneyFromField: built_1.element(built_1.by.css('#glpricefrom')),
    dropdownList: built_1.element(built_1.by.css('.suggest2-rich-item__text'))
};
