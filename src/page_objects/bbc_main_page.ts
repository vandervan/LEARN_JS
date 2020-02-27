
// async function waitForEnabled(element, wait) {
// 	let isDisplayedElm = await element.isEnabled()
// 	let i = 0
// 	while (!isDisplayedElm && i < wait) {
// 		driver.sleep(100)
// 		isDisplayedElm = await element.isEnabled()
// 		i += 100
// 	}
// }
//
// async function waitForDisplayed(element, wait) {
// 	let isDisplayedElm = await element.isDisplayed()
// 	let j = 0
// 	while (!isDisplayedElm && j < wait) {
// 		driver.sleep(100)
// 		isDisplayedElm = await element.isDisplayed()
// 		j += 100
// 	}
// }

const bbcMainPage = function () {
	const search = element(by.id('orb-search-q'))
	const submitBtn = element(by.id('orb-search-button'))
	const link = element(by.css('[href="https://www.bbc.com/news"]'))
	this.get = async function () {
		await browser.waitForAngularEnabled(false)
		await browser.get('https://www.bbc.com/')
	}
	this.inputField = async function (yourString) {
		await search.sendKeys(yourString)
	}
	this.submitInputField = async function () {
		await submitBtn.click()
	}
	this.pressNews = async function () {
		await link.click()
	}
	  async function waitForDisplayed(element, wait) {
		let isDisplayedElm = await element.isDisplayed()
		let j = 0
		while (!isDisplayedElm && j < wait) {
			driver.sleep(100)
			isDisplayedElm = await element.isDisplayed()
			j += 100
		}
	}
	   async function waitForEnabled(element, wait) {
		let isDisplayedElm = await element.isEnabled()
		let i = 0
		while (!isDisplayedElm && i < wait) {
			driver.sleep(100)
			isDisplayedElm = await element.isEnabled()
			i += 100
		}
	}
}
module.exports = new bbcMainPage()
