import{test,expect}from "@playwright/test"
test("simple dialog",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // registerd a dialog handler
    page.on("dialog",(dialog)=>{
        console.log("Dialog type is",dialog.type());// returns type of dialog
        expect(dialog.type()).toContain("alert");
        console.log("Dialog text",dialog.message())//returns msg from dialog
        expect(dialog.message()).toContain("I am an alert box!");
        dialog.accept();
    })
    await page.locator('#alertBtn').click();
    await page.waitForTimeout(3000)
})

// confirm alert--confirmation dialog with text along with 'ok' and 'cancel' button

test("confirmation dialog",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // register a dialog handler
    page.on("dialog",(dialog)=>{
        console.log("dialog type is:",dialog.type());//returns dialog type.
        expect(dialog.type()).toContain("confirm");

        console.log("dialog text",dialog.message());
        expect(dialog.message()).toContain("Press a button!")
       // dialog.accept()// to press ok
       dialog.dismiss()//to press cancel

    })

    //now click on confirmation alert
    await page.locator('#confirmBtn').click();

    //validate confirmation msg
    const text=await page.locator("#demo").innerText()
    //expect(text).toContain("You pressed OK!");// when pressed 'ok',dialog.accept()
    expect(text).toContain("You pressed Cancel!");// when pressed 'cancel',dialog.dismiss()

    console.log(text)
})


// prompt dialog---> it has a some msg with input box and ok and cancel button

test.only("prompt dialog",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //register a dialog handler
    page.on('dialog',(dialog)=>{
        console.log("type of dialog",dialog.type());//returns type of dialog
        expect (dialog.type()).toContain("prompt");

        console.log(dialog.message());
        expect(dialog.message()).toContain("Please enter your name");
        //check default value of a dialog
        expect(dialog.defaultValue()).toContain("Harry Potter");

        //close dialog by accepting
        dialog.accept("John Doe")
    })

    //open prompt dialog
    await page.locator("#promptBtn").click();
    const txt:string=await page.locator('#demo').innerText();
     expect(txt).toContain("Hello John Doe! How are you today?");

    await page.waitForTimeout(3000);

})



