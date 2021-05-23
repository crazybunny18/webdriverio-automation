const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get selectProceedToCheckout () { return $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span') }
    get selectProceedToCheckout2 () { return $('//*[@id="center_column"]/p[2]/a[1]/span')}
    get selectProceedToCheckout3 () { return $('//*[@id="center_column"]/form/p/button/span')}
    get iAgreeOption () { return $('//*[@id="cgv"]')}
    get selectProceedToCheckout4 () { return $('//*[@id="form"]/p/button/span')}
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async checkout () {
        await (await this.selectProceedToCheckout).click();
        await (await this.selectProceedToCheckout2).click();
        await (await this.selectProceedToCheckout3).click();
        await (await this.iAgreeOption).click();
        await (await this.selectProceedToCheckout4).click();
    }

   
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('checkout');
    }
}

module.exports = new CheckOutPage();
