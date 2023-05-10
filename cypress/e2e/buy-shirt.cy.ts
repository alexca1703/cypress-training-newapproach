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
    menuContentPage.visitMenuContentPage();
    // Action
    loginPage.typeUserName("standard_user");
    loginPage.typePassword("secret_sauce");
    loginPage.pressSubmitButton();
    // Assert
    inventoryPage.checkInventoryUrl("https://www.saucedemo.com/inventory.html");
    inventoryPage.checkProductImageAndText("Sauce Labs Bolt T-Shirt");
  });
});

describe("Check items number in shopping cart icon", () => {
  it("should display item(s) ready for buying", () => {
    // Arrange
    menuContentPage.visitMenuContentPage();
    // Action
    loginPage.typeUserName("standard_user");
    loginPage.typePassword("secret_sauce");
    loginPage.pressSubmitButton();
    inventoryPage.openProductDetails();
    inventoryDetailsPage.addProductToCart();
    // Assert
    inventoryDetailsPage.verifyItemPrice("15.99", "$15.99");
    inventoryDetailsPage.checkRemoveButtonExistance();
    inventoryDetailsPage.checkNumberOfItemsInCart("1");
  });
});

describe("Remove product item from shopping cart", () => {
  it("then display empty shopping cart", () => {
    // Arrange
    menuContentPage.visitMenuContentPage();
    // Action
    loginPage.typeUserName("standard_user");
    loginPage.typePassword("secret_sauce");
    loginPage.pressSubmitButton();
    inventoryPage.openProductDetails();
    inventoryDetailsPage.addProductToCart();
    inventoryDetailsPage.removeProductFromCart();
    // Assert
    inventoryDetailsPage.addToCartButtonExists();
    inventoryDetailsPage.itemsNumberIdentifierExists();
  });
});

describe("Add Black T-shirt product to Shopping Cart", () => {
  it("should open shopping cart details page", () => {
    // Arrange
    menuContentPage.visitMenuContentPage();
    // Action
    loginPage.typeUserName("standard_user");
    loginPage.typePassword("secret_sauce");
    loginPage.pressSubmitButton();
    inventoryPage.openProductDetails();
    inventoryDetailsPage.addProductToCart();
    inventoryDetailsPage.goToCartPage();
    // Assert
    shoppingCartPage.checkCartUrl("https://www.saucedemo.com/cart.html");
  });
});

describe("Confirm checkout to enter user information", () => {
  it("should display name, lastname and zipcode fields", () => {
    // Arrange
    menuContentPage.visitMenuContentPage();
    // Action
    loginPage.typeUserName("standard_user");
    loginPage.typePassword("secret_sauce");
    loginPage.pressSubmitButton();
    inventoryPage.openProductDetails();
    inventoryDetailsPage.addProductToCart();
    inventoryDetailsPage.goToCartPage();
    shoppingCartPage.proceedToCheckout();

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
    menuContentPage.visitMenuContentPage();
    // Action
    loginPage.typeUserName("standard_user");
    loginPage.typePassword("secret_sauce");
    loginPage.pressSubmitButton();
    inventoryPage.openProductDetails();
    inventoryDetailsPage.addProductToCart();
    inventoryDetailsPage.goToCartPage();
    shoppingCartPage.proceedToCheckout();
    checkoutInformationPage.enterUserInformation("Cypress", "Workshop", "00000");
    checkoutOverviewPage.acceptCheckoutDetails();
    // assert
    checkoutCompletePage.confirmSuccessfulCheckout("Thank you for your order!");
  });
});
