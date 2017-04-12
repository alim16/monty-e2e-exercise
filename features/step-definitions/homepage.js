import homepage from '../../pageObjects/homepage'
const expect = require('chai').expect;

module.exports = function () {
    this.Given(/^I am on the landing page$/, homepage.gotoPage)
    //this.Given(/^I click on categories$/, homepage.clickBurgerButton)
    this.Then(/^I can see logo in navigation bar$/, () => {
        expect(homepage.hasLogo).be.true;
    })
}






/*
import * as homepage from '../../pageObjects/homepage'

module.exports = function () {
    this.Given(/^I am on the landing page$/, homepage.gotoPage)
    this.Then(/^I can see logo in navigation bar$/, homepage.hasLogo)
}
*/