"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();
exports.config = {
    framework: 'jasmine2',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
    },
    specs: [''],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000
    },
    onPrepare: () => {
        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        let globals = require('protractor');
        let browser = globals.browser;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
    }
};
