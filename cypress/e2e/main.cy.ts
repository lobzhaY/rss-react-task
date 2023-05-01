describe('home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders 10 random cards', () => {
    cy.get('[data-testid="html-element"]').should('have.length', 10);
  });

  it('renders modal', () => {
    cy.get('[data-testid="html-element"]').get('button').eq(0).click();
    cy.contains('photographer');
  });

  it('renders alert after bad request', () => {
    cy.get('[data-testid="search-input-data"]').type('ujio{enter}');
    cy.contains('Not found');
  });
});