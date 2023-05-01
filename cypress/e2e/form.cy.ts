describe('form page', () => {
  beforeEach(() => {
    cy.visit('/forms');
  });

  it('renders validation alert', () => {
    cy.get('form').submit();
    cy.contains('Please fill in the field');
  });

  it('created a product card', () => {
    cy.get('input').eq(0).type('Yulia Lobzha');
    cy.get('input').eq(1).type('2023-07-05');
    cy.get('input').eq(2).type('11.11');
    cy.get('input').eq(3).click();
    cy.get('select').select('Unisex');
    cy.get('[data-testid="input-file"]').selectFile('cypress/fixtures/tiaras-crowns.jpg');
    cy.get('input').eq(10).click();
    cy.get('form').submit();

    cy.get('[data-testid="pop-up-container"]').contains('the data has been saved');
  });
});