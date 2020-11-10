const { iterator } = require("core-js/fn/symbol");
const { Browser } = require("selenium-webdriver");

describe("ExpectDemo", function () {
  it("ExpectDemo test", function () {
    let x = 100;
    expect(x).toBe(100);
    expect(x).not.toBe(200);

    expect(x).not.toEqual(300);
    expect(x).toEqual(100);

    let y = [10, 20, 30];
    let z = y;
    expect(y).toBe(z);
  });

  it("Test Website townsend title", function () {
    browser.get("http://cafetownsend-angular-rails.herokuapp.com/login");
    browser.manage().window().maximize();
    expect(browser.getTitle()).toBe("CafeTownsend-AngularJS-Rails");
    expect(browser.getTitle()).toContain("AngularJS-Rails");
    element(by.model("user.name")).sendKeys("Luke");
    element(by.model("user.password")).sendKeys("Skywalker");
    element(by.buttonText("Login")).click();
    browser.sleep(5000);
    expect(element(by.id("greetings")).getText()).toEqual("Hello Luke");
    browser.sleep(5000);
    var logOutTxt = element(by.css("[ng-click='logout()']")).getText();
    expect(logOutTxt.isPresent()).toBe(true);
  });
});
