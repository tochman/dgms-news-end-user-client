describe('user can see a collectino of articles', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://reqres.in/api/users', {
      fixture: 'articles.json',
    }).as('getArticles')
    cy.visit('/')
  })

  it('is expected to display a collection of 3 articles', () => {
    cy.get('[data-cy=articles-list]').children().should('have.length', 3)
  })

  it('is expected that the first title will be Deep Work', () => {
    cy.get('[data-cy=articles-list]')
      .first()
      .should('have.contain', 'Deep Work')
  })

  it('is expected that the first title have a clickable URL', () => {
    cy.get('[data-cy=articles-list]')
      .last()
      .should('have.contain', 'Tipping Point')
  
  })


})
