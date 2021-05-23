const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignOutPage extends Page {
    /**
     * define selectors using getter methods
     */
        
    get NameDetails () { return $('//*[@id="header"]/div[2]/div/div/nav/div[1]/a/span') }
    get signOutBtn () { return $('//*[@id="header"]/div[2]/div/div/nav/div[2]/a') }
     
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async signout () {
        await (await this.NameDetails).getText();
        await (await this.signOutBtn).click();
    }

   
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('signout');
    }
}

module.exports = new SignOutPage();
