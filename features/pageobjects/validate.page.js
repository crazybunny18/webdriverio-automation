const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ValidatePage extends Page {
    /**
     * define selectors using getter methods
     */
    get totalProductPrice () { return $('//*[@id="total_product"]') }
    
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async checkout () {
        await (await this.totalProductPrice).click();
       
    }

   
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('validate');
    }
}

module.exports = new ValidatePage();
