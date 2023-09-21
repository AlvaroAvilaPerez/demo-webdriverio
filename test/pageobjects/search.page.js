const { $, browser } = require('@wdio/globals')
const Page = require('./page');

class ShearPage extends Page {

    get searchText () {
        return $('textarea[name="q"]')
    }

    async search (text) {
        await this.searchText.isElementDisplayed
        await this.searchText.setValue(text)
        await browser.keys('Enter');
    }

    open () {
        return super.open('');
    }
}

module.exports = new ShearPage();
