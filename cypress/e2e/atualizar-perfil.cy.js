/// <reference types="cypress" />
describe("Desafio", () => {
    it("Valida cenarios de atualizar o perfil", () => {
        cy.visit("https://bugeater.web.app/app/challenge/learn/updateNickname");
        cy.contains("button", "Accept").click();
        cy.contains("button", "Skip").click();

        //Enter Nickname: "skyline7", First Name: "Michael", Last Name: "Henderson", and press "Submit". Expected Result: "Your profile updated".
        cy.fazerAtualizacaoPerfil("skyline7", "Michael", "Henderson", "Your profile updated");
        cy.wait(100);

        //Enter Nickname: "k_3", First Name: "J", Last Name: "Z", and press "Submit". Expected Result: "User input error". The entered values are shorter than the min length.
        cy.fazerAtualizacaoPerfil("k_3", "J", "Z", "User input error");
        cy.wait(100);

        //Enter Nickname: "longnick9_", First Name: "MaximilianaElizabethMontgomery", Last Name: "AlexanderHamiltonJeffersonSmith", and press "Submit". Expected Result: "User input error". The entered values exceed the max length.
        cy.fazerAtualizacaoPerfil("longnick9_", "MaximilianaElizabethMontgomery", "AlexanderHamiltonJeffersonSmith", "User input error");
        cy.wait(100);

        //Leave Nickname, First Name, and Last Name fields empty, and press "Submit". Expected Result: "User input error".
        cy.fazerAtualizacaoPerfil("{backspace} ", "{backspace} ", "{backspace} ", "User input error");
        cy.contains("button", "Submit!").click();
        cy.wait(100);

        //Enter Nickname: "123-AA", First Name "X Æ A-12", Last Name "X Æ A-12", and press "Submit". Expected Result: "User input error". Nickname, First Name and Last Name contain not allowed characters.
        cy.fazerAtualizacaoPerfil("123-AA", "X Æ A-12", "X Æ A-12", "User input error");

        //Enter Nickname: "@@@@@", First Name "Christopher", Last Name "Williams", and press "Submit". Expected Result: "User input error". Nickname contains not allowed characters.
        cy.fazerAtualizacaoPerfil("@@@@@", "Christopher", "Williams", "User input error");
    });
});
