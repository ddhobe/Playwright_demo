import { test, expect } from '@playwright/test'

test('setup demo', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //validate dashboard text is visible or not

    const text = await page.locator('[class="oxd-topbar-header-breadcrumb"]');
    await expect(text).toBeVisible();

})

test("setup demo 2", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     
    //click on leaves
    const leaves=await page.locator('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > span:nth-child(2)');
    await leaves.click();
})