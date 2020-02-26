// conf.ts
exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['spec.ts'],
	directConnect: true,
	multiCapabilities: [
		{
			browserName: 'firefox',
		}, {
			browserName: 'chrome',
		},
	],
	jasmineNodeOpts: {
		showColors: true, // Use colors in the command line report.
	},
}
