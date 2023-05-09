class FinishCheckout{

    private messageElement: string;

    constructor() {
        this.messageElement = "h2[class='complete-header']";
    }

    public confirmSuccessfulCheckout(expectedText:string): void {
        cy.get(this.messageElement).should('have.text', expectedText); // (12)
    }
}

export {FinishCheckout}
