class SauceCart{
    private checkoutButton: string;

    constructor() {
        this.checkoutButton = "button[id='checkout']";
    }

    public proceedToCheckout(): void {
        cy.get(this.checkoutButton).click();// (6)
    }
}

export{SauceCart}