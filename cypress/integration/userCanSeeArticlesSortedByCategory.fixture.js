describe("Visitor can see a single article", () => {
    before(() => {
      cy.intercept("GET", "api/articles", {
        fixture: "articlesCategory.json",
      }).as("getArticles");
      cy.visit("/");
    });
  
    it("is expected to articles sorted by sporst and business ", () => {
        cy.get('[data-cy=articles-list]')
        .first()
        .should('contain.text', 'Sports_1')
    })
    
  });

