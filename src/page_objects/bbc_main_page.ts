//Page Object - проба пера
const bbcMainPage = function () {
	const search = element(by.id('orb-search-q'))
	const submitBtn = element(by.id('orb-search-button'))
	const newsBtn = element(by.css('[href="https://www.bbc.com/news"]'))
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
		await newsBtn.click()
	}
}
module.exports = new bbcMainPage()
