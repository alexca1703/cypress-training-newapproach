class AddProductToCart{

    private addToCartButton: string;
    private cartButton: string

    constructor() {
        this.addToCartButton = "#add-to-cart-sauce-labs-bolt-t-shirt";
        this.cartButton = "a[class='shopping_cart_link']";
    }

    public addProductToCart(): void {
        cy.get(this.addToCartButton).click();// (4)
        cy.get(this.cartButton).click();// (5)
    }
}

export{AddProductToCart}
