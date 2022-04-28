describe('user can see a collection of articles', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/articles', {
      fixture: 'articles.json',
    })
    cy.visit('/')
  })

  it('is expected to have a dropdown to select a language ', () => {
    cy.get('[data-cy="dropdown"]').should('contain.text', 'LanguageEnglishSwedish')
  })


  it('is expected to update on selection ', () => {
    cy.get('[data-cy="dropdown"]').click().get('select').select('English').should("have.value", "Swedish")
  
  })

  // it('is expected to show the application name in english ', () => {
  //   cy.get('[data-cy=app-name]').should(
  //     'contain.text',
  //     'DGMS News - Bringing you the best local new',
  //   )

  //   describe('changing the lanuge to Swedish', () => {
  //       before(() => {
  //         cy.get('[data-cy=swedish]').click()
  //         })
  //       it('is expected to show tthe application name in swedish ', () => {
  //         cy.get('[data-cy=app-name]').should(
  //           'contain.text',
  //           'DGMS Nyheter - Basta lokala nyheter',
  //         )
  //       })
  //     })
  // })
})
