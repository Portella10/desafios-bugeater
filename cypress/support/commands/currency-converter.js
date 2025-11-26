Cypress.Commands.add("converterMoeda", (moeda1, moeda2, valor, resultado) => {
    cy.contains("button", "Currency From").click();
    cy.contains("a", moeda1).click();
    cy.get(".dropdown-toggle").eq(3).click();
    cy.get(".dropdown-menu.show").contains(moeda2).click();
    cy.get("#first").type(valor);
    cy.contains("button", "Convert!").click();
    cy.get('[data-testid="result"]').should("contain", resultado);
});
