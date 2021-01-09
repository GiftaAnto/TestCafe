import { Selector, t} from 'testcafe';
 class OrderConfirmationPage{
    constructor(){
        this.FinalMessage = Selector("#center_column > div > p > strong")
    }
    async placeOrder(ConfirmationMessage){
        await t
        .expect(this.FinalMessage.textContent).contains(ConfirmationMessage)
    }
 }
 export default new OrderConfirmationPage();
