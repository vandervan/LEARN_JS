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
// spec.ts
const protractor_1 = require("protractor");
const bbcMainPage = require('C:\\Users\\anduser\\Documents\\LEARN_JS\\src\\page_objects\\bbc_main_page.ts');
describe('PROTRACTOR BBC TEST', () => {
    it('Main Page BBC.com', () => __awaiter(void 0, void 0, void 0, function* () {
        yield bbcMainPage.openPage();
        yield bbcMainPage.inputField('coronavirus');
        yield bbcMainPage.submitInputField();
        yield bbcMainPage.pressNews();
        expect(yield protractor_1.browser.getTitle()).toBe('Home - BBC News');
    }));
});
