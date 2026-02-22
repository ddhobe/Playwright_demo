
//keep login data in external JSON file.

// import{test,expect} from '@playwright/test';
// import fs from 'fs';
// import path from "path";

// //reading/extracting data from json file

// //const jsonPath="testData/data.json";
// const jsonPath = path.join(__dirname, "../test/testData/data.json");

// const loginData:any=JSON.parse(fs.readFileSync(jsonPath,'utf-8'))

// test.describe('data driven testing',()=>{
// for(const {email,password,validity} of loginData){
//     test(`login test with ${email} and ${password}`,async({page})=>{
//         await page.goto("https://demowebshop.tricentis.com/login");
//         await page.locator('#Email').fill(email);
//         await page.locator('#Password').fill(password);
//         await page.locator('[value="Log in"]').click();

//         if(validity.toLowerCase()==='valid'){
//             //assert the log out link is Visible

//             const logOutLink=page.locator('[href="/logout"]');
//             await expect(logOutLink).toBeVisible();
//         }
//         else{
//             //assert error msg is visible
//             const errormsg= page.locator('.validation-summary-errors');
//             await expect(errormsg).toBeVisible();

//             //assert user still on login page
//             await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
//         }
        
//     })
// }

// })







import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const jsonPath = path.join(__dirname, "../testData/data.json");

const loginData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

test.describe("data driven testing", () => {

  for (const { email, password, validity } of loginData) {

    test(`login test with ${email} - ${validity}`, async ({ page }) => {

      await page.goto("https://demowebshop.tricentis.com/login");

      await page.fill("#Email", email);
      await page.fill("#Password", password);
      await page.click('[value="Log in"]');

      if (validity.toLowerCase() === "valid") {
        await expect(page.locator('[href="/logout"]')).toBeVisible();
      } else {
        await expect(
          page.locator(".validation-summary-errors")
        ).toBeVisible();

        await expect(page).toHaveURL(
          "https://demowebshop.tricentis.com/login"
        );
      }
    });
  }
});
