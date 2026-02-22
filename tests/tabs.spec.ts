import{test,expect, chromium} from "@playwright/test";
//handle tabs

test("handle tabs",async()=>{
    const browser=await chromium.launch();//cerate browser
    const context=await browser.newContext();//create browser

    // creating pages
    const parentPage=await context.newPage();
    await parentPage.goto("https://testautomationpractice.blogspot.com/");
    const [childPage]=await Promise.all([context.waitForEvent("page"),parentPage.locator('[onclick="myFunction()"]').click()])


    //Approach1--switch between pages and get title(using context)
    const pages=context.pages();// return an array
    console.log("number of pages created",pages.length);

    console.log("title of the Parent Page:",await pages[0].title());//title of 1st page
    console.log("title of the child page:", await pages[1].title());//title of the 2nd page

    //or
    console.log("title of the Parent Page:",await parentPage.title());//title of 1st page
    console.log("title of the child page:", await childPage.title());//title of the 2nd page


    await parentPage.waitForTimeout(3000);



})