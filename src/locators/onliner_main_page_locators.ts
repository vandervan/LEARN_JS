import { element, by } from "protractor/built";

export const Onliner_main_page_locators = {
    checkBox4K: element(by.css('#schema-filter > div:nth-child(3) > div:nth-child(13) > div.schema-filter__facet > ul > li:nth-child(6) > label > span.i-checkbox > span')),
    dropdown: element(by.css('#schema-filter > div:nth-child(3) > div:nth-child(12) > div.schema-filter__facet > div > div:nth-child(2) > select')),
    dropDownValue: element(by.css('#schema-filter > div:nth-child(3) > div:nth-child(12) > div.schema-filter__facet > div > div:nth-child(2) > select > option:nth-child(2)')),
    help: element(by.css('#schema-filter > div:nth-child(3) > div:nth-child(14) > div.schema-filter__facet > ul > li:nth-child(3) > label > span.i-checkbox > span'))
};
