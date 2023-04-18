class SauceStandardLogin {
    private standardUserTextField: string;
    private standardUserType: string;
    private standardPswrdTextField: string;
    private standardPswrdType: string;
    private submitCredentialsButton: string;


    constructor() {
        this.standardUserTextField = ".login-box > form > div > input";
        this.standardUserType = "standard_user";
        this.standardPswrdTextField = ".login-box > form > div > input";
        this.standardPswrdType = "secret_sauce";
        this.submitCredentialsButton = "input[type='submit']";

    }

    public enterStandardUserCredentials(): void {
        cy.get(this.standardUserTextField).first().type(this.standardUserType); // (2)
        cy.get(this.standardPswrdTextField).last().type(this.standardPswrdType); // (2)
        cy.get(this.submitCredentialsButton).click(); // (2)
    }
}

export {SauceStandardLogin}
