class SauceCart{
    private checkoutButton: string;

    constructor() {
        this.checkoutButton = '[data-test="checkout"]';
    }

    public proceedToCheckout(): void {
        cy.get(this.checkoutButton).click();
    }

    public checkCartUrl(shoppingCartUrl: string): void {
        cy.url().should('eq', shoppingCartUrl);
    }
}

export {SauceCart}
