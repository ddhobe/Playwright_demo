import{test,expect} from "@playwright/test";
test('jQuery date picker',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dateinput=page.locator("#datepicker");
    expect(dateinput).toBeVisible();

    // //approach 1--using fill()
    // await dateinput.fill('06/15/2024')

    //Approach 2 --using date picker
    await dateinput.click();// open the datepicker

    //select the target date
    let year='2029';
    let month='June';
    let date='2';

    while(true){
        const currentMonth=await page.locator('[class="ui-datepicker-month"]').textContent();//current month
        const currentYear=await page.locator('[class="ui-datepicker-year"]').textContent()//current year

        if(currentMonth===month && currentYear===year){
            break;
        }
        //to go next iteration
        await page.locator('[title="Next"]').click();//for future date
        //await page.locator('[class="ui-datepicker-prev ui-corner-all"]').click();//for past date

    }
    //to selecct date
    const alldates=await page.locator('[class="ui-datepicker-calendar"] td').all();

    for(let dt of alldates){
       const dateText= await dt.innerText();
       if(dateText===date){
        console.log("date matched")
        await dt.click();
        break;
       }
    }
 await page.waitForTimeout(5000)


})