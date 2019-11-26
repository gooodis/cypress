class SignInPage {
  fillEmail(value) {
    const field = cy.get('#email--1');
    field.clear();
    field.type(value);

    return this;
  }

  fillPassword(value) {
    const field = cy.get('#id_password');
    field.clear();
    field.type(value);

    return this;
  }

  submit() {
    const button = cy.get('[data-purpose=do-login]');
    button.click();
  }
}

export default SignInPage;
