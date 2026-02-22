import{test,expect} from "@playwright/test";
test("Autowaiting and forcing",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    //assertions-auto wait(5 sec);
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
    await expect(page.locator('[alt="Tricentis Demo Web Shop"]')).toBeVisible();

    // auto waits for the action(30 sec);
    await page.locator('[value="Search store"]').fill('laptop');
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");

    // click a search button using force=true
    //await page.locator('[class="button-1 search-box-button valid"]').click();
    await page.waitForTimeout(3000);


})