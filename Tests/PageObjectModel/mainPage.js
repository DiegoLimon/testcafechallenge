import { Selector, t } from "testcafe";

class mainPage{
    constructor(){
        this.logOutUser = Selector('#logout_sidebar_link');
        this.sortContainer = Selector('.product_sort_container');
        this.product1 = Selector('#add-to-cart-sauce-labs-backpack');
        this.product2 = Selector('#add-to-cart-sauce-labs-bolt-t-shirt');
        this.product3 = Selector('#add-to-cart-sauce-labs-onesie');
        this.product4 = Selector('#add-to-cart-sauce-labs-fleece-jacket');
        this.productLabel = Selector('.title');
        this.burguerButton = Selector('#react-burger-menu-btn');
        this.carLink = Selector('.shopping_cart_link');

    }

    async clickLogOutbutton(){
        await t
            .click(this.logOutUser)
    }

    async clickBurguerbutton(){
        await t
            .click(this.burguerButton)
    }

    async clickSortbutton(){
        const option = this.sortContainer.find('option');
        await t
            .click(this.sortContainer)
            .click(option.withText('Price (low to high)'))
    }


    async clickAddProductButton(){
        await t
            .click(this.product3)
    }

    async clickAddMultipleProductButton(){
      
        await t
        .click(Selector('button').withText('ADD TO CART'))
        .click(Selector('button').withText('ADD TO CART'))
        .click(Selector('button').withText('ADD TO CART'))
        
    }

    async clickCartButton(){
        await t
            .click(this.carLink)
    }

}

export default new mainPage();