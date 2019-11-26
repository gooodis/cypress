import Header from './Headers';
import SignInPage from './SignIn';

class MainPage {
  constructor() {
    this.header = new Header();
  }

  visit() {
    cy.visit('www.udemy.com');
  }


  goToSignIn() {
    const link = this.header.getSignInLink();
    link.click();

    const signIn = new SignInPage();
    return signIn;
  }

  goToWebDevCourse(via){
    if (via == 'category'){
      const categoryBtn = this.header.getCategoryBtn();
      categoryBtn.trigger('mouseover');
      cy.contains('Web Development').click();
    }
    else {
      const devBtn = cy.get('a[href="/courses/development/"]').last();
      devBtn.should('be.visible');
      devBtn.trigger('mouseover');
      cy.contains('Web Development').click({force: true});
    }
  }

  searchFor(query){
    const searchBar = this.header.getSearchIpnut();
    searchBar.type(query);
    this.header.getSearchBtn().click()
  }
}

export default MainPage;
