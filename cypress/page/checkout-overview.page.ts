class CheckoutOverview{

    private finishCheckoutButton: string;

    constructor() {
        this.finishCheckoutButton = '[data-test="finish"]';
    }

    public acceptCheckoutDetails(): void {
        cy.get(this.finishCheckoutButton).click();
    }
}

export {CheckoutOverview}
