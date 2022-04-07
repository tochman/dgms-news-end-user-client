/* eslint-disable no-undef */
describe('Visitor can', () => {
  describe('see a single article when atuhenticated', () => {
    before(() => {
      cy.intercept('GET', 'api/articles', {
        fixture: 'articles.json',
      }).as('getArticles')

      cy.intercept('GET', '**/article/**', {
        fixture: 'articleShow.json',
      }).as('getSingleArticle')

      cy.intercept('POST', 'api/auth/sing_in', {
        fixture: 'authenticationSuccess.json',
        headers: { uid: 'user@email.com' },
      })

      cy.intercept('GET', 'api/auth/validate_token', {
        fixture: 'authenticationSuccess.json',
      })

      cy.visit('/')

      cy.get('[data-cy=login-button]').click()
      cy.get('[data-cy=login-email]').type('username')
      cy.get('[data-cy=login-password]').type('password')
      cy.get('[data-cy=login-submit-button]').click()

      
    })

    it('is expected to display a sign in button', () => {
      cy.get('[data-cy=login-button]').should("be.visible")
    })

    it('is expected to inform user that login was successful', () => {
      cy.get('[data-cy=flash-message]').should("contain.text", "Login sucessful")
    })



    it('is expected to display correct url', () => {
      cy.get('[data-cy=show-button]').first().click()
      cy.url().should('contain', 'http://localhost:3000/article/1')
    })

    it('is expected to display the body of the article', () => {
      cy.get('[data-cy=article-body]').should(
        'contain.text',
        'Lorem ipsum dolor',
      )
    })
  })

  describe('see not see a single article when not atuhenticated', () => {})
})
