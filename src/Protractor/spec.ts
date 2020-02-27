// spec.ts

// describe('test bbc', () => {
// 	it('perehod na main page', async () => {
// 		await browser.waitForAngularEnabled(false)
// 		await browser.get('https://bbc.com')
// 		expect(await browser.getCurrentUrl()).toBe('https://www.bbc.com/')
// 	})
//
// 	it('vvod teksta v pole poiska', async () => {
// 		await search.sendKeys('corona virus')
// 		await submitBtn.click()
// 		expect(await browser.getTitle()).toBe('BBC - Search results for corona virus')
//
// 	})
//
// 	it('press news button', async () => {
// 		await link.click()
// 		expect(await link.isDisplayed()).toBe(false)
// 	})
// })

// const search = element(by.id('orb-search-q'))
// const submitBtn = element(by.id('orb-search-button'))
// const link = element(by.css('[href="https://www.bbc.com/news"]'))

// function waitForEnabled(element, wait) {
// 	let isDisplayedElm = await element.isEnabled()
// 	let i = 0
// 	while (!isDisplayedElm && i < wait) {
// 		driver.sleep(100)
// 		isDisplayedElm = await element.isEnabled()
// 		i += 100
// 	}
// }
//
// function waitForDisplayed(element, wait) {
// 	let isDisplayedElm = await element.isDisplayed()
// 	let j = 0
// 	while (!isDisplayedElm && j < wait) {
// 		driver.sleep(100)
// 		isDisplayedElm = await element.isDisplayed()
// 		j += 100
// 	}
// }

const BBC_main_page = require('C:\\Users\\anduser\\Documents\\LEARN_JS\\src\\page_objects\\bbc_main_page.ts')
describe('PROTRACTOR BBC TEST',  () => {
	it('Go to Main Page BBC.com', async () => {
		await BBC_main_page.get()
		expect(await browser.getCurrentUrl()).toBe('https://www.bbc.com/')
	})

	it('Find the search field and type a string', async () => {
		await BBC_main_page.inputField('coronavirus')
		await BBC_main_page.submitInputField()
		expect(await browser.getTitle().toBe('BBC - Search results for corona virus')
	})

	it('Press the News button on the new page', async () => {
		await BBC_main_page.pressNews()
		expect(await BBC_main_page.link.isPresent()).toBeUndefined(true)
	})
})


//await BBC_main_page.waitForDisplayed(BBC_main_page.link, 5000)

