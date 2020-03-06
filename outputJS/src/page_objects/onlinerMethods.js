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
const Helpers_1 = require("./Helpers");
class onlinerMethods {
    static scroll(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield built_1.browser.actions().mouseMove(element).perform();
        });
    }
    static clickIt(radioBtn) {
        return __awaiter(this, void 0, void 0, function* () {
            yield built_1.browser.actions().mouseMove(radioBtn).perform();
            yield radioBtn.click();
        });
    }
    static DropDown() {
        return __awaiter(this, void 0, void 0, function* () {
            yield built_1.browser.actions().mouseMove(Helpers_1.Helpers.dropdown).perform();
            yield built_1.browser.sleep(500);
            yield Helpers_1.Helpers.dropdown.click();
            yield Helpers_1.Helpers.dropDownValue.click();
        });
    }
}
exports.onlinerMethods = onlinerMethods;
