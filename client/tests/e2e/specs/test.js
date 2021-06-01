// https://docs.cypress.io/api/introduction/api.html

describe("Home page testing", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("button", "Add");
    cy.contains("button", "Edit");
    cy.get(".bg-green-600").click();
  });
});


describe("Test profile page ", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.get(".bg-green-600").click();
    cy.get("h3").contains("Austin Fisher");
    cy.contains("button", "Reset Password");
    cy.contains("button", "Save All");
  });
});


