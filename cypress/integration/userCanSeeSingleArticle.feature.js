describe('Visitor can see a single article', () => {
  before(() => {
    cy.intercept('GET', 'api/articles', {
      fixture: 'articles.json',
    }).as('getArticles')
    cy.visit('/')
    
    cy.intercept('GET', '/api/articles?article_id=1', {
        fixture: 'articleShow.json',
      }).as('getSingleArticle')
  })

  it('is expected to make a GET request to the API', () => {
    cy.wait('@getArticles').its('request.method').should('eq', 'GET')
  })

  it('is expected to display correct url', () => {
    cy.get('[data-cy=show-button]').first().click()
    cy.url().should('contain', '1')
  })
})
