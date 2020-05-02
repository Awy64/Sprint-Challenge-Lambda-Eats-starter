describe("test our form inputs", function() {

  beforeEach(function() {
    cy.visit("http://localhost:3000/")
    cy.contains('Start Order').click()
  });

  it("adds text to name input", function() {
    cy.get('[data-cy="name"]')
      .type('Adam')
      .should("have.value", 'Adam')
    cy.get('textarea')
      .type('stuff')
      .should("have.value", 'stuff')
  });

  it("Checks all toppings", function() {
    cy.get('[type="checkbox"]').check().should("be.checked")
  });

  it("Checks if form can be submited", function() {
    cy.get('[data-cy="name"]')
      .type('Adam')
      .should("have.value", 'Adam')
    cy.get('textarea')
      .type('stuff')
      .should("have.value", 'stuff')
    cy.contains('Order').click()
  });
});