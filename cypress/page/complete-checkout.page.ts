class FinishCheckout{

    private condition: string;
    private expectedText: string;

    constructor() {
        this.condition = "have.text";
        this.expectedText = "Thank you for your order!";
    }

    public confirmSuccessfulCheckout(messageElement:string): void {
        cy.get(messageElement).should(this.condition,this.expectedText); // (12)
    }
}

export {FinishCheckout}
