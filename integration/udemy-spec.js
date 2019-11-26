import MainPage from '../page-objects/MainPage';
import ResultsPage from '../page-objects/ResultsPage';

const COURSE_TOPIC = 'selenium';
const EMAIL = 'aviagodis@gmail.com';
const PWD = 'a123456'

describe('Sign In', () => {
  it('should sign in with correct credentials', () => {
    // Clear cookies so the login will be shown
    cy.clearCookies()
    const main = new MainPage();
    main.visit();

    const signIn = main.goToSignIn();
    cy.wait(3000);
    signIn
      .fillEmail(EMAIL)
      .fillPassword(PWD)
      .submit();
  });
});

describe('List selemium courses', () => {
  it('should go to Web Devaleopment page and search for selenium courses', () =>{
    const main = new MainPage();
    cy.wait(6000);
    main.goToWebDevCourse('categories');
    main.searchFor(COURSE_TOPIC);
    const results = new ResultsPage();
    results.setDuration('3-6 Hours');
    cy.wait(3000)
    
    // expect the number of courses with the specific duration will be between 300-500
    results.getReturnsHeader().then((res) => {
      const text = res.text();
      const resultsNum = parseInt(text.split(" ")[0]);
      expect(resultsNum).to.be.within(300, 500);
    });

    // check for at least one course with selenium in it's title
    results.getCoursesList().contains(COURSE_TOPIC);
  });
});
