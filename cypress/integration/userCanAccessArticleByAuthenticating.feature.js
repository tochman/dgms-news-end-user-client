describe("visitor can", () => {
  describe("see a single article by authenticating right away", () => {
    beforeEach(() => {
      cy.intercept("GET", "api/articles", {
        fixture: "articles.json",
      }).as("getArticles");
      cy.intercept("GET", "**/article/**", {
        fixture: "articleShow.json",
      }).as("getSingleArticle");

      cy.intercept("POST", "api/auth/sign_in", {
        fixture: "authenticationSuccess.json",
        headers: { uid: "user@email.com" },
      });
      cy.intercept("GET", "api/auth/validate_token**", {
        fixture: "authenticationSuccess.json",
      });

      cy.visit("/");
    });

    it("is expected to display a sign in button", () => {
      cy.get("[data-cy=login-button]").should("be.visible");
    });

    describe(" logging in right away", () => {
      beforeEach(() => {
        cy.get("[data-cy=login-button]").click();
        cy.get("[data-cy=login-email]").type("user@email.com");
        cy.get("[data-cy=login-password]").type("password");
        cy.get("[data-cy=submit-button]").click();
      });

      it("is expected to redirect user to all articles", () => {
        cy.get("[data-cy=articles-list]").children().should("have.length", 6);
      });
      it("is expected to inform user that login was successful", () => {
        cy.get("[data-cy=flash-message]").should(
          "contain.text",
          "Login successful"
        );
      });

      describe("After logging in right away clicking an article", () => {
        beforeEach(() => {
          cy.get("[data-cy=head-lines]").first().click();
        });
        it("is expected user to access full article after logging in right away", () => {
          cy.url().should("eq", "http://localhost:3000/article/1");
        });
      });
    });
  });
});
