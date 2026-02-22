import{test,expect, chromium} from "@playwright/test";

// browserr context

test("browser context demo",async()=>{
    const browser=await chromium.launch();//create browser
    const context=await browser.newContext();//create browser

    //creating 2 pages
    const page1=await context.newPage();
    const page2=await context.newPage();

    console.log("number of pages created",context.pages().length);

    await page1.goto("https://playwright.dev");
    await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

    await page2.goto("https://www.selenium.dev/");
    await expect(page2).toHaveTitle("Selenium");

    await page1.waitForTimeout(3000);
    await page2.waitForTimeout(3000);

})


