const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');
const RegisterPage = require('../pageobjects/register.page');
const SignOutPage = require('../pageobjects/signout.page');
const SignInPage = require('../pageobjects/signin.page');
const AddProductPage = require('../pageobjects/addproduct.page');
const CheckOutPage = require('../pageobjects/checkout.page');
const ValidatePage = require('../pageobjects/validate.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage,
    register: RegisterPage,
    signout: SignOutPage,
    signin: SignInPage,
    addproduct: AddProductPage,
    checkout : CheckOutPage,
    validate : ValidatePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (.*)$/, async (emailID) => {
    await LoginPage.login(emailID)
});

When(/^I register with (.*), (.*), (.*), (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*) and (.*)$/, async (firstName, lastName, password, DOBDD, DOBMM, DOBYY, company, address, address2, city, state, zip, country, additionalInfo, homephone, mobile, addressalias) => {
    await RegisterPage.register(firstName, lastName, password, DOBDD, DOBMM, DOBYY, company, address, address2, city, state, zip, country, additionalInfo, homephone, mobile, addressalias)
});

Then(/^I should Sign Out$/, async () => {
    await SignOutPage.signout()
});

Then(/^I should Sign In again with (.*) and (.*)$/, async (emailID, password) => {
    await SignInPage.signin(emailID, password)
});
    
Then(/^I should add a product to the cart$/, async () => {
    await AddProductPage.addproduct()
});

Then(/^I should proceed to checkout and continue till payment$/, async () => {
    await CheckOutPage.checkout()
});

Then(/^I should validate on the payment page if the product details are correct$/, async () => {
    await ValidatePage.validate()
});

