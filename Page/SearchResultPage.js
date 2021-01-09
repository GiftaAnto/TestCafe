import { Selector, t} from 'testcafe';
 class SearchResultPage{
    constructor(){
        this.Product = Selector("#center_column > ul > li > div > div.right-block > h5 > a")
        this.QuickView = Selector("a.quick-view")
        this.Frame = Selector("iframe")
        this.AddQuantity = Selector("#quantity_wanted_p > a.btn.btn-default.button-plus.product_quantity_up > span > i")
        this.AddToCartButton = Selector("#add_to_cart > button")
        this.ProductAdded = Selector("#layer_cart")
        this.CloseQuickViewButton = Selector("#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > span")
        this.CartButton = Selector("#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a")
    }

    async addToCart(ProductAddedMessage){
        await t
        .hover(this.Product)
        .hover(this.QuickView)
        .click(this.QuickView)
        .switchToIframe(this.Frame)
        .click(this.AddQuantity)
        .click(this.AddToCartButton)
        .switchToMainWindow()
        .expect((this.ProductAdded).textContent).contains(ProductAddedMessage)
        .click(this.CloseQuickViewButton)//;
        //this.ProductPrice = await Selector("#layer_cart_product_price").innerText;
        //await t
        .click(this.CartButton)
    }
 }
 export default new SearchResultPage();
