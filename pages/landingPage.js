var landingPage = function () {
  var textBoxOne = element(by.model("first"));
  var textBoxTwo = element(by.model("second"));

  let goBtn = element(by.id("gobutton"));
  let result = element(by.css("[class='ng-binding']"));

  this.getP = function () {
    browser.get("https://juliemr.github.io/protractor-demo/");
  };

  this.setFirst = function (number) {
    textBoxOne.sendKeys(number);
  };

  this.setSecond = function (number) {
    textBoxTwo.sendKeys(number);
  };



};
module.exports = new landingPage();