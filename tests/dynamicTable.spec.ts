import { test, expect, Locator } from "@playwright/test";
//dynamic web table and pagination
test("dynamic web table", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/dynamic-table");
    const table: Locator = page.locator(".table tbody");
    await expect(table).toBeVisible();

    //select all rows and then find number of rows in a table
    const rows: Locator[] = await table.locator("tr").all()
    console.log("number of rows in a table", rows.length);
    expect(rows).toHaveLength(4);

    // step 1--for chrome process get value of cpu load.
    //read each row and check 'chrome' present
    let cpuLoad = '';
    for (let row of rows) {
        const processName: string = await row.locator("td").nth(0).innerText();
        if (processName === "Chrome") {
            cpuLoad = await row.locator("td:has-text('%')").innerText();
            console.log("cpu load of chrome", cpuLoad)
            break;
        }
    }



    //compare it with value in the compare box 
    // get yellow box text
    const yellowBoxText: string | null = await page.locator("#chrome-cpu").innerText();
    console.log("entire text of yellow Box", yellowBoxText);
    if (yellowBoxText.includes(cpuLoad)) {
        console.log("cpu load of chrome is equal")
    }
    else {
        console.log("cpu load of chrome is not equal")
    }
    expect(yellowBoxText).toContain(cpuLoad);
    await page.waitForTimeout(3000);
})