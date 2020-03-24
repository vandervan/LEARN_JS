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
const Automation_testing_practice_main_po_1 = require("../locators/Automation_testing_practice.main.po");
describe('Actions', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('http://testautomationpractice.blogspot.com/');
    }));
    it('Scroll', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.actions().
            mouseMove(Automation_testing_practice_main_po_1.elements.footer).
            perform();
    }));
    it('Input', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.actions().
            mouseMove(Automation_testing_practice_main_po_1.elements.input).
            click().
            sendKeys('123').
            perform();
        expect(protractor_1.browser.wait(protractor_1.ExpectedConditions.textToBePresentInElementValue(Automation_testing_practice_main_po_1.elements.input, '123'), 3000)).
            toBeTruthy();
    }));
    it('Click & Input', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript("document.getElementById('Wikipedia1_wikipedia-search-input').value='mama'");
        yield protractor_1.browser.executeScript("arguments[0].click()", Automation_testing_practice_main_po_1.elements.searchBtn);
    }));
    it('Click', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.actions().
            mouseMove(Automation_testing_practice_main_po_1.elements.ClickMe).
            click().
            perform();
        expect(protractor_1.browser.wait(protractor_1.ExpectedConditions.alertIsPresent(), 3000)).
            toBeTruthy();
    }));
}));
