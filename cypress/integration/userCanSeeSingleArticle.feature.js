/* eslint-disable no-undef */
describe("Visitor can see a single article", () => {
  before(() => {
    cy.intercept("GET", "api/articles", {
      fixture: "articles.json",
    }).as("getArticles");
    cy.intercept("GET", "**/articles/**", {
      fixture: "articleShow.json",
    }).as("getSingleArticle");
    cy.visit("/");
    cy.get("[data-cy=show-button]").first().click();
  });


  it("is expected to display correct url", () => {
    cy.url().should("contain", "http://localhost:3000/article/1");
  });

  it("is expected to display the body of the article", () => {
    cy.get("[data-cy=article-body]").should(
      "contain.text",
      "Lorem ipsum dolor"
    );
  });
});
