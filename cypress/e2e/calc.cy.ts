describe("calculator", () => {
  it("should sum correctly", () => {
    cy.visit("/");

    cy.get("[data-testid='result']").should("have.text", "0");

    cy.contains("Sumar").click();

    cy.get("[data-testid='result']").should("have.text", "1");
  });
});
