class FinishCheckout{

    private checkoutCompleteMessage: string;
    private condition: string;
    private expectedText: string;

    constructor() {
        this.checkoutCompleteMessage = "#contents_wrapper > .checkout_complete_container > h2";
        this.condition = "have.text";
        this.expectedText = "Thank you for your order!";
    }

    public confirmSuccessfulCheckout(): void {
        cy.get(this.checkoutCompleteMessage).should(this.condition,this.expectedText); // (12)
    }
}

export {FinishCheckout}