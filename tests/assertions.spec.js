// @ts-check
const { test, expect } = require('@playwright/test');

test('assertion and locator', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    const inputUsername = page.locator('#user-name');
    await inputUsername.fill('standard_user');
    await expect(inputUsername).toHaveValue('standard_user');

    const inputPasword = page.locator('#password');
    await inputPasword.fill('secret_sauce');
    await expect(inputPasword).toHaveValue('secret_sauce');

    const buttonLogin = page.locator('#login-button');
    await buttonLogin.click();

    const pilihItem = page.locator('#add-to-cart-sauce-labs-backpack');
    await pilihItem.click();

    const clickcart = page.locator('#shopping_cart_container > a');
    await clickcart.click();

    const buttonCheckout = page.locator('#checkout');
    await buttonCheckout.click();

    const inputFirstName = page.locator('#first-name');
    await inputFirstName.fill('Magfira');
    await expect(inputFirstName).toHaveValue('Magfira');

    const inputLastName = page.locator('#last-name');
    await inputLastName.fill('Aini');
    await expect(inputLastName).toHaveValue('Aini');

    const inputZip = page.locator('#postal-code');
    await inputZip.fill('12910');
    await expect(inputZip).toHaveValue('12910');

    const buttonContinue = page.locator('#continue');
    await buttonContinue.click();

    const buttonFinish = page.locator('#finish');
    await buttonFinish.click();

    const buttonBackHome = page.locator('#back-to-products');
    await buttonBackHome.click();

}); 