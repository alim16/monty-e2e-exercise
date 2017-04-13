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
        browser.click('//*[@id="root"]/div/div[2]/div[3]//div[2]//header//span[text()="'+option+'"]'); //refactor
    };
     filterByColour(colour) {
         colour = colour.toLowerCase();
         // can't get it to work with normal selector probably because of iframe or something
         return browser.click('//*[@id="root"]/div/div[2]/div[3]//div[2]/div[3]//div[2]/article[1]/div[2]//button/span[text()="'+colour+'"]') //refactor
         //return browser.click('//header//span[text()=Black]')
         //return browser.frame(1).click('*=Black') 
         // $x("//header//span[contains(@class, 'RefinementList-label') and .//text()='Black']")
    };

    applyFilters(){ browser.click('.Refinements-applyButton') }
    clearFilters(){ browser.click('.Refinements-clearButton') }

    filterCount(){
        browser.pause(2)
        return browser.getText('.Filters-refineButton span').replace(/[()]/g,"");
    }

    listOfProductsVisible(){
        //return browser.isVisible('.ProductList-products') /
        return browser.waitUntil(function(){ return browser.isVisible('.ProductList-products')},5000,"expected product list to appear"); //should change this to something more robust
    }

}

module.exports = new clothingTopsPage();