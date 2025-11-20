Cypress.Commands.add("restaurarSenha", (senha, mensagem) => {
    cy.get("#first").type(senha);
    cy.contains("button", "Submit!").click();
    cy.get('[data-testid="result"]').should("contain", mensagem);
});
