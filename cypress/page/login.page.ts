class SauceStandardLogin {
    private standardUserTextField: string;
    private standardPswrdTextField: string;
    private submitCredentialsButton: string;


    constructor() {
        this.standardUserTextField = ".login-box > form > div > input";
        this.standardPswrdTextField = ".login-box > form > div > input";
        this.submitCredentialsButton = "input[type='submit']";

    }

    public signIn(userName:string, password:string): void {
        cy.get(this.standardUserTextField).first().type(userName); // (2)
        cy.get(this.standardPswrdTextField).last().type(password); // (2)
        cy.get(this.submitCredentialsButton).click(); // (2)
    }
}

export {SauceStandardLogin}
