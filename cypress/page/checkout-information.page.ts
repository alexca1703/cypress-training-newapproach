class SauceCheckoutInformation {
    private firstNameTextField: string;
    private firstNameValue: string;
    private lastNameTextField: string;
    private lastNameValue: string;
    private zipCodeTextField: string;
    private zipCodeValue: string;
    private continueCheckoutButton: string;


    constructor() {
        this.firstNameTextField = "#first-name";
        this.firstNameValue = "Cypress";
        this.lastNameTextField = "#last-name";
        this.lastNameValue = "Workshop";
        this.zipCodeTextField = "#postal-code";
        this.zipCodeValue = "00000";
        this.continueCheckoutButton = "input[id='continue']";

    }

    public enterUserInformation(): void {
        cy.get(this.firstNameTextField).type(this.firstNameValue);// (7)
        cy.get(this.lastNameTextField).type(this.lastNameValue);// (8)
        cy.get(this.zipCodeTextField).type(this.zipCodeValue);// (9)
        cy.get(this.continueCheckoutButton).click();// (10)
    }
}

export {SauceCheckoutInformation}
