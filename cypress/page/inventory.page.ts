class SauceInventory{
    private shirtSelection: string;
    private inventoryUrl: string;
    private boltTshirtImage: string;
    private productsSection: string;
    private productsList: string;


    constructor() {
        this.shirtSelection = "a[id='item_1_title_link']";
        this.inventoryUrl = "https://www.saucedemo.com/inventory.html";
        this.boltTshirtImage = "img[alt='Sauce Labs Bolt T-Shirt']";
        this.productsSection = '.inventory_container';
        this.productsList = '.inventory_item_name';
    }



    public checkInventoryUrl(urlInv:string): void {
        cy.url().should('eq', urlInv);
    }

    public checkProductImageAndText(productName:string): void {
        cy.get(this.boltTshirtImage).invoke('attr', 'alt').should('eq', productName);
        cy.get(this.shirtSelection).should('have.text', productName);
    }

    private findProductByName(productName:string): any {
       return cy.get(this.productsSection).find(this.productsList).filter(`:contains("${productName}")`);
    }

    public openProductDetails(productNameText:string): void {
        this.findProductByName(productNameText).click();
    }


}

export{SauceInventory}
