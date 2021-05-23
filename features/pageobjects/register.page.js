const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get titleRadioBtn () { return $('//*[@id="id_gender1"]') }
    get firstNameBox () { return $('//*[@id="customer_firstname"]')}
    get lastNameBox () { return $('//*[@id="customer_lastname"]')}
    get passwordBox () { return $('//*[@id="passwd"]') }
    get DOBDDDropdown () { return $('//*[@id="days"]')}
    get DOBMMDropdown () { return $('//*[@id="months"]')}
    get DOBYYDropdown () { return $('//*[@id="years"]') }
    get companyBox () { return $('//*[@id="company"]')}
    get addressBox () { return $('//*[@id="address1"]')}
    get addressLine2Box () { return $('//*[@id="address2"]')}
    get cityBox () { return $('//*[@id="city"]')}
    get stateDropdown () { return $('//*[@id="id_state"]') }
    get zipBox () { return $('//*[@id="postcode"]')}
    get countryDropdown () { return $('//*[@id="id_country"]')}
    get additionalInfoBox () { return $('//*[@id="other"]')}
    get homePhoneBox () { return $('//*[@id="phone"]')}
    get mobileBox () { return $('//*[@id="phone_mobile"]')}
    get addressaliasBox () { return $('//*[@id="alias"]')}
    get RegisterBtn () { return $('//*[@id="submitAccount"]/span')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async register (firstName, lastName, password, DOBDD, DOBMM, DOBYY, company, address, address2, city, state, zip, country, additionalInfo, homephone, mobile, addressalias) {
        await (await this.titleRadioBtn).click();
        await (await this.firstNameBox).setValue(firstName);
        await (await this.lastNameBox).setValue(lastName);
        await (await this.passwordBox).setValue(password);
        await (await this.DOBDDDropdown).selectByIndex(4);
        await (await this.DOBMMDropdown).selectByIndex(4);
        await (await this.DOBYYDropdown).selectByIndex(4);
        await (await this.companyBox).setValue(company);
        await (await this.addressBox).setValue(address);
        await (await this.addressLine2Box).setValue(address2);
        await (await this.cityBox).setValue(city);
        await (await this.stateDropdown).selectByIndex(5);;
        await (await this.zipBox).setValue(zip);
        await (await this.countryDropdown).selectByIndex(1);
        await (await this.additionalInfoBox).setValue(additionalInfo);
        await (await this.homePhoneBox).setValue(homephone);
        await (await this.mobileBox).setValue(mobile);
        await (await this.addressaliasBox).setValue(addressalias);
        await (await this.RegisterBtn).click();
        await (await this.passwordBox).setValue(password);
        await (await this.RegisterBtn).click();
       
    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('register');
    }
}

module.exports = new RegisterPage();
