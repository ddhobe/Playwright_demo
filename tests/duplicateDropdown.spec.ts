import{test,expect} from "@playwright/test"
test("duplicate dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // get all options
    const dropDownOption=page.locator("#colors>option")
    const optionText:string[]=(await dropDownOption.allTextContents()).map(text=>text.trim())
     expect(optionText.length).toBe(7);
     
    //find duplicate options in a dropdown
     let duplicateArray:string[]=[];
     let myArray:string[]=[]

     for(let option of optionText){
        if(myArray.includes(option)){
            duplicateArray.push(option)
        }else{
            myArray.push(option)
        }
     }

     if(duplicateArray.length>0){
        console.log("duplicates option found:",duplicateArray)
     }else{
        console.log("no duplicates found");
        expect(duplicateArray.length).toBe(0)
     }
console.log("unique options:",myArray)

})