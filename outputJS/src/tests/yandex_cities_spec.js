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
const yandex_main_page_1 = require("../page_objects/yandex_main_page");
describe('More tab', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield built_1.browser.waitForAngularEnabled(false);
        yield built_1.browser.get('https://yandex.by/');
    }));
    it('compare two tabs London and Paris', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandex_main_page_1.Methods.pressLocationBtn();
        yield yandex_main_page_1.Methods.sendCityLondon('Лондон');
        const arrayLondon = yield yandex_main_page_1.Methods.getValueFromLondonMore();
        yield yandex_main_page_1.Methods.pressLocationBtn();
        yield yandex_main_page_1.Methods.sendCityParis('Париж');
        const arrayParis = yield yandex_main_page_1.Methods.getDataFromParisMore();
        expect(arrayLondon).toEqual(arrayParis);
    }));
}));
