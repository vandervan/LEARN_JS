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
const built_1 = require("protractor/built");
const marketMethods_1 = require("../page_objects/marketMethods");
const market_1 = require("../page_objects/market");
describe('Basic controls: ', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield built_1.browser.waitForAngularEnabled(false);
        yield built_1.browser.get('https://market.yandex.by/catalog/54726/list?local-offers-first=0&deliveryincluded=0&onstock=1');
        built_1.browser.sleep(25000);
    }));
    it('Scroll + (un)check', () => __awaiter(void 0, void 0, void 0, function* () {
        yield marketMethods_1.YandexMarketMethods.moveMeToElement(market_1.market.checkBox4Ram);
        yield marketMethods_1.YandexMarketMethods.clickOn(market_1.market.checkBox4Ram);
        yield marketMethods_1.YandexMarketMethods.clickOn(market_1.market.checkBox4Ram);
    }));
    it('Click on Radio btn', () => __awaiter(void 0, void 0, void 0, function* () {
        yield marketMethods_1.YandexMarketMethods.clickOn(market_1.market.radioBtn4Stars);
    }));
    it('Вводим цену и потом выводим в консоль класс и значение', () => __awaiter(void 0, void 0, void 0, function* () {
        yield marketMethods_1.YandexMarketMethods.putText('400', market_1.market.moneyFromField);
        yield marketMethods_1.YandexMarketMethods.getTextFrom(market_1.market.moneyFromField);
        built_1.browser.sleep(20000);
    }));
    it('Вводим слово в поиск, нажимаем на значение из дропдауна', () => __awaiter(void 0, void 0, void 0, function* () {
        yield marketMethods_1.YandexMarketMethods.DropDown('apple', market_1.market.globalSearch);
    }));
}));
