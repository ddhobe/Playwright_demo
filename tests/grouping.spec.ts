import{test,expect} from "@playwright/test";
test.describe("group 1",async()=>{
    test("test 1",async({page})=>{
        console.log("this is test 1");
    })

    test("test 2",async({page})=>{
        console.log("this is test 2");
    })
})

test.describe("group 2",async()=>{
    test("test3",async({page})=>{
        console.log("this is test 3");
    })

    test("test 4",async({page})=>{
        console.log('this is test 4')
    })
})