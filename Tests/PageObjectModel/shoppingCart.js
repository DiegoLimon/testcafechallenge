import { Selector, t } from "testcafe";

class shoppingCart{
    constructor(){
        this.labelproduct = Selector('.inventory_item_name');
        this.checkoutButton = Selector('#checkout');
        
    }


    async clickCheckoutButton(){
        await t
            .click(this.checkoutButton)
    }

  }
    export default new shoppingCart();