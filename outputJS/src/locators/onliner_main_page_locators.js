"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const built_1 = require("protractor/built");
exports.Onliner_main_page_locators = {
    checkBox4K: built_1.element(built_1.by.css('#schema-filter > div:nth-child(3) > div:nth-child(13) > div.schema-filter__facet > ul > li:nth-child(6) > label > span.i-checkbox > span')),
    dropdown: built_1.element(built_1.by.css('#schema-filter > div:nth-child(3) > div:nth-child(12) > div.schema-filter__facet > div > div:nth-child(2) > select')),
    dropDownValue: built_1.element(built_1.by.css('#schema-filter > div:nth-child(3) > div:nth-child(12) > div.schema-filter__facet > div > div:nth-child(2) > select > option:nth-child(2)')),
    help: built_1.element(built_1.by.css('#schema-filter > div:nth-child(3) > div:nth-child(14) > div.schema-filter__facet > ul > li:nth-child(3) > label > span.i-checkbox > span'))
};
