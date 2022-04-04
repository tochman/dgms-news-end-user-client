describe("Visitor can see a single article", () => {
    before(() => {
      cy.intercept("GET", "api/articles", {
        fixture: "articles.json",
      }).as("getArticles");
      cy.visit("/");
    });
    
    it("is expected to find sports categories", () => {
    cy.get ('[data-cy=sports-link]').should('contain.text', "Sports News")
  })

   it("is expected to display relevant category articles on clicking ", () => {
   cy.get ('[data-cy=sports-link]').click()
   cy.get('[data-cy="category_header"]').should('contain', 'sports')
   });

   it("is expected to display relevant category articles on clicking ", () => {
    cy.get ('[data-cy=business-link]').click()
    cy.get('[data-cy="category_header"]').should('contain', 'business')
    });

});