/// <reference types="cypress" />

describe("Desafio", () => {
    it("Validação dos comportamentos esperados no conversor de moeda", () => {
        cy.visit("https://bugeater.web.app/app/challenge/scripted/currencyConverter");
        cy.contains("button", "Accept").click();
        cy.contains("button", "Skip").click();

        //Enter "1000" as the "Amount", "USD" as "Currency From", and "EUR" as "Currency To", click "Convert". Expected Result: Accurate conversion result.
        cy.converterMoeda("USD", "EUR", 1000, "909.09 EUR");

        //Input "1500.567" (decimal fraction) as the "Amount", "USD" as "Currency From", and "EUR" as "Currency To", click "Convert". Expected Result: Accurate conversion result rounded to two decimal places.
        cy.converterMoeda("USD", "EUR", 1500.567, "1364.15 EUR");

        //Enter "350" as the "Amount", "GBP" as "Currency From", and "GBP" as "Currency To", click "Convert". Expected Result: Accurate conversion result with 1:1 ratio.
        cy.converterMoeda("GBP", "GBP", 350, "350.00 GBP");

        //Input "1000000000000" (which is too large) as the "Amount", "USD" as "Currency From", and "EUR" as "Currency To", click "Convert". Expected Result: Accurate conversion result without any rounding errors.
        cy.converterMoeda("USD", "EUR", 1000000000000, "909090909090.91 EUR");

        //Input "0" as the "Amount", "USD" as "Currency From", and "EUR" as "Currency To", click "Convert". Expected Result: Zero.
        cy.converterMoeda("USD", "EUR", 0, "0");

        //Leave "Amount" field empty, "USD" as "Currency From", and "EUR" as "Currency To", click "Convert". Expected Result: "User input error".
        cy.converterMoeda("USD", "EUR", " ", "User input error");

        //Input "-500" (negative value) as the "Amount", "USD" as "Currency From", and "EUR" as "Currency To", click "Convert". Expected Result: "User input error".
        cy.converterMoeda("USD", "EUR", -500, "User input error");

        //Input "abc" (not a value) as the "Amount", "USD" as "Currency From", and "EUR" as "Currency To", click "Convert". Expected Result: "User input error".
        cy.converterMoeda("USD", "EUR", "abc", "User input error");
    });
});
