import { Selector, t } from "testcafe";

class checkOutPage{
    constructor(){
        this.firstname = Selector('#first-name');
        this.lastname= Selector('#last-name');
        this.zip = Selector('#postal-code');
        this.continueButton = Selector('#continue');
        
    }

    async setFirstname(first){
        await t
            .typeText(this.firstname, first);
            
    };

    async setLastname(last){
        await t
            .typeText(this.lastname, last);
            
    };

    async setZip(zipcode){
        await t
            .typeText(this.zip, zipcode);
            
    };


    async clickContinueButton(){
        await t
            .click(this.continueButton)
    }

  }
    export default new checkOutPage();