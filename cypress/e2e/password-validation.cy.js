/// <reference types="cypress" />

describe("Desafio", () => {
    it("Validacao de cenarios da senha", () => {
        cy.visit("https://bugeater.web.app/app/challenge/scripted/passwordValidation");
        cy.contains("button", "Accept").click();
        cy.contains("button", "Skip").click();

        //Enter "PASSWORD" as the password containing only uppercase letters and click the "Submit" button. Expected Result: "Invalid Password".
        cy.restaurarSenha("PASSWORD", "Invalid Password");

        //Enter "123456" as the password containing only digits and click the "Submit" button. Expected Result: "Invalid Password".
        cy.restaurarSenha(123456, "Invalid Password");

        //Enter "!@#$%" as the password containing only special characters and click the "Submit" button. Expected Result: "Invalid Password".
        cy.restaurarSenha("!@#$%", "Invalid Password");

        //Enter the previously saved password "Password1@23" and click the "Submit" button. Expected Result: "Invalid Password".
        cy.restaurarSenha("Password1@23", "Invalid Password");

        //Leave the password field empty and click the "Submit" button. Expected Result: "Invalid Password".
        cy.restaurarSenha(" ", "Invalid Password");

        //Enter "abc" as the password, which is less than 5 characters long, and click the "Submit" button. Expected Result: "Invalid Password".
        cy.restaurarSenha("abc", "Invalid Password");

        //Enter "qwertyuiopasdfghjklzxcvbnm" as the password, which exceeds 15 characters, and click the "Submit" button. Expected Result: "Invalid Password".
        cy.restaurarSenha("qwertyuiopasdfghjklzxcvbnm", "Invalid Password");

        //Enter "P@ssword_1" as the password, which meets all the requirements, and click the "Submit" button. Expected Result: "Valid Password".
        cy.restaurarSenha("P@ssword_1", "Valid Password");

        //Enter "Слово" as the password, which contains the not-allowed symbol, and click the "Submit" button. Expected Result: "Invalid Password".
        cy.restaurarSenha("Слово", "Invalid Password");

        //Enter "password" as the password containing only lowercase letters and click the "Submit" button. Expected Result: "Invalid Password".
        cy.restaurarSenha("password", "Invalid Password");

        //Enter "P@ssw_rd" as the password, which does not meet all the requirements, and click the "Submit" button. Expected Result: "Invalid Password".
        cy.restaurarSenha("P@ssw_rd", "Invalid Password");
    });
});
