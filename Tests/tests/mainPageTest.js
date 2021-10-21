import { t } from "testcafe";
import checkOutPage from "../PageObjectModel/checkOutPage";
import loginPage from "../PageObjectModel/loginPage";
import MainPage from '../PageObjectModel/mainPage';
import shoppingCart from "../PageObjectModel/shoppingCart";
import overViewPage from "../PageObjectModel/overViewPage";

const dataSet = require('../DataProvider/data.json');
const userData = require('../DataProvider/userInfo.json')



dataSet.forEach(data => {

    fixture`Logout page test`
    .page`https://www.saucedemo.com/`;

    test(`LOG OUT USER FROM MAIN PAGE`, async t =>{

        loginPage.setUsername(data.username)
        loginPage.setPassword(data.password)
        loginPage.clickLoginButton();

        MainPage.clickBurguerbutton();
        await t.wait(1000)
        MainPage.clickLogOutbutton();
        await t
        .wait(1000)
        .expect(loginPage.userNameInput.exists).ok();
        

    });

});

fixture`sort product page test`
    .page`https://www.saucedemo.com/`;

 test(`SORT PRODUCTS`, async t =>{

    loginPage.setUsername('standard_user')
    loginPage.setPassword('secret_sauce')
    loginPage.clickLoginButton();

    MainPage.clickSortbutton();
    await t
    .wait(1000)
    .expect(MainPage.sortContainer.value).eql('lohi')
    .wait(2000)

});

fixture`select multiple products to cart page test`
    .page`https://www.saucedemo.com/`;

 test(`SELECT MULTIPLE PRODUCTS`, async t =>{

    loginPage.setUsername('standard_user')
    loginPage.setPassword('secret_sauce')
    loginPage.clickLoginButton();

    MainPage.clickAddMultipleProductButton();
  await t.wait(5000);  

});


fixture`select specific product`
    .page`https://www.saucedemo.com/`;

 test(`SELECT SPECIFIC PRODUCT`, async t =>{

    loginPage.setUsername('standard_user')
    loginPage.setPassword('secret_sauce')
    loginPage.clickLoginButton();

    MainPage.clickAddProductButton();
  await t.wait(3000)
  MainPage.clickCartButton()
  await t.wait(3000)
  .expect(shoppingCart.labelproduct.exists).ok();
});

fixture`complete a purchase`
    .page`https://www.saucedemo.com/`;

 test(`COMPLETE PURCHASE PAGE`, async t =>{

    loginPage.setUsername('standard_user')
    loginPage.setPassword('secret_sauce')
    loginPage.clickLoginButton();

    MainPage.clickAddProductButton();
  await t.wait(2000)
  MainPage.clickCartButton()
  await t.wait(2000)
  shoppingCart.clickCheckoutButton();
  await t.wait(2000)

  checkOutPage.setFirstname('diego');
  checkOutPage.setLastname('limon');
  checkOutPage.setZip('44890');
  await t.wait(3000);

  checkOutPage.clickContinueButton();
  await t.wait(2000);

  overViewPage.clickFinishButton();
  await t.wait(1000)
  .expect(overViewPage.thankyouLabel.exists).ok();
  await t.wait(2000);
  
});
