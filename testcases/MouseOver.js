const { Driver } = require("selenium-webdriver/chrome");

describe("test suite", function () {
  it("Test Case For MouseOver", function () {
    browser.waitForAngularEnabled(false);

    browser.get("https://opensource-demo.orangehrmlive.com/");
    browser.manage().window().maximize();

    browser.element(by.id("txtUsername")).sendKeys("Admin");
    browser.element(by.id("txtPassword")).sendKeys("admin123");
    browser.element(by.name("Submit")).click();
    browser.sleep(5000);

    var admin = element(by.id("menu_admin_viewAdminModule"));
    var usermgnt = element(by.id("menu_admin_UserManagement"));
    var users = element(by.id("menu_admin_viewSystemUsers"));
    browser
      .actions()
      .mouseMove(admin)
      .mouseMove(usermgnt)
      .mouseMove(users)
      .click()
      .perform();
      browser.sleep(6000);
  });

  it("DoubleClick Test",function(){

    browser.waitForAngularEnabled(false);
    browser.get("http://uitestpractice.com/Students/Actions");
    browser.manage().window().maximize();
    var btn=element(by.name("dblClick"));
    //browser.actions().mouseMove(btn).doubleClick().perform();
    
    browser.actions().doubleClick(btn).perform();
    
    browser.switchTo().alert().accept();
    browser.sleep(5000);
  })

  it("Right Click Test",function(){


    browser.waitForAngularEnabled(false);
    browser.get("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    var btn=element(by.className("context-menu-one btn btn-neutral"));

    browser.actions().click(btn,protractor.Button.RIGHT).perform();
    browser.sleep(5000);


  })

    it("Drag and Drop Test ",function(){


   browser.waitForAngularEnabled(true);
    browser.get("http://codef0rmer.github.io/angular-dragdrop/#!/#%2F");
    var source=element(by.model("list1"));
    var target=element(by.model("list2"));

    browser.actions().dragAndDrop(source,target).perform();
    browser.sleep(5000);


  })

  
})
