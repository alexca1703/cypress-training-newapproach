class SauceInventory{
    private shirtSelection: string;

    constructor() {
        this.shirtSelection = "#item_1_title_link";
    }

    public openProductDetails(): void {
        cy.get(this.shirtSelection).click();// (3)
    }
}

export{SauceInventory}