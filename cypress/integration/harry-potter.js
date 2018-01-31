describe("Harry Potter and the Sorcerer's Stomach", function () {
  it('Should load the correct content', () => {
    cy.visit('http://localhost:4200/')
    cy.title().should('include', "Sorcerer's Stomach")
    cy.get('h1').should('have.text', "Harry Potter and the Sorcerer's Stomach");
    cy.get('nav a').should('have.length', 5);
    cy.get('nav a').eq(0).should('have.text', 'QUOTES');
    cy.get('nav a').eq(1).should('have.text', 'RANDOM');
    cy.get('nav a').eq(2).should('have.text', 'FAVES');
    cy.get('nav a').eq(3).should('have.text', 'ADD');
    cy.get('nav a').eq(4).should('have.text', 'DONATE');
    cy.get('.quote').should('have.class', 'hidden');
    cy.get('button').click();
    cy.get('.quote').should('not.have.class', 'hidden');
  });
});
