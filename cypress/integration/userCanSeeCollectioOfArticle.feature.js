describe('user can see a collection of articles', () => {
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
      .should('contain.text', 'Deep Work')
  })

  it('is expected that the last title will be Tipping point', () => {
    cy.get('[data-cy=articles-list]')
      .last()
      .should('contain.text', 'Tipping Point')
  })
})
