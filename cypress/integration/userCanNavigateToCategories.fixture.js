describe("Visitor can see a single article", () => {
  before(() => {
    cy.intercept("GET", "api/articles", {
      fixture: "articles.json",
    }).as("getArticles");
    cy.visit("/");
  });

  it("is expected to articles sorted by sport ", () => {
    cy.get("[data-cy=articles-list]")
      .first()
      .should("contain.text", "Deep Work Thinking Fast & Slow Tipping Point ");
  });

  it("is expected to display Sport News header", () => {
    cy.get("[data-cy=sports-link]").should("contain.text", "Sports News");
  });

  it("is expected to display relevant category articles on clicking ", () => {
    cy.get("[data-cy=sports-link]").click();
    cy.get('[data-cy="category_header"]').should("contain", "sports");
  });

  it("is expected to display relevant category articles on clicking ", () => {
    cy.get("[data-cy=business-link]").click();
    cy.get('[data-cy="category_header"]').should("contain", "business");
  });
});
