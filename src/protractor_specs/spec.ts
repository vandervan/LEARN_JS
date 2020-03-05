// spec.ts
import {browser} from "protractor";

const bbcMainPage = require('C:\\Users\\anduser\\Documents\\LEARN_JS\\src\\page_objects\\bbc_main_page.ts');

describe('PROTRACTOR BBC TEST', () => {
	it('Main Page BBC.com', async () => {
		await bbcMainPage.openPage();
		await bbcMainPage.inputField('coronavirus');
		await bbcMainPage.submitInputField();
		await bbcMainPage.pressNews();
		expect(await browser.getTitle()).toBe('Home - BBC News')
	})
});
