class SauceStandardLogin {
    private standardUserTextField: string;
    private standardPswrdTextField: string;
    private submitCredentialsButton: string;


    constructor() {
        this.standardUserTextField = '[data-test="username"]';
        this.standardPswrdTextField = '[data-test="password"]';
        this.submitCredentialsButton = '[data-test="login-button"]';
    }

    public signIn(userName:string, password:string): void {
        cy.get(this.standardUserTextField).first().type(userName); // (2)
        cy.get(this.standardPswrdTextField).last().type(password); // (2)
        cy.get(this.submitCredentialsButton).click(); // (2)
    }
}

export {SauceStandardLogin}
