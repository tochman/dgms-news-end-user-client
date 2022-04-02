describe("Visitor can see a single article", () => {
    before(() => {
      cy.intercept("GET", "api/articles", {
        fixture: "articlesSport.json",
      }).as("getArticles");
      cy.visit("/");
    });
  
    it("is expected to articles sorted by sport and business ", () => {
        cy.get('[data-cy=articles-list]')
        .first()
        .should('contain.text', 'sports 1 sports 2 sports 3')
    })
    
    it("is expected to find sports categories", () => {
    cy.get ('[data-cy=sports-news-link]').should('contain.text', "Sports News")
  })

   it("is expected to display relevant category articles on clicking ", () => {
   cy.get ('[data-cy=sports-news-link]').click()
   cy.get('[data-cy="category_header"]').should('contain', 'ArticleGroup')
   });

});
  