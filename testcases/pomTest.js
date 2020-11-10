var p = require("../pages/landingPage");

describe("Page Object model",function(){

it('test',function(){
  p.getP();
  p.setFirst('4');
  p.setSecond('4')
browser.sleep(10000);

})

})


