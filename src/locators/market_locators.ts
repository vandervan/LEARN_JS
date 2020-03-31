import {by, element} from 'protractor';

export const market = {
    checkBox4Ram: element(by.css('input[type=\'checkbox\'][tabindex=\'0\'][name=\'Оперативная память 4 Гб\']')),
    radioBtn4Stars: element(by.css('[type=\'radio\'][tabindex=\'0\'][name=\'Рейтинг магазина\'][id=\'qrfrom_4\']')),
    globalSearchText: element(by.css('.suggest2-autocomplete__entered')),
    searchButton: element(by.css('[type=\'submit\'][role=\'button\']')),
    searchField: element(by.css('#header-search')),
    moneyFromField: element(by.css('#glpricefrom')),
    dropdownList: element(by.css('.suggest2-rich-item__text')),
    firstPhone: element(by.css('div.hint_js_inited')),
    secondPhone: element(by.css('a._popup2-destructor')),
    compareBtn: element(by.css('.button_theme_action')),
    content: element(by.partialLinkText('Note 8'))
};


