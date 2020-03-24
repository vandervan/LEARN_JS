import {by, element} from "protractor";

export const elements = {
    input: element(by.id('field2')),
    ClickMe: element(by.buttonText('Click Me')),
    footer: element(by.id('age')),
    searchBtn: element(by.css('input.wikipedia-search-button'))
};
