import { Selector, t } from "testcafe";

class overViewPage{
    constructor(){
        this.finish = Selector('#finish');
        this.thankyouLabel = Selector('.complete-header');
    }


    async clickFinishButton(){
        await t
            .click(this.finish)
    }

  }
    export default new overViewPage();