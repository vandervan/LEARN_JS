import { browser, by, element } from "protractor/built";
import { Helpers } from "./Helpers";

export class onlinerMethods {

    public static async scroll (element) {
        await browser.actions().mouseMove(element).perform();
        browser.sleep(2500)
    }

    public static async clickIt (radioBtn) {
        await browser.actions().mouseMove(radioBtn).perform();
        await browser.sleep(1500);
        await radioBtn.click();
        await browser.sleep(1500)
    }

    public static async DropDown () {
        await browser.actions().mouseMove(Helpers.dropdown).perform();
        await browser.sleep(1500);
        await Helpers.dropdown.click();
        await browser.sleep(1500);
        await Helpers.dropDownValue.click();
    }
}
