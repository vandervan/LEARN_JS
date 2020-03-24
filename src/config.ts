import {Config} from 'protractor';

const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();

export let config: Config = {
	framework: 'jasmine2',
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	SELENIUM_PROMISE_MANAGER: true,
	directConnect: true,
	capabilities:
		{
			browserName: 'chrome',
			chromeOptions: {
				'excludeSwitches' : ['enable-automation'],
				//args: ['--headless'],
				prefs: {
					download: {
						'prompt_for_download': false,
						'default_directory': './downloads'
					}
				}
			}
		},

	specs: ["C:\\Users\\anduser\\Documents\\LEARN_JS\\dist\\tests\\yandex_pull.spec.js"],
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 90000
	},

	restartBrowserBetweenTests: false,

	onPrepare: () => {
		let AllureReporter = require('jasmine-allure-reporter');
		jasmine.getEnv().addReporter(new AllureReporter ({
			resultsDir: 'allure-results'
		}));
		let globals = require('protractor');
		let browser = globals.browser;
		browser.manage().window().maximize();
		browser.manage().timeouts().implicitlyWait(5000);
		let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath: 'HtmlReport'
		}));
	 }
};
