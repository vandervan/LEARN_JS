import {browser, by, element, ElementFinder} from "protractor";

export class SecondPull {
    public marketBtn: ElementFinder = element(by.css('\'[href*="market"]\''));
    public searchField: ElementFinder = element(by.css('#header-search'));
    public searchBtn: ElementFinder = element(by.css('[type=\'submit\'][role=\'button\']'));
    public firstResult: ElementFinder = element(by.xpath('(//*[contains(@class,\'n-user-lists_type_compare\')])[1]'));
    public secondResult: ElementFinder = element(by.xpath('(//*[contains(@class,\'n-user-lists_type_compare\')])[2]'));
    public compareBtn: ElementFinder = element(by.css('.button_theme_action'));
    public content: ElementFinder = element(by.css('.n-compare-head__name'));

    async OpenBrowser(url: string){
        browser.get(url);
    }

    async ClickOnMarket(){
        await this.marketBtn.click();
    }

    async searchInputField(text: string){
        await this.searchField.sendKeys(text);
        await this.searchBtn.click();
    }

    async addToMatch(){
        await this.firstResult.click();
        await this.secondResult.click();
        await this.compareBtn.click();
    }

    async comparision() {
        return this.content.getText();
    }
}
