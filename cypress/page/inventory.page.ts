class SauceInventory{
    private shirtSelection: string;
    private inventoryUrl: string;
    private boltTshirtImage: string;

    constructor() {
        this.shirtSelection = "Bolt T-Shirt";
        this.inventoryUrl = "https://www.saucedemo.com/inventory.html";
        this.boltTshirtImage = "img[alt='Sauce Labs Bolt T-Shirt']";
    }

    public openProductDetails(): void {
        cy.contains(this.shirtSelection).click();// (3)
    }

    public checkInventoryUrl(urlInv:string): void {
        cy.url().should('eq', urlInv);
    }

    public checkProductImageAndText(productName:string): void {
        cy.get(this.boltTshirtImage).invoke('attr', 'alt').should('eq', productName);
        cy.contains(this.shirtSelection).should('have.text', productName);
    }


}

export{SauceInventory}
