import { Selector, t} from 'testcafe';
 class WomenSectionPage{
    constructor(){
        this.Women = Selector("a[title='Women']")
        this.Dressy = Selector("#layered_id_feature_16")
        this.Girly = Selector("#layered_id_feature_13")
        this.Dressy = Selector("#layered_id_feature_16")
        this.SortBy = Selector("select#selectProductSort")
        this.SortByOptions = Selector("#selectProductSort > option:nth-child(6)")
        this.SearchTextField = Selector("#search_query_top")
        this.SearchButton = Selector("#searchbox > button")
    }

    async womenSection(ProductName){
        await t
        .click(this.Women)
        .click(this.Dressy)
        .click(this.Girly)
        .click(this.SortBy)
        .click(this.SortByOptions)
        .typeText(this.SearchTextField, ProductName)
        .click(this.SearchButton)
    }
 }
 export default new WomenSectionPage();
