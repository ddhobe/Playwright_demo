import { test, expect, Locator } from "@playwright/test";
test("read data from the data table", async ({ page }) => {
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    let hasMorePages = true;
    // while(hasMorePages){
    //     const rows=await page.locator("#example tbody tr").all()
    //     for(let row of rows){
    //         //console.log(await row.innerText());
    //         console.log("all rows data fetched")
    //     }
    // }


    // to click on next icon(>) to navigate next page.
    const nextButton = page.locator('[data-dt-idx="next"]');
    const isDisabled = await nextButton.getAttribute("class");

    if (isDisabled?.includes("disabled")) {
        hasMorePages = false;
    }
    else {
        nextButton.click()
    }
    await page.waitForTimeout(5000);

})


// filter the rows and check row count.
test("filter and count the rows", async ({ page }) => {
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");


    // get locator of filter
    const dropdown: Locator = page.locator('[id="dt-length-0"]');
    // await dropdown.selectOption({label:"50"})
    await dropdown.selectOption('50')

    //validate the table having 50 rows or not.
    const rows = await page.locator("#example tbody tr").all()
    await expect(rows.length).toBe(50);
    await page.waitForTimeout(5000)
})



//search specific data in a table.
test.only("search specific data", async ({ page }) => {
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const searchBox=page.locator("#dt-search-0");
    await searchBox.fill("Paul Byrd");
    await page.waitForTimeout(5000);
    const rows=await page.locator('#example tbody tr').all();
    
    
    if(rows.length>=1){
        let matchfound=false;
        for(let row of rows){
            let text=await row.innerText();
            if(text.includes("Paul Byrd")){
                console.log("entry found")
                matchfound=true;
                break;
            }
        }
    }
    else{
        console.log("no rows found with search text")
    }


})