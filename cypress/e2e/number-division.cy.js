/// <reference types="cypress" />

describe("Desafio", () => {
    it("Validacao de cenarios da divisao", () => {
        cy.visit("https://bugeater.web.app/app/challenge/scripted/divide");
        cy.contains("button", "Accept").click();
        cy.contains("button", "Skip").click();

        //Enter "4" and "2" into the input fields, then click on the "Calculate" button. Expected Result: correct division of the numbers.
        cy.calculadora(4, 2, 2);

        //Input "-10" and "2" into the input fields where one or both numbers are negative, then click on the "Calculate" button. Expected Result: correct division of the numbers.
        cy.calculadora(-10, 2, -5);

        //Enter "5" and "2.2" into the input fields, then click on the "Calculate" button. Expected Result: correct division of the numbers with a decimal fraction.
        cy.calculadora(5, 2.2, 2.2727272727272725);

        //Input "10000000000" in the First Number input field and "8" in the Second Number input field, where one or both numbers are very big, then click on the "Calculate" button. Expected Result: correct division of the numbers.
        cy.calculadora(10000000000, 8, 1250000000);

        //Enter "abc" in the First Number input field and "1" in the Second Number input field, where one or both values are not a number, then click on the "Calculate" button. Expected Result: "User input error".
        cy.calculadora("abc", 1, "User input error");

        //Leave one or both input fields blank and then click on the "Calculate" button. Expected Result: "User input error".
        cy.calculadora(" ", " ", "User input error");

        //Input "10" into the first input field and "0" into the second input field, then click on the "Calculate" button. Expected Result: "Division by zero is not allowed".
        cy.calculadora(10, 0, "Division by zero is not allowed");
    });
});
