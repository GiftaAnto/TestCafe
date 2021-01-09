import { Selector, t} from 'testcafe';
 class LoginPage{
    constructor(){
    this.SignInButton1 = Selector('a.login')
    this.Email = Selector("#email")
    this.Password = Selector('#passwd')
    this.SignInButton2 = Selector('#SubmitLogin')
}
async login(Email, Password){
    await t
    .maximizeWindow()
    .click(this.SignInButton1)
    .typeText(this.Email, Email)
    .typeText(this.Password, Password)
    .click(this.SignInButton2)
}
}

export default new LoginPage();