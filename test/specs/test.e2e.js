const SearchPage = require('../pageobjects/search.page')
const SearchResultPage = require('../pageobjects/searchResults.page')
const assert = require('assert');

describe('Google word search', () => {
    it('should get the page title and compare it with the search word', async () => {
        const expectedTitle = 'Selenium';
        await SearchPage.open()
        await SearchPage.search(expectedTitle)
        await SearchResultPage.clickOnResult(6)
        const pageTitle = await SearchResultPage.getTitle();      
        assert.strictEqual(pageTitle, expectedTitle, `Title does not match "${expectedTitle}"`);   
    })
})

