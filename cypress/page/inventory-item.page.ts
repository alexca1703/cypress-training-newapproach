class AddProductToCart{

    private addToCartButton: string;
    private cartButton: string;
    private itemsNumberInCart: string;
    private removeButton: string;
    private itemPrice: string;

    constructor() {
        this.addToCartButton = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]';
        this.cartButton = "a[class='shopping_cart_link']";
        this.itemPrice = 'div[id="inventory_item_container"]';
        this.removeButton = '[data-test="remove-sauce-labs-bolt-t-shirt"]';
        this.itemsNumberInCart = "span[class='shopping_cart_badge']";

    }

    public addProductToCart(): void {
        cy.get(this.addToCartButton).click();
    }

    public removeProductFromCart(): void {
        cy.get(this.removeButton).click();
    }

    public goToCartPage(): void {
        cy.get(this.cartButton).click();
    }

    public verifyItemPrice(price:string, fullPriceText:string){
        cy.get(this.itemPrice).contains(price).should('have.text', fullPriceText);
    }

    public checkRemoveButtonExistance() {
        cy.get(this.removeButton).should('exist');
    }

    public checkNumberOfItemsInCart(itemsNumber:string): void {
        cy.get(this.itemsNumberInCart).should('have.text', itemsNumber);
    }

    public addToCartButtonExists(): void {
        cy.get(this.addToCartButton).should('exist');
    }

    public itemsNumberIdentifierExists(): void {
        cy.get(this.itemsNumberInCart).should('not.exist');
    }

    

}

export{AddProductToCart}
