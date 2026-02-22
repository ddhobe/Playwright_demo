import test, { expect } from "@playwright/test";

test("Timeouts",async({page})=>{

    //set the timeout for sigle perticular test
    test.setTimeout(35000);//prefer
   // test.slow()//tripple the timeouts for the test

    await page.goto("https://demowebshop.tricentis.com/");
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:20000});
    await expect(page.locator('[alt="Tricentis Demo Web Shop"]')).toBeVisible({timeout:5000})

    // type product in the search box
    await page.locator('[value="Search store"]').fill("laptop");
    await page.locator('[value="Search"]').click();

    await page.waitForTimeout(5000);

})