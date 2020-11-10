const { iterator } = require("core-js/fn/symbol")

xdescribe("Test Block Two",function(){

    it("First Test",function(){

        console.log("This is first test first Describe ")
    })

    fit("Second Blcok",function(){

        console.log("This is second Test first describe")
    })



})
fdescribe("Test Block Two",function(){

    it("First Test",function(){

        console.log("This is first test second describe ")
    })

   fit("Second Blcok",function(){

        console.log("This is second test sednc describe ")
    })

    

})
fdescribe("Test Block Two",function(){

    it("First Test",function(){

        console.log("This is first blcok thried describe")
    })

    fit("Second Blcok",function(){

        console.log("This is second blcok thrid describe")
    })

    

})