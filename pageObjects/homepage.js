var basepage = require('./basepage')

class homepage extends basepage{
     get hasLogo() {return browser.isVisible('.BrandLogo-img')};
    

     constructor(){
        super();
     }
    
    gotoPage () {
    super.gotoPage("");
    }
     clickBurgerButton() {return browser.click('.BurgerButton')};

    

}

module.exports = new homepage();

/*
export const gotoPage = () => {
    browser.url('/')
}

export const hasLogo = () => {
    browser.isVisible(".BrandLogo-img")
}

*/