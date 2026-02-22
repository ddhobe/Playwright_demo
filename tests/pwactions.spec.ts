import { test, expect, Locator } from "@playwright/test";

// input box
test("input action-text", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const textBox = page.locator("#name")
    await expect(textBox).toBeVisible()
    await expect(textBox).toBeEnabled();
    await textBox.fill("John Kenedy");

    await expect(textBox).toHaveValue("John Kenedy")
    // or
    const enteredValue: string = await textBox.inputValue()
    expect(enteredValue).toBe("John Kenedy");
    await page.waitForTimeout(5000)


})

//radio buttons
test("radio buttons actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const maleRadio: Locator = page.locator("#male");
    await maleRadio.check();
    // validation 
    await expect(maleRadio).toBeChecked();
    await page.waitForTimeout(5000)
})


//checkBox
test.only("checkbox action", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //   // select specific checkbox (sunday) using getBylabel and assert it
    //   const sundayCheckBox:Locator=page.getByLabel("sunday");
    //   await sundayCheckBox.check();
    //   await expect (sundayCheckBox).toBeChecked();
    //   await page.waitForTimeout(5000)

    //select all checkboxes and assert it
    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const checkbox: Locator[] = days.map(index => page.getByLabel(index)) //locators of all days
    expect(checkbox.length).toBe(7);

    // //select all 

    //    //usinf for of
    //    for(let cbox of checkbox){
    //     await cbox.check();
    //     await expect(cbox).toBeChecked()
    //    }
    //    await page.waitForTimeout(5000)

    // //usinf for loop
    // for (let i = 0; i < days.length; i++) {
    //     await checkbox[i].check();
    //     await expect(checkbox[i]).toBeChecked()
    // }
    // await page.waitForTimeout(4000)




    // // uncheck last 3 checkboxes
    // // using for of loop
    // for(const cbox of checkbox.slice(-3)){
    //     await cbox.uncheck()
    //     await expect(cbox).not.toBeChecked()
    // }

    // // using for loop
    // for(let i=checkbox.length-1;i>=4;i--){
    //     await checkbox[i].uncheck();
    //     await expect (checkbox[i]).not.toBeChecked()
    // }
    // await page.waitForTimeout(4000)




    // //toggle checkboxes-- if checked then unchecked,and if unchecked then checked. assert state flipped
    // // using for loop
    // for(let i=0;i<checkbox.length;i++){
    //     let dayy=checkbox[i]
    //     if(await dayy.isChecked()){
    //         await dayy.uncheck();
    //         await expect(dayy).not.toBeChecked();
    //     }
    //     else{
    //         //dayy is already unchecked then check
    //         await dayy.check();
    //         await expect(dayy).toBeChecked()
    //     }
    // }



    // // randomly check by using index
    // const indNum=[1,3,6];
    // for(let i=0;i<indNum.length;i++){
    //     let index=indNum[i];
    //     await checkbox[index].check();
    //     await expect(checkbox[index]).toBeChecked()

    // }


    //select the checkboxes based on label
    const dayName="Friday";
    for(let i=0;i<days.length;i++){
        if(days[i].toLowerCase()===dayName.toLowerCase()){
            const fday=page.getByLabel("Friday")
            await fday.check();
            await expect (fday).toBeChecked()
        }
    }



    await page.waitForTimeout(5000)



})