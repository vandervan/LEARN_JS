 async function displayer(element, wait) {
        let isDisplayedElm = await
        element.isDisplayed();
        let j = 0;
        while (!isDisplayedElm && j < wait) {
            driver.sleep(100);
            isDisplayedElm = await
            element.isDisplayed();
            j += 100;
        }
    }

 async function enabler(element, wait) {
        let isDisplayedElm = await
        element.isEnabled();
        let i = 0;
        while (!isDisplayedElm && i < wait) {
            driver.sleep(100);
            isDisplayedElm = await
            element.isEnabled();
            i += 100;
        }
    }
