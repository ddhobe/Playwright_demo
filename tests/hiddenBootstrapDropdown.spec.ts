import{test,expect}from "@playwright/test"
test("bootstrap hidden dropdown", async({page})=>{
   // test.setTimeout(50000)
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //login steps
    await page.locator('[name="username"]').fill("Admin");
    await page.locator('[name="password"]').fill('admin123');
    await page.locator ('[type="submit"]').click();

    // click on PIM
    await page.locator(".oxd-main-menu-item.active").click()
    
    //click on job title 
    await page.locator('form is').nth(2).click();
    await page.waitForTimeout(3000)
})