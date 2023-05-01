describe('not found page', () => {
  beforeEach(() => {
    cy.visit('/404');
  });

  it('renders error alert', () => {
    cy.contains('404');
  });
});