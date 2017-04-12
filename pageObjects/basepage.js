"use strict"

class basepage {
 

     constructor(){
        
     }
    
    gotoPage (path) {
    browser.url('/' + path)
    }

  
}

module.exports = basepage;