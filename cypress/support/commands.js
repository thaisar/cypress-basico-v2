Cypress.Commands.add('fillAllMandatoryFieldsAndSubmit', function() {

        cy.get('#firstName')
            .type('Thais')

        cy.get('#lastName')
            .type('Silveira')

        cy.get('#email')
            .type('thais@mileiq.com')

        cy.get(('textarea[id="open-text-area"]'))
            .type('Teste')

        cy.contains('button', 'Enviar')
            .click()
})