//import{test,expect} from "@playwright/test";

// sort the colors
//test("sorted dropdown",async ({page})=>{
    // const dropDownOptions=page.locator("#colors>option")
    // await page.waitForTimeout(5000)
    // const optionText:string[]=(await dropDownOptions.allTextContents())
    // .map(text=>text.trim())

    //  //await expect(optionText.length).toBe(7)

    // //sort 
    // //const originalArray:string[]=[...optionText];//copy of original array
    // const sortedArray:string[]=[...optionText].sort()
    //   expect(optionText).toEqual(sortedArray);  // 🔥 actual verification

    // console.log(sortedArray)

//})



    import { test, expect } from "@playwright/test";

test("sorted dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const dropDownOptions = page.locator("#animals>option");

  await expect(dropDownOptions).toHaveCount(10); // auto-waits

  const optionText: string[] = (await dropDownOptions.allTextContents())
    .map(text => text.trim());

  const originalArray:string[]=[...optionText];//copy of original array
  const sortedArray = [...optionText].sort() ;
  console.log(sortedArray)

  expect(originalArray).toEqual(sortedArray);
});



