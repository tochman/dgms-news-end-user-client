describe('Visitor can see a single article', () => {
  before(() => {
    cy.intercept('GET', 'api/articles', {
      fixture: 'articles.json',
    }).as('getArticles')

    cy.intercept('GET', '/api/articles/', {
      fixture: 'articleShow.json',
    }).as('getSingleArticle')

    cy.visit('/')
  })

  it('is expected to make a GET request to the API', () => {
    cy.wait('@getArticles').its('request.method').should('eq', 'GET')
  })

  // it("is expected that we can click on the article headline ", () => {
  //  cy.get("[data-cy=articles-list]").children().first().click();
  // });

  it('is expected to display correct url', () => {
    cy.get('[data-cy=show-button]').first().click()
    cy.url().should('contain', '1')
  })
})
