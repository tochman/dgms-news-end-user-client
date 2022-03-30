describe('Visitor can see a single article', () => {
  beforeEach(() => {
    cy.intercept('GET', 'api/articles', {
      fixture: 'articles.json',
    }).as('getArticles')
    cy.visit('/')
    
    cy.intercept('GET', '**/articles?**', {
        fixture: 'articleShow.json',
      }).as('getSingleArticle')
  })

  it('is expected to make a GET request to the API', () => {
    cy.wait('@getArticles').its('request.method').should('eq', 'GET')
  })

  it('is expected to display correct url', () => {
    cy.get('[data-cy=show-button]').first().click()
    cy.url().should('contain', 'http://localhost:3000/article/Deep%20Work')
  })

  it.only('is epxected to display the body of the article', () => {
    cy.get('[data-cy=article-body]').should('contain.text',"Lorem ipsum dolor")
  })

})
