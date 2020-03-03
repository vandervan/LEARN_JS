// conf.js
exports.config = {
	framework: 'jasmine',
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	SELENIUM_PROMISE_MANAGER: false,
	directConnect: true,
	multiCapabilities: [
		{
			browserName: 'chrome',
		}, {
			//browserName: 'firefox',
		},
	],
	specs: ['yandex_cities.ts'],
	jasmineNodeOpts: {
		showColors: true,
	},
}
