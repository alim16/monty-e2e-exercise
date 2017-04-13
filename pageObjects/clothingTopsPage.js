var basepage = require('./basepage')

class clothingTopsPage extends basepage{

     constructor(){
        super()
     }
    
    gotoPage () {
    super.gotoPage('en/tsuk/category/clothing-427/tops-443');
    }

    // openFilterMenu() {browser.waitUntil(function(){ return browser.click('.Filters-refineButton')},5000,"expected filter menu to appear")};
    openFilterMenu() {browser.click('.Filters-refineButton')};
    selectOptionToFilterBy(option) {
        browser.waitForExist(".Filters-row",5000)
       browser.click('//*[@id="root"]/div/div[2]/div[3]//div[2]//header//span[text()="'+option+'"]'); //refactor later
       //shortest working one: '//*[@id="root"]/div/div[2]/div[3]//div[2]//header//span[text()="Colour"]'
    };
     filterByColour(colour) {
       // browser.waitForExist(".Filters-row",5000)
       colour = colour.toLowerCase();
         return browser.click('//*[@id="root"]/div/div[2]/div[3]//div[2]/div[3]//div[2]/article[1]/div[2]//button/span[text()="'+colour+'"]') //refractor later
         // shortest:'//*[@id="root"]/div/div[2]/div[3]//div[2]/div[3]//div[2]/article[1]/div[2]//button/span[text()="black"]'
    };

    applyFilters(){ browser.click('.Refinements-applyButton') }
    clearFilters(){ browser.click('.Refinements-clearButton') }

    filterCount(){
        browser.pause(2)
        return browser.getText('.Filters-refineButton span').replace(/[()]/g,"");
    }

    listOfProductsVisible(){
        //return browser.isVisible('.ProductList-products') //should change this later
        return browser.waitUntil(function(){ return browser.isVisible('.ProductList-products')},5000,"expected product list to appear");
    }

}

 
module.exports = new clothingTopsPage();