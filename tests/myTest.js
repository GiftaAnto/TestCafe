import LoginPage from "../Page/LoginPage"
import WomenSectionPage from "../Page/WomenSectionPage"
import CartPage from "../Page/CartPage"
import SearchResultPage from "../Page/SearchResultPage"
import OrderConfirmationPage from "../Page/OrderConfirmationPage"
const userData = require("../TestData/data.json");
const URL = "http://automationpractice.com/index.php";

fixture("Order Placement")
    .page(URL)
userData.forEach(data =>{
test
    ('Test for successful order placement', async t => {
        await LoginPage.login(data.Email, data.Password);
        await WomenSectionPage.womenSection(data.ProductName);
        await SearchResultPage.addToCart(data.ProductAddedMessage);
        await CartPage.placeOrder(data.CartHeading, data.ProductName, data.ProductPrice, data.ErrorMessage);
        await OrderConfirmationPage.placeOrder(data.ConfirmationMessage);
    });
});