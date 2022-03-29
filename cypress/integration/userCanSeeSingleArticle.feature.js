describe("Visitor can see a single article", () => {
  before(() => {
    cy.intercept("GET", "https://reqres.in/api/articles", {
      fixture: "articles.json",
    }).as("getArticles");
    cy.intercept("GET", "https://reqres.in/api/articles", {
      fixture: "articleShow.json",
    }).as("getArticle");
    cy.visit("/");
    cy.get("[data-cy=articles-list]").children().first().click();
  });
  it("is expected to make a GET request to the API", () => {
    cy.wait("@getArticle").its("request.method").should("eq", "GET");
  });
});
