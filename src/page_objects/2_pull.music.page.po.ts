import {browser, element, by, ElementFinder, ElementArrayFinder, $$, promise, ExpectedConditions} from "protractor";

export class SecondPullMusic {

    public logInButton: ElementFinder = element(by.buttonText('Войти в почту'));
    public logInField: ElementFinder =  element(by.id('passp-field-login'));
    public submitBtn:ElementFinder =  element(by.css('div.passp-button.passp-sign-in-button'));
    public passField: ElementFinder =  element(by.id('passp-field-passwd'));
    public suggestedOptionMetallica: ElementFinder = element(by.css('[href*="/artist/3121"]'));
    public suggestedOptionBeyonce: ElementFinder = element(by.css('[href*="/artist/27995"]'));
    public music: ElementFinder = element(by.css('[href="https://music.yandex.by/"]'));
    public musicSearchField: ElementFinder = element(by.className('d-input__field deco-input deco-input_suggest'));
    public resultHeader: ElementFinder = element(by.className('page-artist__title typo-h1 typo-h1_big'));
    public metallicaAlbums: ElementArrayFinder = element.all(by.css('[href="/artist/3121"]'));
    public firstTrack: ElementArrayFinder = element.all(by.css(".d-track .entity-cover__image"));
    public playIcon: ElementFinder = element(by.css(".deco-player-controls .player-controls__btn_play div"));
    public pauseIcon: ElementFinder = element(by.css(".deco-player-controls .player-controls__btn_pause div"));

    async openBrowser(url: string) {
        await browser.get(url);
    }

    async logIn(userName: string, password: string) {
        await this.logInButton.click().then(async () => {
            await browser.getAllWindowHandles().then(async function (handles) {
                await browser.switchTo().window(handles[handles.length - 1]);
            });
            await this.logInField.sendKeys(userName);
            await this.submitBtn.click();
            await this.passField.sendKeys(password);
        });
    }

    async OpenMusic() {
        await this.music.click().then(async () => {
            await browser.getAllWindowHandles().then(async function (handles) {
                await browser.switchTo().window(handles[handles.length - 1]);
            });
        })
    }

    async SearchForMetallica(FindText) {
        await this.musicSearchField.sendKeys(FindText);
        await this.suggestedOptionMetallica.click();
    }

    async MetallicaChecker() {
        const ExpectedResult: string = await this.resultHeader.getText();
        expect(ExpectedResult).toBe('Metallica');
        const albumTitle: string = await this.metallicaAlbums.last().getText();
        expect(albumTitle).toBe('Metallica');
    }

    async SearchForBeyonce (FindText) {
        await this.musicSearchField.sendKeys(FindText);
        await browser.wait(ExpectedConditions.visibilityOf(this.suggestedOptionBeyonce), 3000);
        await this.suggestedOptionBeyonce.click();
    }

    async TrackPlayer() {
        await browser.wait(ExpectedConditions.visibilityOf(this.firstTrack.first()), 3000);
        await browser.sleep(1000);
        await this.firstTrack.first().click();
        await browser.wait(ExpectedConditions.visibilityOf(this.playIcon), 3000);
        await browser.actions().sendKeys("p");
        let pause = await this.pauseIcon.isDisplayed();
        expect(pause).toBe(true);
        await browser.wait(ExpectedConditions.visibilityOf(this.pauseIcon), 3000);
        await browser.actions().sendKeys("p");
        let play = await this.playIcon.isDisplayed();
        expect(play).toBe(true);
    }
}