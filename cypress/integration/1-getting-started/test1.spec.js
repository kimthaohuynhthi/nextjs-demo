describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('displays 4 menuItem', () => {
    cy.get('.menubar_wrapper__Ug2yP a').should('have.length', 3);
    cy.get('.menubar_wrapper__Ug2yP a').first().should('have.text', 'Home');
    cy.get('.menubar_wrapper__Ug2yP a').last().should('have.text', 'About');
  });
});
