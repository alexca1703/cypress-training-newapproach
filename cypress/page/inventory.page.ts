class SauceInventory{
    private shirtSelection: string;

    constructor() {
        this.shirtSelection = "Bolt T-Shirt";
    }

    public openProductDetails(): void {
        cy.contains(this.shirtSelection).click();// (3)
    }
}

export{SauceInventory}
