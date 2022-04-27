/* eslint-disable no-undef */
describe("user can change language settings", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/articles", {
      fixture: "articles.json",
    });
    cy.visit("/");
  });

  it("is expected to show the application name in english", () => {
    cy.get("[data-cy=app-name]").should(
      "contain.text",
      "DGMS News - Bringing you the best local news"
    );
  });

  describe("changing the language to Swedish", () => {
    beforeEach(() => {
      cy.get("[data-cy=swedish]").click();
    });
    it("is expected to display the application name in swedish", () => {
      cy.get("[data-cy=app-name]").should(
        "contain.text",
        "DGMS Nyheter - Bästa lokala nyheter"
      );
    });
  });
});
