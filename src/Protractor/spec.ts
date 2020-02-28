// spec.ts
const bbcMainPage = require ('C:\\Users\\Vandervan\\WebstormProjects\\LEARN_JS\\src\\page_objects\\bbc_main_page.ts')

describe('PROTRACTOR BBC TEST', () => {
	it('Go to Main Page BBC.com', async () => {
		await bbcMainPage.get()
		expect(await browser.getCurrentUrl()).toBe('https://www.bbc.com/')
	})

	it('Find the search field and type a string', async () => {
		await bbcMainPage.inputField('coronavirus')
		await bbcMainPage.submitInputField()
		expect(await browser.getTitle()).toBe('BBC - Search results for coronavirus')
	})

	it('Press the News button on the new page', async () => {
		await bbcMainPage.pressNews()
		expect(await browser.getTitle()).toBe('Home - BBC News')
	})
})
