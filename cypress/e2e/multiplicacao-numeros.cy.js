/// <reference types="cypress" />

describe("Desafio", () => {
    it("Cenarios de testes de multiplicacao", () => {
        cy.visit("https://bugeater.web.app/app/challenge/scripted/multiplier");
        cy.contains("button", "Accept").click();
        cy.contains("button", "Skip").click();

        //Leave both input fields blank and then click on the "Calculate" button. Expected Result: "User input error".
        cy.calculadora(" ", " ", " User input error");

        //Input "abc" and "2" into the input fields where at least one value is not a number, then click on the "Calculate" button. Expected Result: "User input error".
        cy.calculadora("abc", 2, "User input error");

        //Enter "5" and "7" into the input fields, then click on the "Calculate" button. Expected Result: correct multiplication of the numbers.
        cy.calculadora(5, 7, "35");

        //Input "10000000000" and "8" into the input fields where at least one number exceeds the maximum length limit for inputted values, then click on the "Calculate" button. Expected Result: "Application error".
        cy.calculadora(10000000000, 8, "Application error");

        //Input "3.5" and "2.7" into the input fields where at least one number is a decimal fraction, then click on the "Calculate" button. Expected Result: correct multiplication of the numbers.
        cy.calculadora(3.5, 2.7, "9.45");

        //Input "-8" and "4" into the input fields where at least one number is negative, then click on the "Calculate" button. Expected Result: correct multiplication of the numbers.
        cy.calculadora(-8, 4, "-32");
    });
});
