import{test,expect} from "@playwright/test";
import { ChildProcess } from "node:child_process";

test('frames demo',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");


    //check total number of frames present on the page
    const Frames=await page.frames();
    console.log("number of frames",Frames.length)//7



    // //approach-1-->using page.frame();

    // const frame=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});

    // if (frame){
    //     const frameLocator=frame.locator('[name="mytext1"]').fill('playwright');
    // }
    // else{
    //     console.log('frame is not available')
    // }


    // Approach --2  using page.framelocator()

    const inputBox=page.frameLocator('[src="frame_1.html"]').locator('[name="mytext1"]');
    await inputBox.fill("John Kenedy");

    await page .waitForTimeout(3000)
})


//inner frames/child frames/nested frames

test.only("inner/child frames/nested frames",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

    if (frame3){
        await frame3.locator('[name="mytext3"]').fill("welcome");//input box

        //get childframes of frame 3
        const childframe=frame3.childFrames();

        // find number of childframes under frame3
        console.log('child frames under frams3',childframe.length)

        //select the radio button
        const radio=childframe[0].getByLabel("I am a human");
        await radio.check();
        expect(radio).toBeChecked();
    }
    else{
        console.log("frame 3 is not found")
    }
    await page.waitForTimeout(3000)
    
})