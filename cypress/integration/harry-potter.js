describe("Harry Potter and the Sorcerer's Stomach", function () {
  it('Should load the correct content', () => {
    cy.visit('http://localhost:4200/')
    cy.title().should('include', "Sorcerer's Stomach")
    cy.get('h1').should('have.text', "Harry Potter and the Sorcerer's Stomach");
    cy.get('nav a').should('have.length', 3);
    cy.get('nav a').eq(0).should('have.text', 'HOME');
    cy.get('nav a').eq(1).should('have.text', 'ADD YOUR OWN');
    cy.get('nav a').eq(2).should('have.text', 'DONATE');
    cy.get('.quote').should('have.class', 'hidden');
    cy.get('button').click();
    cy.get('.quote').should('not.have.class', 'hidden');
  });
});
