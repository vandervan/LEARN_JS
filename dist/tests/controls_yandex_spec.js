"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const market_main_page_po_1 = require("../page_objects/market_main_page.po");
const market_locators_1 = require("../locators/market_locators");
describe('Basic controls: ', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('https://market.yandex.by/catalog/54726/list?local-offers-first=0&deliveryincluded=0&onstock=1');
        yield protractor_1.browser.sleep(15000); /* Здесь слип необходим, чтобы успеть ввести капчу и не сфейлить рабочий тест, а также для
        того, чтобы браузер успел обновить страницу, т.к. в интернет-магазинах каждая кнопка выборки автоматически применяет фильтры и
        отображает новые данные на странице.
         Таков уж Яндекс, иногда работает без капчи, иногда нет */
    }));
    it('Скролл и чекбокс', () => __awaiter(void 0, void 0, void 0, function* () {
        yield market_main_page_po_1.marketMethods.moveMeToElement(market_locators_1.Market_locators.checkBox4Ram);
        yield market_main_page_po_1.marketMethods.clickOn(market_locators_1.Market_locators.checkBox4Ram);
        yield market_main_page_po_1.marketMethods.clickOn(market_locators_1.Market_locators.checkBox4Ram);
    }));
    it('Радио-баттон', () => __awaiter(void 0, void 0, void 0, function* () {
        yield market_main_page_po_1.marketMethods.clickOn(market_locators_1.Market_locators.radioBtn4Stars);
    }));
    it('Вводим цену и потом выводим в консоль класс и значение', () => __awaiter(void 0, void 0, void 0, function* () {
        yield market_main_page_po_1.marketMethods.putText('400', market_locators_1.Market_locators.moneyFromField);
        yield market_main_page_po_1.marketMethods.getTextFrom(market_locators_1.Market_locators.moneyFromField);
    }));
    it('Вводим слово в поиск, нажимаем на значение из дропдауна', () => __awaiter(void 0, void 0, void 0, function* () {
        yield market_main_page_po_1.marketMethods.DropDown('Huawei', market_locators_1.Market_locators.searchField);
    }));
}));
