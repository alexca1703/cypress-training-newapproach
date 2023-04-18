import {SauceContentHomePage, SauceStandardLogin, SauceInventory, AddProductToCart, SauceCart, SauceCheckoutInformation,
  CheckoutOverview, FinishCheckout} from "../page/index";

const menuContentPage = new SauceContentHomePage();
const LoginPage = new SauceStandardLogin();
const InventoryPage = new SauceInventory();
const InventoryDetailsPage = new AddProductToCart();
const ShoppingCartPage = new SauceCart();
const CheckoutInformationPage = new SauceCheckoutInformation();
const CheckoutOverviewPage = new CheckoutOverview();
const CheckoutCompletePage = new FinishCheckout();

describe("Buy a black t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage(); // (1)
    LoginPage.enterStandardUserCredentials(); // (2)
    InventoryPage.openProductDetails();// (3)
    InventoryDetailsPage.addProductToCart(); // (4)(5)
    ShoppingCartPage.proceedToCheckout(); // (6)
    CheckoutInformationPage.enterUserInformation(); // (7)(8)(9)(10)
    CheckoutOverviewPage.acceptCheckoutDetails(); // (11)
    CheckoutCompletePage.confirmSuccessfulCheckout(); // (12)
  });
});
