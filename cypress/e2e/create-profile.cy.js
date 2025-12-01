/// <reference types="cypress" />

describe("Desafio", () => {
    it("Validacao dos cenarios de criar um perfil", () => {
        cy.visit("https://bugeater.web.app/app/challenge/scripted/createProfile");
        cy.contains("button", "Accept").click();
        cy.contains("button", "Skip").click();

        //Enter Nickname: "tech_go1", Last Name: "Anderson", Birth Year: "2000", and press "Submit". Expected Result: "Your profile created". All entered values meet the requirements.
        cy.createProfile(2000, "tech_go1", "Anderson", "Your profile created");

        //Enter Nickname: "c_99", Last Name: "Harrison", Birth Year: "2001", and press "Submit". Expected Result: "User input error". One or several of the entered values don't meet the min length requirement.
        cy.createProfile(2001, "c_99", "Harrison", "User input error");

        //Enter Nickname "superlongnickname_2024", Last Name: "Nguyen", Birth Year: "2004", and press "Submit". Expected Result: "User input error". One or several of the entered values don't meet the max length requirement.
        cy.createProfile(2004, "superlongnickname_2023", "Nguyen", "User input error");

        //Leave Nickname and/or Last Name fields empty, then enter any Birth Year and press "Submit". Expected Result: "User input error".
        cy.createProfile(2003, " ", " ", "User input error");

        //Enter Nickname: "@@@@@" Last Name: "O'Reilly", choose any Birth Year, and press "Submit". Expected Result: "User input error". Nickname field contains not allowed characters.
        cy.createProfile(2003, "@@@@@", "O'Reilly", "User input error");

        //Enter Nickname: "galaxy_42", Last Name: "Newman", Birth Year: "1998", and press "Submit". Expected Result: "User input error". Birth Year is not within specified period 2000-2005.
        cy.createProfile(1998, "galaxy_42", "Newman", "User input error");
    });
});
