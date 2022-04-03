describe("Visitor can switch to sport news category tab", () => {
  before(() => {
    cy.intercept("GET", "api/articles", {
      fixture: "articlesSport.json",
    }).as("sportsArticles");
    cy.visit("/");
  });
  it("is expected to make a GET request to the API", () => {
    cy.wait("@sportsArticles").its("request.method").should("eq", "GET");
  });

  it("is expected to articles sorted by sport ", () => {
    cy.get("[data-cy=articles-list]")
      .first()
      .should("contain.text", "sports 1 sports 2 sports 3");
  });

  it("is expected to display Sport News header", () => {
    cy.get("[data-cy=sports-link]").should("contain.text", "Sports News");
  });

  //it("is expected to display relevant category articles on clicking ", () => {
  //cy.get ('[data-cy=sports-news-link]').click()
  //cy.get('[data-cy="category_header"]').should('contain.text', 'DeepWork')
  // });
});

describe("visitor can switch to business news category tab", () => {
  before(() => {
    cy.intercept("GET", "/api/articles", {
      fixture: "articlesBusiness.json",
    }).as("businessArticles");
    cy.visit("/");
  });

  it("is expected to make a GET request to the API", () => {
    cy.wait("@businessArticles").its("request.method").should("eq", "GET");
  });
  it("is expected to display Business News header", () => {
    cy.get("[data-cy=business-link]").should("contain.text", "Business News");
  });
});
