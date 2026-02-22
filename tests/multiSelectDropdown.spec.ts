import{test,expect, Locator} from "@playwright/test";
test("multiselect dropdown", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // select multiple options from dropdown
 //await page.locator("#colors").selectOption(['Red','Blue','Green']) // by visible text
// await page.locator("#colors").selectOption(['red','green','white'])//by value attr
//  await page.locator("#colors").selectOption([{label:'Red'},{label:'Green'}])//by label
  await page.locator("#colors").selectOption([{index:0},{index:4}])

  // check all options(count) in a dropdown
    const dropdownOption:Locator= page.locator("#colors>option")
    await expect (dropdownOption).toHaveCount(7)

    //check Green option present in a dropdown
    const optionText:string[]=(await dropdownOption.allTextContents())
          .map(text=>text.trim())
          console.log(optionText)
          expect(optionText).toContain("Green")

    // print option from optionText array
    for(let option of optionText){
        console.log(option)

    }
})