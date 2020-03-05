"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const chrome = require('selenium-webdriver/chrome');
// const options = new chrome.Options();
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    //directConnect: true,
    capabilities: {
        browserName: 'chrome',
    },
    specs: ['yandex_cities_spec.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000
    },
};
