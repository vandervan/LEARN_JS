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
const onlinerMethods_1 = require("../page_objects/onlinerMethods");
const Helpers_1 = require("../page_objects/Helpers");
describe('Basic controls: ', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield built_1.browser.waitForAngularEnabled(false);
        yield built_1.browser.get('https://catalog.onliner.by/notebook');
    }));
    it('Scroll, Checkbox', () => __awaiter(void 0, void 0, void 0, function* () {
        yield onlinerMethods_1.onlinerMethods.scroll(Helpers_1.Helpers.help);
        yield onlinerMethods_1.onlinerMethods.clickIt(Helpers_1.Helpers.checkBox4K);
        yield built_1.browser.sleep(500);
        yield onlinerMethods_1.onlinerMethods.clickIt(Helpers_1.Helpers.checkBox4K);
    }));
    it('DropDown', () => __awaiter(void 0, void 0, void 0, function* () {
        yield onlinerMethods_1.onlinerMethods.DropDown();
    }));
}));
