// import {browser,by, ExpectedConditions} from "protractor";
// import {yandexHomeLocators} from "../locators/yandex_mail_main_locators";
// import {Market_locators} from "../locators/market_locators";
// import {pullMethods} from "../page_objects/yandex_mail_main_page.po";
// import {marketMethods} from "../page_objects/market_main_page.po";
//
// describe('Second pull', async () =>{
//     beforeEach(async () => {
//         await browser.waitForAngularEnabled(false);
//         await browser.get('https://yandex.by');
//     });
//     it('Add to match', async () =>
//         await yandexHomeLocators.market.click();
//         await pullMethods.moveDriverToNewTab();
//         await Market_locators.searchField.sendKeys('Note 8');
//         await Market_locators.searchButton.click();
//         await Market_locators.firstPhone.click();
//         await Market_locators.secondPhone.click();
//         await Market_locators.compareBtn.click();
//         const check = Market_locators.content.getText();
//         expect(check).toContain('Note 8');
//     });
    // xit('Delete from cart', async () => {
    //     await yandexHomeLocators.market.click();
    //     await pullMethods.moveDriverToNewTab();
    //     await Market_locators.searchField.sendKeys('Note 8');
    //     await Market_locators.searchButton.click();
    //     await Market_locators.firstPhone.click();
    //     await Market_locators.secondPhone.click();
    //     await Market_locators.compareBtn.click();
    //     await Market_locators.deleteBtn.click();
    //
    // })
// });