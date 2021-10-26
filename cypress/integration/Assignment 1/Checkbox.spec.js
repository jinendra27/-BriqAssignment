describe('Verify the Checkboxes functionality', () => {

    beforeEach(function () {
        cy.visit('http://the-internet.herokuapp.com/checkboxes')
    })

    it('To verify the default checkbox 2 is checked', () => {
        cy.get('#checkboxes > :nth-child(3)').should('be.checked')

    })

    it('To verify user is able to check the check box when other checkbox is already checked', () => {
        cy.get('#checkboxes > :nth-child(3)').should('be.checked')
        cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')

    })

    it('To verify user is able to check the check box 1 when other checkbox is unchecked', () => {
        cy.get('#checkboxes > :nth-child(3)').uncheck().should('not.be.checked')
        cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')

    })
    it('To verify user is able to check the check box 2 when other checkbox is  unchecked', () => {
        cy.get('#checkboxes > :nth-child(3)').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(1)').uncheck().should('not.be.checked')

    })

    it('To verify user is able to uncheck the checked checkbox', () => {
        cy.get('#checkboxes > :nth-child(3)').should('be.checked')
        cy.get('#checkboxes > :nth-child(3)').uncheck().should('not.be.checked')

    })

})