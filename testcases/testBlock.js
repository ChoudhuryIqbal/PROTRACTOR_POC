const { iterator } = require("core-js/fn/symbol");

describe("TestSuite", function () {
  beforeAll(function () {
    console.log("This is before All");
  });

  afterAll(function () {
    console.log("This is After ALL");
  });

  beforeEach(function () {
    console.log("This is login beforeEach");
  });

  afterEach(function () {
    console.log("this is logout afterEach");
  });
  it("mytest one", function () {
    console.log("This is mytestone");
  });

  it("mytest2 ", function () {
    console.log("This is mytest two");
  });
});
