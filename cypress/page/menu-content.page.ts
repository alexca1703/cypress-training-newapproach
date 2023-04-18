class SauceContentHomePage {

    private menuContentPageURL: string;

    constructor() {
        this.menuContentPageURL = "https://www.saucedemo.com/";
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }
}

export { SauceContentHomePage }
