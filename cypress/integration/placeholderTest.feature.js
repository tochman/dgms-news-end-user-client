describe('Placeholder test to set up CI', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('is expected to visit a site', () => {
    cy.get('[data-cy=ci-test]').should('contain.text', 'App')
  });
});