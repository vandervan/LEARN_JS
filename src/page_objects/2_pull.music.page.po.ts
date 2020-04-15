import {browser, element, by, ElementFinder, ElementArrayFinder, $$, promise} from "protractor";

export class SecondPullMusic {

    public logInButton: ElementFinder = element(by.buttonText('Войти в почту'));
    public logInField: ElementFinder =  element(by.id('passp-field-login'));
    public submitBtn:ElementFinder =  element(by.css('div.passp-button.passp-sign-in-button'));
    public passField: ElementFinder =  element(by.id('passp-field-passwd'));
    public suggestedOption: ElementFinder = element(by.css('a[href="/artist/3121"][xpath="1"]'));
    public music: ElementFinder = element(by.css('[href="https://music.yandex.by/"]'));
    public musicSearchField: ElementFinder = element(by.css('input[xpath="1"]'));
    public resultHeader: ElementFinder = element(by.css('h1[xpath="1"]'));
    public metallicaALbums: ElementFinder = element(by.css('a[xpath="1"]'));

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
        await this.music.click()
    }

    async SearchForMetallica() {
        await this.musicSearchField.sendKeys('Metal');
        await this.suggestedOption.click();
        const ExpectedResult: string = await this.resultHeader.getText();
        expect(ExpectedResult).toBe('Metallica');
    }

    async MetallicaChecker() {
        const albumTitle: string = await this.metallicaALbums.getAttribute('title');
        expect(albumTitle).toBe('Metallica');
    }
}