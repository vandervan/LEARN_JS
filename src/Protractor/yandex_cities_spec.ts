// spec.ts
// const yandexMain = require('C:\\Users\\Vandervan\\WebstormProjects\\LEARN_JS\\src\\page_objects\\yandex_main.ts')
//
// describe('Yandex City Test', () => {
//     it('Проверка значений поля "Ещё" на yandex.by', async () => {
//         await yandexMain.openPage('https://yandex.by/');
//         await yandexMain.cityBtn();
//         await browser.sleep(4000);
//         await yandexMain.cityChanger('London, United Kingdom');
//         await yandexMain.confirmCity();
//         await yandexMain.pressMoreBtn();
//         await yandexMain.cityChanger('Paris');
//         await yandexMain.confirmCity();
//         await yandexMain.pressMoreBtn();
//         expect(await browser.getTitle()).toBe('Yandex')
//     })
// });
import { browser } from "protractor";
import { Actions } from "../pageObject/homeMethods";

describe('More tab', async () =>{
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('yandex.by');
    });
    it('compare two tabs London and Paris', async() => {
        await Action.sendCitySave('Лондон');
        let arrayLondon = await Action.getDataFromMoreTab();
        await Action.sendCitySave('Париж');
        let arrayParis = await Action.getDataParis();
        expect(arrayLondon).toEqual(arrayParis);
    });
});
