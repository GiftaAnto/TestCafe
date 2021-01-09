import { Selector, t} from 'testcafe';
import SearchResultPage from "../Page/SearchResultPage";
 class CartPage{
    constructor(){
        this.CartHeading = Selector("#cart_title")
        this.ProductNameInCart = Selector("#product_1_1_0_425677 > td.cart_description > p > a")
        this.ProductPriceInCart = Selector("#total_product")
        this.Summary = Selector('#order_step > li.step_current.first')
        this.ProceedButton1 = Selector("#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span")
        this.Address = Selector('#order_step > li.step_current.third > span')
        this.ProceedButton2 = Selector("#center_column > form > p > button")   
        this.Shipping = Selector('#order_step > li.step_current.four')
        this.ProceedButton3 = Selector("#form > p > button > span")   
        this.Payment = Selector("#order_step > li.step_current.last > span")
        this.ErrorMessage = Selector("#order > div.fancybox-overlay.fancybox-overlay-fixed > div > div > div > div > p")
        this.CLoseErrorMessage = Selector("#order > div.fancybox-overlay.fancybox-overlay-fixed > div > div > a")
        this.CheckBox = Selector("#cgv")
        this.PaymentMethod = Selector("#HOOK_PAYMENT > div:nth-child(1) > div > p > a")
        this.ConfirmOrder = Selector("#cart_navigation > button > span")
    }
    async placeOrder(CartHeading, ProductName, ProductPrice, ErrorMessage){
        await t
        .expect((this.CartHeading).textContent).contains(CartHeading)
        .expect((this.ProductNameInCart).textContent).contains(ProductName)
        .expect((this.ProductPriceInCart).textContent).contains(ProductPrice)
        .expect((this.Summary).exists).ok()
        .click(this.ProceedButton1)
        .expect((this.Address).exists).ok()
        .click(this.ProceedButton2)
        .expect((this.Shipping).exists).ok()
        .click(this.ProceedButton3)
        .expect((this.ErrorMessage).textContent).contains(ErrorMessage)
        .click(this.CLoseErrorMessage)
        .click(this.CheckBox)
        .click(this.ProceedButton3)
        .expect((this.Payment).exists).ok()
        .click(this.PaymentMethod)
        .click(this.ConfirmOrder)
    }

 }
 export default new CartPage();
