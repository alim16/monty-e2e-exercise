import topsPage from '../../pageObjects/clothingTopsPage'
const expect = require('chai').expect;


module.exports = function () {
    this.Given(/^I am viewing product list tops$/, topsPage.gotoPage)
    this.Given(/^I filter the product list$/, topsPage.openFilterMenu)
    this.Given(/^I filter by option "([^"]*)"$/, (option) => {topsPage.selectOptionToFilterBy(option)})
    this.Given(/^I select colour "([^"]*)"$/, (colour) => {topsPage.filterByColour(colour)})
    this.Given(/^I apply these filters$/, topsPage.applyFilters)
    this.Then(/^Filter button has ([\d]|no) filter([s]?)$/, (value) => {
        if(value=="no"){value=""};
        expect(topsPage.filterCount()).equal(value)
    });
    this.Given(/^Filter returns a product list$/, () => { expect(topsPage.listOfProductsVisible()).be.true;})
    this.Given(/^I clear all filters$/, topsPage.clearFilters)
}
