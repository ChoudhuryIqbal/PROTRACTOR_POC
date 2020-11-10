const { iterator } = require("core-js/fn/symbol");
const { Browser } = require("selenium-webdriver");

describe("mysuite ", function () {
  it("add new user ", function () {
    Browser.get("http://www.trycatchclasses.com/code/demo/angualr_crud/#");
    element(by.css('span[ng-click="addUser()"]')).click();

    //handling aletr
    let alert = browser.swithTo().alert();
    //switching to alert
    var alertText = alert.getText();
    expect(alertText()).toEqual("user information added successfully ");
    alert.accept();
    browser.sleep();
    //DropDown

    element(by.model("serach.type")).element(by.css("option[value='number:5 ")),
      click();
    browser.sleep(5000);
  });
});
