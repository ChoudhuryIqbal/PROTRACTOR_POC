describe("Table Demo", function () {
  beforeAll(function () {
    browser.get("https://dassdevarajan.github.io/demo-app/");
    browser.manage().window().maximize();

    browser.sleep(5000);
  });

  it("View product details ", function () {
    var product_naem = "1001 Activities Book";
    var description =
      "Designed for preschool kids, the 1001 Activities Book is an educational activity book that promises to engage tiny tots with their first educative lessons in a playful and fun-filled manner.";
    var catagory = "Books";
    var qty = "300";
    var unitprice = "4";
    var supplier = "ABC Publications";
    var returnable = "false";

    element.all(by.tagName("tr")).last().element(by.id("view")).click();
    expect(element(by.tagName("h3")).getText()).toBe("Product View");

    expect(
      element.all(by.tagName("tr")).get(0).element(by.tagName("td")).getText()
    ).toBe(product_naem);
    expect(
      element.all(by.tagName("tr")).get(1).element(by.tagName("td")).getText()
    ).toBe(description);
    expect(
      element.all(by.tagName("tr")).get(2).element(by.tagName("td")).getText()
    ).toBe(catagory);
    expect(
      element.all(by.tagName("tr")).get(3).element(by.tagName("td")).getText()
    ).toBe(qty);
    expect(
      element.all(by.tagName("tr")).get(4).element(by.tagName("td")).getText()
    ).toBe(unitprice);
    expect(
      element.all(by.tagName("tr")).get(5).element(by.tagName("td")).getText()
    ).toBe(supplier);
    expect(
      element.all(by.tagName("tr")).get(6).element(by.tagName("td")).getText()
    ).toBe(returnable);
    browser.sleep(6000);
  });

  it("Navigate to The product List", function () {
    element(by.id("list-menu")).click();
    expect(element(by.tagName("h3")).getText()).toBe("Product List");
    browser.sleep(2000);
  });

  it("Delete product", function () {
    browser.sleep(3000);
    element.all(by.tagName("tr")).get(1).element(by.id("delete")).click();
    browser.sleep(3000);
  });
});
