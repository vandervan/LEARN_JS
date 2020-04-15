import {browser} from 'protractor';
import {marketMethods} from '../page_objects/market_main_page.po';
import {Market_locators} from '../locators/market_locators';

describe('Basic controls: ', async () => {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://market.yandex.by/catalog/54726/list?local-offers-first=0&deliveryincluded=0&onstock=1');
        await browser.sleep(15000); /* Здесь слип необходим, чтобы успеть ввести капчу и не сфейлить рабочий тест, а также для
        того, чтобы браузер успел обновить страницу, т.к. в интернет-магазинах каждая кнопка выборки автоматически применяет фильтры и
        отображает новые данные на странице.
         Таков уж Яндекс, иногда работает без капчи, иногда нет */
    });

    it('Скролл и чекбокс', async () => {
        await marketMethods.moveMeToElement(Market_locators.checkBox4Ram);
        await marketMethods.clickOn(Market_locators.checkBox4Ram);
        await marketMethods.clickOn(Market_locators.checkBox4Ram);
    });

    it('Радио-баттон', async () => {
        await marketMethods.clickOn(Market_locators.radioBtn4Stars);
    });

    it('Вводим цену и потом выводим в консоль класс и значение', async () => {
        await marketMethods.putText('400', Market_locators.moneyFromField);
        await marketMethods.getTextFrom(Market_locators.moneyFromField);
    });

    it('Вводим слово в поиск, нажимаем на значение из дропдауна', async () => {
        await marketMethods.DropDown('Huawei', Market_locators.searchField);
    });
});
