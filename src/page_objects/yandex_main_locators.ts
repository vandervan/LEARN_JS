import { by, element } from "protractor";

export const yandex_main_locators = {
    location: element(by.css('span.geolink__reg')),
    moreTab: element(by.css('[role=\'navigation\'] [data-statlog=\'tabs.more\']'))
};