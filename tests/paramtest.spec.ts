//parameterization,data driven testing;

import{test,expect} from "@playwright/test";

const searchItems:string[]=['laptop','gift card','smartphone','monitor'];

////using  for-of loop
// for(let item of searchItems){
//     test(`searh test for ${item}`,async({page})=>{
//         await page.goto('https://demowebshop.tricentis.com/');
//         await page.locator('[id="small-searchterms"]').fill(item);
//         await page.locator('[value="Search"]').click();
//         await expect.soft(page.locator('h2 a').nth(0)).toContainText(item ,{ignoreCase:true})
//     })
// }


//using for-each

searchItems.forEach((item)=>{
    test(`searh test for ${item}`,async({page})=>{
        await page.goto('https://demowebshop.tricentis.com/');
        await page.locator('[id="small-searchterms"]').fill(item);
        await page.locator('[value="Search"]').click();
        await expect.soft(page.locator('h2 a').nth(0)).toContainText(item ,{ignoreCase:true})
    })
    
})

