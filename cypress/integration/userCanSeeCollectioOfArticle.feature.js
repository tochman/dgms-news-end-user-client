describe("user can see a collectino of articles", () => {
    beforeEach(() => {
      cy.intercept("GET", "https://reqres.in/api/users", {
        fixture: "articles.json",
      }).as("getArticles");
      cy.visit("/");
    });
  
    it("is expected to display a collection of 3 articles", () => {
      cy.get("[data-cy=articles-list]").should("have.length", 1);
    });
})

