import { element, by } from "protractor";

export const yandex_redirected_locators = {
    city: element(by.css("#city__front-input")),
    dropdownFirstElement: element(by.xpath("//li[1]"))
};