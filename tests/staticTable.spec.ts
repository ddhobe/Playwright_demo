import{test,expect, Locator} from "@playwright/test";
test("static web table",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    let table:Locator=page.locator('[name="BookTable"]>tbody');
    await expect(table).toBeVisible()

    // //count number of rows in a table
    // //approach 1
     const rows=table.locator("tr")
    // await expect(rows).toHaveCount(7)

    // //approach 2
    // const rowCount=await table.locator("tr").count();
    // await expect(rowCount).toBe(7)

    // //find numbers of column/header
    // const column=page.locator('[name="BookTable"]>tbody>tr>th')
    // //expect(column).toHaveCount(4)

    // // or
    // const columnCount=await column.count();
    // expect(columnCount).toBe(4)



    // read all data from second row(index=2);
    const secondrowCell=page.locator('[name="BookTable"]> tbody > tr').nth(2)
    const secondRowText:string[]=await secondrowCell.locator("td").allInnerTexts()
   // console.log(secondRowText)//[ 'Learn Java', 'Mukesh', 'Java', '500' ]
    expect(secondRowText).toEqual(['Learn Java', 'Mukesh', 'Java', '500' ])

    //print 2nd row using for loop
    for(let text of secondRowText){
        console.log(text)
    }
   // read all data from the table
 // get all locators
 const allrowData:Locator[]=await rows.all();

//  //get text of all td's except header
//  for(let row of allrowData.slice(1)){
//    const col= await row.locator("td").allInnerTexts()
//    console.log(col.join('\t'))
//  }

//  //print book name where auther is mukesh
// const mukeshBook:string[]=[];
// for (let row of allrowData.slice(1)){
//     const book=await  row.locator("td").nth(0).innerText()
//     const auther=await  row.locator("td").nth(1).innerText();

//     if( auther==="Mukesh"){
//         console.log(`${auther} \t ${book}`)
//         mukeshBook.push(book)
//     }
    
// }
// console.log(mukeshBook)
// expect(mukeshBook.length).toBe(2)



//calculate total price of all book
let totalPrice:number=0;
for(let row of allrowData.slice(1)){
    const price=await row.locator("td").nth(3).innerText();
    totalPrice=totalPrice+parseInt(price)
    
}
console.log(totalPrice);
expect (totalPrice).toEqual(7100);
await page.waitForTimeout(4000)
   
})