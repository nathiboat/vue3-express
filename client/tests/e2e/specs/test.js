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


describe("Test api request ", () => {

  it("Visits the api language url", () => {
    cy.request('GET', 'http://localhost:3000/languages')
      .its('body').should('include', "English")
      
  });

  it("Post request to user api", () => {
    cy.request('POST', 'http://localhost:3000/users')
      .its('body').should('include', 'Post to users')
      
  });
});





