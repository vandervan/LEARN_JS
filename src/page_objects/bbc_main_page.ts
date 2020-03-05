// Page Object - проба пера
import {browser, by, element} from "protractor/built";

const bbcMainPage = function () {
	const search = element(by.id('orb-search-q'));
	const submitBtn = element(by.id('orb-search-button'));
	const newsBtn = element(by.css('[href="https://www.bbc.com/news"]'));
	const myUrl = 'https://www.bbc.com/';
	this.openPage = async function () {
		await browser.waitForAngularEnabled(false);
		await browser.get(myUrl)
	};
	this.inputField = async function (yourString) {
		await search.sendKeys(yourString)
	};
	this.submitInputField = async function () {
		await submitBtn.click()
	};
	this.pressNews = async function () {
		await newsBtn.click()
	}
};
module.exports = new bbcMainPage();
