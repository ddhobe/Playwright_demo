
/*
open app

     log in
          found product
    log out


    log in
        add product to the cart
    log out

close app
*/

import {test,expect,Page} from "@playwright/test";

// open app
let page:Page;
test.beforeAll("open app",async ({browser})=>{
    const context=await browser.newContext();
    page= await context.newPage();
    await page.goto('https://www.demoblaze.com/index.html')
})

//close the app
test.afterAll("closing app",async()=>{
    await page.close()
})

//login app

test.beforeEach("login app",async()=>{
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator('[onclick="logIn()"]').click();
    await page.waitForTimeout(5000);
})


//logout app
test.afterEach('log out',async()=>{
    await page.locator('#logout2').click();
})

//find number of products

test('find number of products',async()=>{
    const products=page.locator('#tbodyid .hrefch')
    const count=await products.count();
    console.log('number of products', count);
    await expect(products).toHaveCount(9);
})

// add product to the cart

test("add product to the cart",async()=>{
    await page.locator("text='Samsung galaxy s7'").click();

    //handle alert before the click
    page.on('dialog',async(dialog)=>{
        expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    })
    await page.locator('[onclick="addToCart(4)"]').click();
})


