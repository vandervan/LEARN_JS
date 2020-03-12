import {browser} from "protractor";
import {Methods} from "../page_objects/yandex_main_page.po";

describe('More tab', async () =>{
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
    });
    it('compare two tabs London and Paris', async() => {
        await browser.debugger();
        await Methods.pressLocationBtn();
        await Methods.sendCity('Лондон');
        const arrayLondon = await Methods.getValueFromLondonMore();
        await Methods.pressLocationBtn();
        await Methods.sendCity('Париж');
        const arrayParis = await Methods.getDataFromParisMore();
        expect(arrayLondon).toEqual(arrayParis);
    });
});
