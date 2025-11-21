describe("Desafio divisao de numeros", () => {
    it("Valida varios cenarios da divisao de uma calculadora", () => {
        cy.visit("https://bugeater.web.app/app/challenge/learn/divider");
        cy.contains("button", "Accept").click();
        cy.contains("button", "Skip").click();

        //Enter "4" and "2" into the input fields, then click on the "Calculate" button. Expected Result: "2".
        cy.calculadora(4, 2, 2);
        cy.wait(1000);

        //Input "-10" and "2" into the input fields where one number is negative, then click on the "Calculate" button. Expected Result: "-5".
        cy.calculadora(-10, 2, -5);
        cy.wait(1000);

        //Enter "5" and "2" into the input fields, then click on the "Calculate" button. Expected Result: "2.5" (decimal fraction).
        cy.calculadora(5, 2, 2.5);
        cy.wait(1000);

        //Enter "abc" in the First Number input field and "1" in the Second Number input field, then click on the "Calculate" button. Expected Result: "User input error".
        cy.calculadora("abc", 1, "User input error");
        cy.wait(1000);

        //Leave both input fields blank and then click on the "Calculate" button. Expected Result: "User input error".
        cy.calculadora(" ", " ", " ");
        cy.contains("button", "Calculate!").click();
        cy.wait(1000);

        //Input "10" into the first input field and "0" into the second input field, then click on the "Calculate" button. Expected Result: "Application Error".
        cy.calculadora(10, 0, "User input error");
    });
});
