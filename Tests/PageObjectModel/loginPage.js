import { Selector, t } from 'testcafe';

class loginPage{
    constructor(){
        this.userNameInput = Selector('#user-name');
        this.userPasswordInput = Selector('#password');
        this.submitButton = Selector('#login-button');
        this.errorMessage = Selector('.error-message-container.error');
       
        
    }

    async setUsername(username){
        await t
            .typeText(this.userNameInput, username);
            
    };

    async setPassword(password){
        await t
            .typeText(this.userPasswordInput, password);
           
    };

    async clickLoginButton(){
        await t
            .click(this.submitButton);
    };



}

export default new loginPage();