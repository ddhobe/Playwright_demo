import { test, expect } from "@playwright/test";

//single select dropdown 
test("single select dropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    // select country from dropdown
    // await page.locator("#country").selectOption("India")//by visible text
    // await page.locator("#country").selectOption({value:"india"})//by value attribute
    //   await page.locator("#country").selectOption({label:"India"})//by label
    await page.locator("#country").selectOption({ index: 4 })// by index  (France)

    //check numbers of options in dropdown

    const dropDownOptions=page.locator("#country>option")
    await expect(dropDownOptions).toHaveCount(10);
    
   //check an option present in a dropdown
    const optionText:string[]=(await dropDownOptions.allTextContents())
                       .map(text=>text.trim())
     expect(optionText).toContain("India");


     // print all option from dropdown
    //  //using for of loop
    //  for(const option of optionText){
    //     console.log(option)
    //  }

    // using for loop
    for(let i=0;i<optionText.length;i++){
        console.log(optionText[i])
    }





    await page.waitForTimeout(4000)
})