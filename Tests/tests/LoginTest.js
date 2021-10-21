
import loginPage from "../PageObjectModel/loginPage";
import MainPage from '../PageObjectModel/mainPage';

const dataSet = require('../DataProvider/data.json');
const invalidDataSet = require('../DataProvider/invalidData.json');




dataSet.forEach(data => {
    fixture`Loging page test`
    .page`https://www.saucedemo.com/`;

    test(`Form - succesfully user login - ${data.expectedTitle}`, async t => {
        loginPage.setUsername(data.username)
        loginPage.setPassword(data.password)
        loginPage.clickLoginButton();
        await t
            .expect(MainPage.productLabel.exists).ok()  // check if a label exists,  label is only visible in main page after logged 
            .wait(5000)


    });


});

invalidDataSet.forEach(invalidData => {
    fixture`Loging page test invalida data`
    .page`https://www.saucedemo.com/`;


    test(`Form - wrong user & password login - ${invalidData.expectedMessage}`, async t => {
        loginPage.setUsername(invalidData.username)
        loginPage.setPassword(invalidData.password)
        loginPage.clickLoginButton();
        await t
            .expect(loginPage.errorMessage.innerText).contains(invalidData.expectedMessage)
            .wait(5000)


    });

});











