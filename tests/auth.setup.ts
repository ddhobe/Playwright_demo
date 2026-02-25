import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup("authentication",async({page})=>{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //login steps
    await page.locator('[name="username"]').fill("Admin");
    await page.locator('[name="password"]').fill('admin123');
    await page.locator ('[type="submit"]').click();

    await page.context().storageState({ path: authFile });

})