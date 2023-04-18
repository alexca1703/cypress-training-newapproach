class CheckoutOverview{

    private finishCheckoutButton: string;

    constructor() {
        this.finishCheckoutButton = "button[id='finish']";
    }

    public acceptCheckoutDetails(): void {
        cy.get(this.finishCheckoutButton).click();// (11)
    }
}

export {CheckoutOverview}