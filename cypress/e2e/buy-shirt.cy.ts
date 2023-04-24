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

describe("Buy a black t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage(); // (1)
    loginPage.signIn("standard_user", "secret_sauce"); // (2)
    inventoryPage.openProductDetails();// (3)
    inventoryDetailsPage.addProductToCart(); // (4)(5)
    shoppingCartPage.proceedToCheckout(); // (6)
    checkoutInformationPage.enterUserInformation(); // (7)(8)(9)(10)
    checkoutOverviewPage.acceptCheckoutDetails(); // (11)
    checkoutCompletePage.confirmSuccessfulCheckout("#contents_wrapper > .checkout_complete_container > h2"); // (12)
  });
});
