import {test,expect} from "@playwright/test";

// handle popups
test("handles Popups",async({browser})=>{
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://testautomationpractice.blogspot.com/");


//multiple popups
// page.waitForEvent('popup');
//await page.locator("#popup").clock()

// combine above 2 statements
await Promise.all([page.waitForEvent("popup"),page.locator('[id="PopUp"]').click()]);

const allPopups= context.pages();

console.log("number of pages/windows",allPopups.length);

console.log(allPopups[0].url());//return url of main page.
console.log(allPopups[1].url());//
//console.log(allPopups[2].url());

await page.waitForTimeout(5000)

for (let pw of allPopups){
    const title=await pw.title();
    if(title.includes("Selenium")){
        await pw.locator('[class="navbar-toggler"]').click();
        
    }
    else{
        console.log("can't find Selenium page/title");
    }
    
    //close the popups
    await pw.close();
   // await page.waitForTimeout(3000);
}






}) 