import { Selector, t } from "testcafe";

class completeOrder{
    constructor(){
        this.backToProductsPage = Selector('#back-to-products');
        

    }
}

export default new completeOrder();