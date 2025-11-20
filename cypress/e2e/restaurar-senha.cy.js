describe("Desafio restaurar senha", () => {
    it("Verificacao na restauracao de senha", () => {
        cy.visit("https://bugeater.web.app/app/challenge/learn/passwordRestore");
        cy.contains("button", "Accept").click();
        cy.contains("button", "Skip").click();

        //Enter "P@ssw0rD" as the password, which meets all the requirements, and then click on the "Submit" button. Expected result: "Valid Password".
        cy.restaurarSenha("P@ssw0rD", "Valid Password");

        //Enter "hElloW0rld" as the password, which does not meet all the requirements, and click the "Submit" button. Expected result: "Invalid Password".
        cy.restaurarSenha("hElloW0rld", "Invalid Password");

        //Enter the same password as the saved one - "Passw0rd!7" and click the "Submit" button. Expected result: "Invalid Password".
        cy.restaurarSenha("Passw0rd!7", "Invalid Password");

        //Leave the "New Password" field empty and click "Submit" button. Expected result: "Invalid Password".
        cy.restaurarSenha("{backspace}", "Invalid Password");

        //Enter "Mo7%" as the password, which is less than 5 characters long, and click the "Submit" button. Expected result: "Invalid Password".
        cy.restaurarSenha("Mo7%", "Invalid Password");

        //Enter "asdfghjklpoiuytrewq" as the password, which exceeds 15 characters, and then click the "Submit" button. Expected result: "Invalid Password".
        cy.restaurarSenha("asdfghjklpoiuytrewq", "Invalid Password");

        //Enter "ONLYCAPITAL" as the password, which contains only uppercase letters, and then click on the "Submit" button. Expected result: "Invalid Password".
        cy.restaurarSenha("ONLYCAPITAL", "Invalid Password");

        //Enter "onlylower" as the password, which contains only lowercase letters, and then click on the "Submit" button. Expected result: "Invalid Password".
        cy.restaurarSenha("onlylower", "Invalid Password");

        //Enter "001122" as the password containing only digits and click the "Submit" button. Expected result: "Invalid Password".
        cy.restaurarSenha("001122", "Invalid Password");

        //Enter "@@@@@" as the password, which contains only special characters, and then click on the "Submit" button. Expected result: "Invalid Password".
        cy.restaurarSenha("@@@@@", "Invalid Password");

        //Enter "Κωδικός" as the password, which contains the not-allowed symbol, and then click on the "Submit" button. Expected result: "Invalid Password".
        cy.restaurarSenha("Κωδικός", "Invalid Password");
    });
});
