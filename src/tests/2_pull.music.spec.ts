import {browser, by, element, ElementArrayFinder, ElementFinder} from "protractor";
import {SecondPullMusic} from "../page_objects/2_pull.music.page.po";

describe('Music test cases', async () => {
   beforeEach(async() => {
       let secondPull: SecondPullMusic = new SecondPullMusic();
       await browser.waitForAngularEnabled(false);
       await browser.manage().window().maximize();
       await secondPull.openBrowser('https://yandex.by');
       await secondPull.logIn('AutotestUser', 'AutotestUser123');
       await secondPull.OpenMusic();
   });

    it('Metallica', async () => {
        let secondPull: SecondPullMusic = new SecondPullMusic();
        await secondPull.SearchForMetallica();
        await secondPull.MetallicaChecker();
    });
});