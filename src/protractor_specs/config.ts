import { Config } from "protractor/built";
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();

export let config: Config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	SELENIUM_PROMISE_MANAGER: false,
	//directConnect: true,
	capabilities:
		{
			browserName: 'chrome',
		},

	specs: ['yandex_cities_spec.js'],
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 90000
	},

	onPrepare: () => {
		let globals = require('protractor');
		let browser = globals.browser;
		browser.manage().window().maximize();
		browser.manage().timeouts().implicitlyWait(5000);
	}
};
