const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    get selectCategory () { return $('//*[@id="block_top_menu"]/div') }
    get selectTShirt () { return $('//*[@id="block_top_menu"]/ul/li[3]/a')}
    get tShirtPrice () { return $('//*[@id="center_column"]/ul/li/div/div[2]/div[1]/span')}
    get selectAddToCart () { return $('//*[@id="center_column"]/ul/li/div/div[2]/div[2]/a[1]/span')}
      
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async addproduct () {
        await (await this.selectCategory).click();
        await (await this.selectTShirt).click();
        await (await this.tShirtPrice).click();
        await (await this.selectAddToCart).click();
        
    }

   
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('addproduct');
    }
}

module.exports = new AddProductPage();
