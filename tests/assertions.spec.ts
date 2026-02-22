import{test,expect} from "@playwright/test";
test("Playwright assertions demo",async({page})=>{
     await page.goto("https://demowebshop.tricentis.com/");

    //  case-1 auto retrying assertions(automatically retries until it passed or timeouts);
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");//wait for correct url.

    // auto retry wait for the elements to be visible and have the expected text
    await expect(page.locator('[class="topic-html-content-header"]')).toBeVisible();
    await expect(page.locator('div[class="product-grid home-page-product-grid"] strong')).toHaveText("Featured products")

    //case-2 non-retrying assertions (execute immediatly, no retry)

    const title=await page.title()
     expect (title.includes('Demo Web Shop')).toBeTruthy();

     const welcometext=await page.locator('text=Welcome to our store').textContent();
     expect (welcometext).toContain("Welcome")


     // negative matcher
     expect(page.locator('text=Welcome to our storeAAA')).not.toBeVisible();
     expect(welcometext).not.toContain('welcomee')

     await page.waitForTimeout(5000)
})