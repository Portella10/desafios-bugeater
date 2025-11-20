describe("Desafio - Soma de números", () => {
    it("Valida comportamento da soma de uma calculadora em múltiplos cenários", () => {
        cy.visit("https://bugeater.web.app/app/challenge/learn/adder");
        cy.contains("button", "Accept").click();
        cy.contains("button", "Skip").click();

        //Enter "1" and "2" into the input fields, then click on the "Calculate" button. Expected Result: "3".
        cy.calculadora(1, 2, "3");

        //Input "-2" and "4" into the input fields where one number is negative, then click on the "Calculate" button. Expected Result: "2".
        cy.calculadora(-2, 4, "2");

        //Enter "1.5" and "2.5" into the input fields; both are decimal fractions, then click on the "Calculate" button. Expected Result: "4.0".
        cy.calculadora(1.5, 2.5, "4.0");

        //Enter "abc" in the First Number input field and "1" in the Second Number input field, then click on the "Calculate" button. Expected Result: "User input error".
        cy.calculadora("abc", 1, "User input error");

        //Leave both input fields blank and then click on the "Calculate" button. Expected Result: "User input error".
        cy.calculadora(" ", " ", "User input error");

        //Input "10000000000" into the first input field, which is too large, and set the second value to "1", then click on the "Calculate" button. Expected Result: "Application Error".
        cy.calculadora(10000000000, 1, "User input error");
    });
});
