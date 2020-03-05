import {browser} from "protractor/built";
import {Methods} from "../page_objects/yandex_main";

describe('More tab', async () =>{
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
    });
    it('compare two tabs London and Paris', async() => {
        await Methods.pressLocationBtn();
        await Methods.sendCity('Лондон');
        const arrayLondon = await Methods.getValueFromLondonMore();
        await Methods.pressLocationBtn();
        await Methods.sendCityParis('Париж');
        const arrayParis = await Methods.getDataFromParisMore();
        expect(arrayLondon).toEqual(arrayParis);
    });
});
