import {test,expect, Locator} from "@playwright/test"
//dynamic/autosuggest dropdown
test("dynamic or autosuggest dropdown",async ({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.locator('[type="text"]').fill("smart");
    await page.waitForTimeout(5000);

    // get all suggested options
    const option:Locator=page.locator("ul>li");
    const count=await option.count();
    console.log("number of suggested options",count);

    // //print all suggested option in a console
    // for(let i=0;i<count;i++){
    //    const text= await option.nth(i).innerText();
    //    console.log(text)
    // }

    // // print specific option based on its index
    // console.log(await option.nth(5).innerText());

    // select a smartphone option
    for(let i=0;i<count;i++){
        const text=await option.nth(i).innerText();
        if( text==="smartphone"){
            option.nth(i).click();
            break;
        }
    }
    await page.waitForTimeout(3000)

})