import newLoginLocators from "../locator/newLoginLocators";
import { expect } from "@playwright/test";
export default class newLoginActions{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page;
        this.newLoginLocators = new newLoginLocators();
        this.inputUsername = page.locator(this.newLoginLocators.inputUsername);
        this.inputPassword = page.locator(this.newLoginLocators.inputPassword);
        this.clickButton = page.locator(this.newLoginLocators.clickButtonLogin);
        this.pilihItem = page.locator(this.newLoginLocators.pilihItem);
        this.clickcart = page.locator(this.newLoginLocators.clickCart);
        this.clickButtonCheckout = page.locator(this.newLoginLocators.clickButtonCheckout);
        this.inputFirstName = page.locator(this.newLoginLocators.inputFirstName);
        this.inputLastName = page.locator(this.newLoginLocators.inputLastName);
        this.inputPostCode = page.locator(this.newLoginLocators.InputPostCode);
        this.buttonContinue = page.locator(this.newLoginLocators.buttonContinue);
        this.buttonFinish = page.locator(this.newLoginLocators.buttonFinis);
        this.buttonBackHome = page.locator(this.newLoginLocators.buttonBackHome);

    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async InputLogin() {
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.clickButton.click();

    }

    async addItem() {
        await this.pilihItem.click();
    }

    async cart(){
        await this.clickcart.click();
    }

    async checkout(){
        await this. clickButtonCheckout.click();
    }

    async inputUser(){
        await this.inputFirstName.fill('Magfira');
        await expect(this.inputFirstName).toHaveValue('Magfira');
        await this.inputLastName.fill('Aini');
        await expect(this.inputLastName).toHaveValue('Aini');
        await this.inputPostCode.fill('12910');
        await expect(this.inputPostCode).toHaveValue('12910')
    }

    async continue (){
        await this.buttonContinue.click();
    }

    async Finish (){
        await this.buttonFinish.click();
    }

    async BackHome (){
        await this.buttonBackHome.click();
    }
}