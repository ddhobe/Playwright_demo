
import{test,expect} from  "@playwright/test";
test("hard vs soft assertions",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    // hard assertions(stop the execution immediately if test fail)
    await expect(page).toHaveTitle("Demo Web Shop");

    const logo=page.locator('[alt="Tricentis Demo Web Shop"]');
    await expect(logo).toBeVisible();

    // soft assertions  (soft assertions record the failure but keep continue the executions)
    // fail the assertions intensionaly to check soft assertions

    await expect(page).toHaveTitle("Demo Web Shop2222");//change title name

    const logo1=page.locator('[alt="Tricentis Demo Web Shop222222"]');// change locator
    await expect(logo1).toBeVisible();

    await page.waitForTimeout(5000)

     

})