Cypress.Commands.add("createProfile", (ano, nickname, lastName, mensagem) => {
    cy.get("#dropdown-basic").click();
    cy.contains("a", ano).click();
    cy.get("#first").type(nickname);
    cy.get("#second").type(lastName);
    cy.contains("button", "Submit!").click();
    cy.get('[data-testid="result"]').should("contain", mensagem);
});
