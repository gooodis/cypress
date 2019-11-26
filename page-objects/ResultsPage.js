
class ResultsPage {
    getDurationBtn(){
        return cy.contains('Duration');
    }

    setDuration(duration){
        this.getDurationBtn().click();
        cy.contains(duration).click();
        this.getDurationBtn().click();
    }

    getReturnsHeader(){
        return cy.get('[data-purpose=search-results-header]')
    }

    getCoursesList(){
        return cy.get('[class*=course-card-list--course-card-wrapper]');
    }
}

export default ResultsPage;
