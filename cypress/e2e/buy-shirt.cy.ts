import {SauceContentHomePage, SauceStandardLogin, SauceInventory, AddProductToCart, SauceCart, SauceCheckoutInformation,
  CheckoutOverview, FinishCheckout} from "../page/index";

const menuContentPage = new SauceContentHomePage();
const loginPage = new SauceStandardLogin();
const inventoryPage = new SauceInventory();
const inventoryDetailsPage = new AddProductToCart();
const shoppingCartPage = new SauceCart();
const checkoutInformationPage = new SauceCheckoutInformation();
const checkoutOverviewPage = new CheckoutOverview();
const checkoutCompletePage = new FinishCheckout();

describe("Type valid credentials", () => {
  it("should login successfully at website", () => {
    // Arrange
    menuContentPage.visitMenuContentPage(); // (1)
    // Action
    loginPage.typeUserName("standard_user"); // (2)
    loginPage.typePassword("secret_sauce"); // (2)
    loginPage.pressSubmitButton(); // (2)
    // Assert
    inventoryPage.checkInventoryUrl("https://www.saucedemo.com/inventory.html");
    inventoryPage.checkProductImageAndText("Sauce Labs Bolt T-Shirt");
  });
});

describe("Check items number in shopping cart icon", () => {
  it("should display item(s) ready for buying", () => {
    // Arrange
    menuContentPage.visitMenuContentPage(); // (1)
    // Action
    loginPage.typeUserName("standard_user"); // (2)
    loginPage.typePassword("secret_sauce"); // (2)
    loginPage.pressSubmitButton(); // (2)
    inventoryPage.openProductDetails(); // (3)
    inventoryDetailsPage.addProductToCart(); // (4)
    // Assert
    inventoryDetailsPage.verifyItemPrice("15.99", "$15.99");
    inventoryDetailsPage.checkRemoveButtonExistance();
    inventoryDetailsPage.checkNumberOfItemsInCart("1");
  });
});

describe("Remove product item from shopping cart", () => {
  it("then display empty shopping cart", () => {
    // Arrange
    menuContentPage.visitMenuContentPage(); // (1)
    // Action
    loginPage.typeUserName("standard_user"); // (2)
    loginPage.typePassword("secret_sauce"); // (2)
    loginPage.pressSubmitButton(); // (2)
    inventoryPage.openProductDetails(); // (3)
    inventoryDetailsPage.addProductToCart(); // (4)
    inventoryDetailsPage.removeProductFromCart();
    // Assert
    inventoryDetailsPage.addToCartButtonExists();
    inventoryDetailsPage.itemsNumberIdentifierExists();
  });
});

describe("Add Black T-shirt product to Shopping Cart", () => {
  it("should open shopping cart details page", () => {
    // Arrange
    menuContentPage.visitMenuContentPage(); // (1)
    // Action
    loginPage.typeUserName("standard_user"); // (2)
    loginPage.typePassword("secret_sauce"); // (2)
    loginPage.pressSubmitButton(); // (2)
    inventoryPage.openProductDetails(); // (3)
    inventoryDetailsPage.addProductToCart(); // (4)
    inventoryDetailsPage.goToCartPage(); // (5)
    // Assert
    shoppingCartPage.checkCartUrl("https://www.saucedemo.com/cart.html");
  });
});

describe("Confirm checkout to enter user information", () => {
  it("should display name, lastname and zipcode fields", () => {
    // Arrange
    menuContentPage.visitMenuContentPage(); // (1)
    // Action
    loginPage.typeUserName("standard_user"); // (2)
    loginPage.typePassword("secret_sauce"); // (2)
    loginPage.pressSubmitButton(); // (2)
    inventoryPage.openProductDetails(); // (3)
    inventoryDetailsPage.addProductToCart(); // (4)
    inventoryDetailsPage.goToCartPage(); // (5)
    shoppingCartPage.proceedToCheckout(); // (6)

    // Assert
    checkoutInformationPage.checkUserDetailsUrl("https://www.saucedemo.com/checkout-step-one.html");
    checkoutInformationPage.verifyFirstNameFieldExists();
    checkoutInformationPage.verifyLastNameFieldExists();
    checkoutInformationPage.verifyPostalCodeeFieldExists();
  });
});

describe("Buy a black t-shirt successfully", () => {
  it("then the t-shirt should be bought", () => {
    // Arrange
    menuContentPage.visitMenuContentPage(); // (1)
    // Action
    loginPage.typeUserName("standard_user"); // (2)
    loginPage.typePassword("secret_sauce"); // (2)
    loginPage.pressSubmitButton(); // (2)
    inventoryPage.openProductDetails(); // (3)
    inventoryDetailsPage.addProductToCart(); // (4)
    inventoryDetailsPage.goToCartPage(); // (5)
    shoppingCartPage.proceedToCheckout(); // (6)
    checkoutInformationPage.enterUserInformation("Cypress", "Workshop", "00000"); // (7)(8)(9)(10)
    checkoutOverviewPage.acceptCheckoutDetails(); // (11)
    // assert
    checkoutCompletePage.confirmSuccessfulCheckout("Thank you for your order!"); // (12)
  });
});
