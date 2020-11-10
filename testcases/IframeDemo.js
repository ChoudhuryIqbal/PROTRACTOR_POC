const { iterator } = require("core-js/fn/symbol");
const { Browser } = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");

describe("Frame Test", function () {
  it("Frame Test", function () {
    browser.waitForAngularEnabled(false);
    browser.get("http://uitestpractice.com/Students/Switchto");
    browser.manage().window().maximize();
    browser.sleep(5000);

    browser.switchTo().frame("iframe_a");
    var EC=protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(element(by.id("name"))));

    browser.element(by.id("name")).sendKeys("Hello");
    browser.sleep(4000);
    browser.switchTo().defaultContent();
    browser.element(by.linkText("Home")).click();
    browser.sleep(10000);

  });
});
