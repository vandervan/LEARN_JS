"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Market_locators {
    constructor() {
        this.checkBox4Ram = protractor_1.element(protractor_1.by.css('input[type=\'checkbox\'][tabindex=\'0\'][name=\'Оперативная память 4 Гб\']'));
        this.radioBtn4Stars = protractor_1.element(protractor_1.by.css('[type=\'radio\'][tabindex=\'0\'][name=\'Рейтинг магазина\'][id=\'qrfrom_4\']'));
        this.globalSearchText = protractor_1.element(protractor_1.by.css('.suggest2-autocomplete__entered'));
        this.searchButton = protractor_1.element(protractor_1.by.css('[type=\'submit\'][role=\'button\']'));
        this.searchField = protractor_1.element(protractor_1.by.css('#header-search'));
        this.moneyFromField = protractor_1.element(protractor_1.by.css('#glpricefrom'));
        this.dropdownList = protractor_1.element(protractor_1.by.css('.suggest2-rich-item__text'));
        this.firstPhone = protractor_1.element(protractor_1.by.xpath('(//*[contains(@class,\'n-user-lists_type_compare\')])[1]'));
        this.secondPhone = protractor_1.element(protractor_1.by.xpath('(//*[contains(@class,\'n-user-lists_type_compare\')])[2]'));
        this.compareBtn = protractor_1.element(protractor_1.by.css('.button_theme_action'));
        this.content = protractor_1.element(protractor_1.by.css('.n-compare-head__name'));
        this.deleteBtn = protractor_1.element(protractor_1.by.partialButtonText('Удалить список'));
    }
}
exports.Market_locators = Market_locators;
// export const market = {
//     checkBox4Ram: element(by.css('input[type=\'checkbox\'][tabindex=\'0\'][name=\'Оперативная память 4 Гб\']')),
//     radioBtn4Stars: element(by.css('[type=\'radio\'][tabindex=\'0\'][name=\'Рейтинг магазина\'][id=\'qrfrom_4\']')),
//     globalSearchText: element(by.css('.suggest2-autocomplete__entered')),
//     searchButton: element(by.css('[type=\'submit\'][role=\'button\']')),
//     searchField: element(by.css('#header-search')),
//     moneyFromField: element(by.css('#glpricefrom')),
//     dropdownList: element(by.css('.suggest2-rich-item__text')),
//     firstPhone: element(by.xpath('(//*[contains(@class,\'n-user-lists_type_compare\')])[1]')),
//     secondPhone: element(by.xpath('(//*[contains(@class,\'n-user-lists_type_compare\')])[2]')),
//     compareBtn: element(by.css('.button_theme_action')),
//     content: element(by.css('.n-compare-head__name'))
// };
module.exports = Market_locators;
