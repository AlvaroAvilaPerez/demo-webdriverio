const { $, $$, browser } = require('@wdio/globals')
const Page = require('./page');

class ShearchResultPage extends Page {
    get resultLinks() {
        return $$('div .MjjYud');
    }

    get titlePage() {
        return $ ('span.mw-page-title-main')
    }

    async clickOnResult(index) {
        const link = this.resultLinks[index];
        await link.click({button: 'middle'});
        const actualWindow = await browser.getWindowHandle();
        const windows = await browser.getWindowHandles();
        const newWindow = windows.find((window) => window !== actualWindow);
        await browser.switchToWindow(newWindow);
      }
    
    async getTitle() {
        return this.titlePage.getText()        
    }

    async getHreftResult(index){
        const link = this.resultLinks[index];
        const hrefValue = link.getAttribute('href');
        return hrefValue;
    }

    async openNewWindow() {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[handles.length - 1]);
    }
}

module.exports = new ShearchResultPage();
