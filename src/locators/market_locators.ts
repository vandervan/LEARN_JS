import {by, element} from 'protractor';

export const market = {
    checkBox4Ram: element(by.css('input[type=\'checkbox\'][tabindex=\'0\'][name=\'Оперативная память 4 Гб\']')),
    radioBtn4Stars: element(by.css('[type=\'radio\'][tabindex=\'0\'][name=\'Рейтинг магазина\'][id=\'qrfrom_4\']')),
    globalSearchText: element(by.css('.suggest2-autocomplete__entered')),
    searchButton: element(by.css('[type=\'submit\'][role=\'button\']')),
    searchField: element(by.css('#header-search')),
    moneyFromField: element(by.css('#glpricefrom')),
    dropdownList: element(by.css('.suggest2-rich-item__text'))
};


