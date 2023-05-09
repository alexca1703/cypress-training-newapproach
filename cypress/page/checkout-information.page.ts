class SauceCheckoutInformation {
    private firstNameTextField: string;
    private lastNameTextField: string;
    private postalCodeTextField: string;
    private continueCheckoutButton: string;


    constructor() {
        this.firstNameTextField = '[data-test="firstName"]';
        this.lastNameTextField = '[data-test="lastName"]';
        this.postalCodeTextField = '[data-test="postalCode"]';
        this.continueCheckoutButton = '[data-test="continue"]';

    }

    public enterUserInformation(firstNameValue:string, lastNameValue:string, zipCodeValue:string): void {
        cy.get(this.firstNameTextField).type(firstNameValue);// (7)
        cy.get(this.lastNameTextField).type(lastNameValue);// (8)
        cy.get(this.postalCodeTextField).type(zipCodeValue);// (9)
        cy.get(this.continueCheckoutButton).click();// (10)
    }

    public checkUserDetailsUrl(urlInv:string): void {
        cy.url().should('eq', urlInv);
    }

    public verifyFirstNameFieldExists(): void{
        cy.get(this.firstNameTextField).should('exist');
    }

    public verifyLastNameFieldExists(): void{
        cy.get(this.lastNameTextField).should('exist');
    }

    public verifyPostalCodeeFieldExists(): void{
        cy.get(this.postalCodeTextField).should('exist');
    }
}

export {SauceCheckoutInformation}
