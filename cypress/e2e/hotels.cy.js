describe('Cypress', () => {
  it('opens the app and clicks on a hotel', () => {
    cy.visit('http://localhost:3000');
    cy.get('a').first().click();
    cy.location('pathname').should('include', 'hotel');
  });

  it('navigates to the form to add a review', () => {
    cy.visit('http://localhost:3000');
    cy.get('a').first().click();
    cy.get('[data-cy=addReview]').click();
    cy.location('pathname').should('include', 'new');
  });

  it('fills and submits the form', () => {
    cy.visit('http://localhost:3000');
    cy.get('a').first().click();
    cy.get('[data-cy=addReview]').click();
    cy.get('form').within(() => {
      cy.get('input[name=title]').type('Test review');
      cy.get('input[name=description]').type('Test review by cypress')
      cy.get('input[name=rating]').type(4);
      cy.get('button').click();
    });
  });

  it('verify if the review was added', () => {
    cy.visit('http://localhost:3000');
    cy.get('a').first().click();
    cy.get('[data-cy=addReview]').click();
    cy.get('form').within(() => {
      cy.get('input[name=title]').type('Test review');
      cy.get('input[name=description]').type('Test review by cypress')
      cy.get('input[name=rating]').type(4);
      cy.get('button').click();
    });

    cy.wait(600);
    cy.get('h3').contains('Test review');
    cy.get('div').contains('Test review by cypress');
  });
});
