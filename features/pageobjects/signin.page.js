const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignInPage extends Page {
    /**
     * define selectors using getter methods
     */
    get enterEmail () { return $('//*[@id="email"]') }
    get enterPassword () { return $('//*[@id="passwd"]')}
    get clickSignInBtn () { return $('//*[@id="SubmitLogin"]/span')}

    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async signin (emailID, password) {
        await (await this.enterEmail).setValue(emailID);
        await (await this.enterPassword).setValue(password);
        await (await this.clickSignInBtn).click();
    }

   
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('signin');
    }
}

module.exports = new SignInPage();
