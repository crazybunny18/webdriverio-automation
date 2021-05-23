const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get signInBtn () { return $('//*[@id="header"]/div[2]/div/div/nav/div[1]/a') }
    get emailIDBox () { return $('//*[@id="email_create"]')}
    get createAnAccountBtn () { return $('//*[@id="SubmitCreate"]/span')}

    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async login (emailID) {
        await (await this.signInBtn).click();
        await (await this.emailIDBox).setValue(emailID);
        await (await this.createAnAccountBtn).click();
    }

   
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
