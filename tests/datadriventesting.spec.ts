import{test,expect} from "@playwright/test";
const loginTestData:string[][]=[
    ['laura.taylor1234@example.com','test123','valid'],
    ['invaliduser@example.com','test123','invalid'],
    ['validuser@example.com','testxyz','invalid'],
    [' ',' ','invalid']
] 

for(const [email,password,validity] of loginTestData){
    test(`login test for ${email} and ${password}`,async({page})=>{
        await page.goto('https://demowebshop.tricentis.com/login');
        
        //fill login form
        await page.locator('[class="email"]').fill(email);
        await page.locator('[class="password"]').fill(password);
        await page.locator('[class="button-1 login-button"]').click();

        if(validity.toLowerCase()==='valid'){
            //assert logout link is visible--( it indicate successful login )

            const logOutLink=page.locator('[href="/logout"]');
            await expect(logOutLink).toBeVisible();
        }
        else{
            //assert error msg is visible
            const errormsg= page.locator('.validation-summary-errors');
            await expect(errormsg).toBeVisible();

            //assert user still on login page
            await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
        }


    })
}