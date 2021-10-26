
describe("Verify the Dropdown functionality", () => {

    beforeEach(() => {
        cy.visit("http://the-internet.herokuapp.com/dropdown")
    })
    it("To verify dropdown option 1", function () {

        cy.get('#dropdown').select('Option 1').should('have.value', '1')
    })

    it("To verify dropdown option 2", function () {

        cy.get('#dropdown').select('Option 2').should('have.value', '2')
    })

})