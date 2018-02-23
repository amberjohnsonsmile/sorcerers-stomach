describe("Harry Potter and the Sorcerer's Stomach", function () {
  it('Should load the correct content', () => {
    cy.visit('https://hpstomach.firebaseapp.com/')
    cy.title().should('include', "Sorcerer's Stomach")
    cy.get('h1').should('have.text', "Harry Potter and the Sorcerer's Stomach");
    cy.get('nav a').should('have.length', 4);
    cy.get('nav a').eq(0).should('have.text', 'QUOTES');
    cy.get('nav a').eq(1).should('have.text', 'COMMENTS');
    cy.get('nav a').eq(2).should('have.text', 'ADD');
    cy.get('nav a').eq(3).should('have.text', 'DONATE');
    cy.get('h2').should('have.text', 'QUOTES');
    cy.get('.6').should('contain', 'He missed Hogwarts');
    cy.get('.97').should('contain', 'She walked away from him');
    cy.get('.edit').should('contain', 'COMMENT');
    cy.get('nav a').eq(1).click();
    cy.url().should('equal', 'https://hpstomach.firebaseapp.com/comment-list');
    cy.get('h2').should('have.text', 'COMMENTS');
    cy.get('p').should('exist');
    cy.get('.comment-button').should('contain', 'EDIT');
    cy.get('.comment-button').should('contain', 'DELETE');
    cy.get('nav a').eq(2).click();
    cy.url().should('equal', 'https://hpstomach.firebaseapp.com/add');
    cy.get('h2').should('have.text', 'Add A Quote');
    cy.get('label').should('contain', 'Type in your own quote');
    cy.get('textarea').should('be.empty');
    cy.get('nav a').eq(3).click();
    cy.url().should('equal', 'https://hpstomach.firebaseapp.com/donate');
    cy.get('h2').should('have.text', 'DONATE');
    cy.get('label').should('contain', 'How much would you like to donate?');
    cy.get('input').should('be.empty');

  });
});
