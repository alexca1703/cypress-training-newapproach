class FinishCheckout{

    private messageElement: string;

    constructor() {
        this.messageElement = "Thank you for your order!";
    }

    public confirmSuccessfulCheckout(expectedText:string): void {
        cy.contains(this.messageElement).should('have.text',expectedText); // (12)
    }
}

export {FinishCheckout}
