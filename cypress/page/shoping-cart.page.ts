class SauceCart{
    private checkoutButton: string;

    constructor() {
        this.checkoutButton = '[data-test="checkout"]';
    }

    public proceedToCheckout(): void {
        cy.get(this.checkoutButton).click();// (6)
    }
}

export {SauceCart}
