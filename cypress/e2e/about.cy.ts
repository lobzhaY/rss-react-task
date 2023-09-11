describe('about page', () => {
  beforeEach(() => {
    cy.visit('/aboutUs');
  });

  it('renders page content', () => {
    cy.contains('About us');
  });
});