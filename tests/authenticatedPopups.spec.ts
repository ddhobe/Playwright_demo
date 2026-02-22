import { test, expect, Page } from "@playwright/test";

test("authenticated popups", async ({ browser }) => {
    let context = await browser.newContext();
    let page = await context.newPage();

    // Approach 1--- directly pass login credentials along with url.
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await page.waitForLoadState();//wait until page load completely.

    await page.waitForTimeout(5000)


})

//Approach 2-- pass the login credentials along with context

test("authenticated popups2", async ({ browser }) => {
    let context = await browser.newContext({ httpCredentials: { username: 'admin', password: 'admin' } });


    const page = await context.newPage();

    await page.goto("https://the-internet.herokuapp.com/basic_auth");
   // await page.waitForLoadState();

    await expect(page.locator('text=Congratulations! You must have the proper credentials.')).toBeVisible();
    //await page.waitForTimeout(4000);


})