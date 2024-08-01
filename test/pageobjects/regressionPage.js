const { step } = require("@wdio/allure-reporter")

class regressionPage {

    get Headerlogo(){
        return $("//*[@class='m-site_header__logo_link']/img")
    }

    get SubmneuLinks(){
        return $$("//*[@class='m-site_dropdown__list m-site_dropdown__list--split']/li/a")
    }

    get Childmenulinks(){
        return $("//*[@class='m-site_dropdown__column js-sub-menu']//a")
    }
    
    get Menulinks(){
        return $$("//a[@class='m-site_navigation__link']")
    }

    get Searchlink(){
        return $("//*[@class='m-site_navigation__search']")
    }

    get SearchInput(){
        return $("//*[@class='m-form__input']")

    }

    get SearchCTA(){
        return $("//*[@class='e-btn e-btn--full']")
    }

    get SearchResults(){
        return $$("//*[@class='m-site_search__item']//h2")
    }

    get FooterLinks(){
        return $$("//*[@class='m-site_footer__link']")
    }

    

}
module .exports =new regressionPage();