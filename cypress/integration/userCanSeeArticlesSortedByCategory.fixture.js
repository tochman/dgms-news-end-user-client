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
    
  });

