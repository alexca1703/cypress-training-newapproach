class SauceStandardLogin {
    private standardUserTextField: string;
    private standardPswrdTextField: string;
    private submitCredentialsButton: string;


    constructor() {
        this.standardUserTextField = '[data-test="username"]';
        this.standardPswrdTextField = '[data-test="password"]';
        this.submitCredentialsButton = '[data-test="login-button"]';
    }

    public typeUserName(userName:string): void{
        cy.get(this.standardUserTextField).last().type(userName); // (2)
    }

    public typePassword(password:string): void{
        cy.get(this.standardPswrdTextField).last().type(password); // (2)
    }
    
    public pressSubmitButton(): void{
        cy.get(this.submitCredentialsButton).click(); // (2)
    }
}

export {SauceStandardLogin}
