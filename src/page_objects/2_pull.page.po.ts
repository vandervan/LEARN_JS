import {browser, by, element, ElementArrayFinder, ElementFinder, ExpectedConditions, until} from "protractor";
import elementIsVisible = until.elementIsVisible;

export class SecondPull {

    public marketBtn: ElementFinder = element(by.xpath('//a[@data-id=\'market\']'));
    public searchField: ElementFinder = element(by.id('header-search'));
    public searchBtn: ElementFinder = element(by.buttonText('Найти'));
    public firstResult: ElementFinder = element(by.xpath('(//*[contains(@class,\'n-user-lists_type_compare\')])[1]'));
    public secondResult: ElementFinder = element(by.xpath('(//*[contains(@class,\'n-user-lists_type_compare\')])[2]'));
    public compareBtn: ElementFinder = element(by.css('.header2-menu__item_type_compare:nth-child(3) > span.header2-menu__text'));
    public addedToCompareItemsHeader: ElementFinder = element(by.css('div.layout.layout_type_maya.n-page-compare > h1'));
    public content: ElementArrayFinder = element.all(by.css('.i-bem.n-compare-content_js_inited'));
    public clearListBtn: ElementFinder = element(by.xpath('//span[@class="n-compare-toolbar__action-clear link"]//span[@class="link__inner"]'));
    public emptyListMsg: ElementFinder = element(by.css('.n-compare-empty__content .title_size_18'));

    async OpenBrowser(url: string){
        await browser.get(url);
    }

    async ClickOnMarket(){
        await this.marketBtn.click().then(async () => {
            await browser.getAllWindowHandles().then(async function (handles) {
                await browser.switchTo().window(handles[handles.length - 1]);
            })
        })
    }

    async searchInputField(text: string){
        await this.searchField.sendKeys(text);
        await this.searchBtn.click();
    }

    async addToMatch(){
        await this.firstResult.click();
        await this.secondResult.click();
        await this.compareBtn.click();
        await browser.wait(ExpectedConditions.textToBePresentInElement(this.addedToCompareItemsHeader, 'Сравнение товаров'));
    }

    async comparision() {
        return await this.content.map(function (element: ElementFinder) {
            const result = element.getText();
            expect(result).not.toEqual(null);
        });
    }

    async listClearer(){
        await this.clearListBtn.click();
        await browser.wait(ExpectedConditions.visibilityOf(this.emptyListMsg),3000);
        const EmptyHeaderText = await this.emptyListMsg.getText();
        expect(EmptyHeaderText).toContain('Товаров нет');
    }
}
