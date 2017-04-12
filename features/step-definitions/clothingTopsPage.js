import topsPage from '../../pageObjects/clothingTopsPage'

module.exports = function () {
    this.Given(/^I am viewing product list tops$/, topsPage.gotoPage)
    this.Given(/^I filter the product list$/, topsPage.openFilterMenu)
    browser.pause(10000)
    this.Given(/^I filter by option {stringInDoubleQuotes}$/, (txt) => {topsPage.filterByOption(txt)})
    
}
