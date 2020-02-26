// spec.ts
describe('test bbc', () => {
	it('perehod v poisk', async () => {
		await browser.waitForAngularEnabled(false)
		await browser.get('https://bbc.com')
		const search = await element(by.id('orb-search-q'))
		await search.sendKeys('corona virus')
		const link = await element(by.css('[href="https://www.bbc.com/news"]'))
		await link.click()
		// eslint-disable-next-line @typescript-eslint/unbound-method
		expect(await link.isEnabled()).toBe(true)
	})
})


