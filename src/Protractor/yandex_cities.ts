// spec.ts
const yandexMain = require('C:\\Users\\Vandervan\\WebstormProjects\\LEARN_JS\\src\\page_objects\\yandex_main.ts')

describe('Yandex City Test', () => {
    it('Проверка значений поля "Ещё" на yandex.by', async () => {
        await yandexMain.openPage('https://yandex.by/');
        await yandexMain.cityBtn();
        await browser.sleep(4000);
        await yandexMain.cityChanger('London, United Kingdom');
        await yandexMain.confirmCity();
        await yandexMain.pressMoreBtn();
        await yandexMain.cityChanger('Paris');
        await yandexMain.confirmCity();
        await yandexMain.pressMoreBtn();
        expect(await browser.getTitle()).toBe('Yandex')
    })
});
