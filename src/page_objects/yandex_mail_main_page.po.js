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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var protractor_1 = require("protractor");
var yandex_autorization_page_locators_1 = require("../locators/yandex_autorization_page_locators");
var yandex_mail_main_locators_1 = require("../locators/yandex_mail_main_locators");
var pullMethods = /** @class */ (function () {
    function pullMethods() {
    }
    pullMethods.loginFunction = function (locator) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.actions().mouseMove(locator).click().perform()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    pullMethods.loginProcess = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, yandex_autorization_page_locators_1.yandexAuthorization.logInField.sendKeys(username)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, yandex_autorization_page_locators_1.yandexAuthorization.submitBtn.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, yandex_autorization_page_locators_1.yandexAuthorization.passField.sendKeys(password)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, yandex_autorization_page_locators_1.yandexAuthorization.submitBtn.click()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    pullMethods.moveDriverToNewTab = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.getAllWindowHandles().then(function (handles) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, protractor_1.browser.switchTo().window(handles[handles.length - 1])];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    pullMethods.moveDriverToPreviousTab = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.getAllWindowHandles().then(function (handles) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, protractor_1.browser.switchTo().window(handles[handles.length - 2])];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    pullMethods.getLoggedName = function (locator) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, locator.getText()];
            });
        });
    };
    pullMethods.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, yandex_mail_main_locators_1.yandexHomeLocators.userTab.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, yandex_mail_main_locators_1.yandexHomeLocators.logOutBtn.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    pullMethods.getErrorName = function (locator) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, locator.getText()];
            });
        });
    };
    pullMethods.checkLogin = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, yandex_autorization_page_locators_1.yandexAuthorization.logInField.sendKeys(username)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, yandex_autorization_page_locators_1.yandexAuthorization.submitBtn.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    pullMethods.moveDriverToMainTab = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.getAllWindowHandles().then(function (handles) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, protractor_1.browser.switchTo().window(handles[0])];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    pullMethods.urlChecker = function (locator, string) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, locator.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.moveDriverToNewTab()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                    case 3:
                        currentUrl = _a.sent();
                        if (!currentUrl.startsWith(string)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.moveDriverToMainTab()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5: throw new Error('Wrong page');
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    pullMethods.languageChanger = function () {
        return __awaiter(this, void 0, void 0, function () {
            var EC;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, yandex_mail_main_locators_1.yandexHomeLocators.languageBtn.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, yandex_mail_main_locators_1.yandexHomeLocators.languageMoreBtn.click()];
                    case 2:
                        _a.sent();
                        EC = protractor_1.protractor.ExpectedConditions;
                        return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeSelected(yandex_mail_main_locators_1.yandexHomeLocators.languageDropdown), 5000)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.actions().mouseDown(yandex_mail_main_locators_1.yandexHomeLocators.english).click().perform()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, yandex_mail_main_locators_1.yandexHomeLocators.saveLanguageBtn.click()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    pullMethods.goToMore = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, yandex_mail_main_locators_1.yandexHomeLocators.languageBtn.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, yandex_mail_main_locators_1.yandexHomeLocators.languageMoreBtn.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    pullMethods.languageChecker = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, yandex_mail_main_locators_1.yandexHomeLocators.languageDropdown.getText()];
            });
        });
    };
    return pullMethods;
}());
exports.pullMethods = pullMethods;
