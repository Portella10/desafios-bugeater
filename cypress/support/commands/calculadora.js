Cypress.Commands.add("calculadora", (num1, num2, resultado) => {
    cy.get("#first").type(num1);
    cy.get("#second").type(num2);
    cy.contains("button", "Calculate!").click();
    cy.get('[data-testid="result"]').should("contain", resultado);
});
