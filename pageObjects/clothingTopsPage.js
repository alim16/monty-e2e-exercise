var basepage = require('./basepage')

class clothingTopsPage extends basepage{
        

    constructor(){
        super()
     }
     
    gotoPage () {
    super.gotoPage('en/tsuk/category/clothing-427/tops-443');
    }

    openFilterMenu() {browser.click('.Filters-refineButton')};

    selectOptionToFilterBy(option) {
        browser.waitForExist(".Filters-row",5000)
        browser.click('//div[contains(@class,"PlpContainer-productListContainer")]//span[text()="'+option+'"]'); 
       //div[contains(@class,"PlpContainer-productListContainer")]//span[text()="Colour"]  ///current xpath
    };
    
    filterByColour(colour) {
        colour = colour.toLowerCase();
        return browser.click('//div[contains(@class,"PlpContainer-productListContainer")]//div[contains(@class,"ValueOption")]//span[text()="'+colour+'"]')
        //div[contains(@class,"PlpContainer-productListContainer")]//div[contains(@class,'ValueOption')]//span[text()="brown"] //should work since option names are uni
       
    };

    applyFilters(){ browser.click('.Refinements-applyButton') }
    clearFilters(){ browser.click('.Refinements-clearButton') }

    filterCount(){
        browser.pause(2)
        return browser.getText('.Filters-refineButton span').replace(/[()]/g,""); //removes brackets before returning filter value
    }

    listOfProductsVisible(){
        //return browser.isVisible('.ProductList-products') /
        return browser.waitUntil(function(){ return browser.isVisible('.ProductList-products')},5000,"expected product list to appear"); //should change this to something more robust
    }

}

module.exports = new clothingTopsPage();