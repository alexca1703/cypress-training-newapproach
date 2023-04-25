class FinishCheckout{

    private messageElement: string;
    //private condition: string;

    constructor() {
        this.messageElement = "#contents_wrapper > .checkout_complete_container > h2";
        //this.condition = "have.text";
    }

    public confirmSuccessfulCheckout(expectedText:string): void {
        cy.get(this.messageElement).contains(expectedText); // (12)
    }
}

export {FinishCheckout}
