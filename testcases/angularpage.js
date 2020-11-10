const { iterator } = require("core-js/fn/symbol")
const { Browser } = require("selenium-webdriver")

describe("Angular JS WebSite Automation", function (){

    it("Validate URL",function(){
       
        browser.get('http://angularjs.org/');

        browser.sleep(3000);

        browser.manage().window().maximize();
        browser.sleep(5000);
     

        expect(browser.getCurrentUrl()).toBe("https://angularjs.org/");

    })




})