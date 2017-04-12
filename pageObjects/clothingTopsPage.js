var basepage = require('./basepage')

class clothingTopsPage extends basepage{

     constructor(){
        super()
     }
    
    gotoPage () {
   // browser.url('/en/tsuk/category/clothing-427/tops-443')
    super.gotoPage('en/tsuk/category/clothing-427/tops-443');
    }

    // openFilterMenu() {browser.waitUntil(function(){ return browser.click('.Filters-refineButton')},5000,"expected filter menu to appear")};
    openFilterMenu() {browser.click('.Filters-refineButton')};
     filterByOption(txt) {return browser.click('div*='+txt)};

}

module.exports = new clothingTopsPage();