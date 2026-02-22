import{test,expect, Locator}from "@playwright/test";
test("compare the methods",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    //await page.waitForLoadState('load');

    //get all locators of text of products 
    const product=page.locator(".product-title");//6

    // //innerText() vs textContent()
    // console.log(await product.nth(1).innerText())//eliminate whitespaces and hidden elements
    // console.log(await product.nth(1).textContent())//with whitespaces and hidden elements
    
    
    // const count=await product.count();
    // console.log('number of products',count)

    // for(let i=0;i<count;i++){
    //     //const productName=await product.nth(i).innerText();//using innerText()--pure text(no whitespace or other text)
        
    //     const productName=await product.nth(i).textContent();//using tastContent()// it return text with whitespace and other elements
    //     //to remove unneccessary text we will use trim() method alongg with testContents
    //     console.log(productName?.trim()) 
    // }

    // allInnerTexts() vs allTextContents()
    // const productName:string[]=await product.allInnerTexts()//get array of all pure text
    // console.log(productName)

    // const productName:string[]=await product.allTextContents()//get array of all text with hidden text
    // console.log(productName)

    // all()--return array of locators
    //locator---->locator[]
    const productLocators:Locator[]=await product.all();
    //console.log(productLocators)

    // get value of 1st locator
    //console.log(await page.locator('.product-title').first().innerText())


    //get all text value from array using for of loop
    for(let productLoc of productLocators){
        console.log(await productLoc.innerText());
    }

})