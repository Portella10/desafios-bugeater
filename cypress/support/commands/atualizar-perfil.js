Cypress.Commands.add("fazerAtualizacaoPerfil", (nickname, firstName, lastName, mensagem) => {
    cy.get("#first").type(nickname);
    cy.get("#second").type(firstName);
    cy.get("#third").type(lastName);
    cy.contains("button", "Submit!").click();
    cy.get('[data-testid="result"]').should("contain", mensagem);
});
