class Header {
  getSignInLink() {
    cy.wait(6000)
    return cy.get('button').contains('Log In');
  }

  getCategoryBtn(){
    return cy.contains('Categories');
  }

  getSearchIpnut(){
    return cy.get('[data-purpose="search-input"]');
  }

  getSearchBtn(){
    return cy.get('button[type=submit]')
  }
}

export default Header;
