
describe("Verify the JavaScript Alerts functionality", () => {
    beforeEach(() => {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
    })

    it("To verify user is able to click on JS Alert button", function () {
        cy.get('ul>li>button').first().click()
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('I am a JS Alert');
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    it("To verify user is able to click on JS Confirm-Ok button", function () {
        cy.get('ul>li>button').eq(1).click()
        cy.on('window:confirm', (txt) => {
            expect(txt).to.contains('I am a JS Confirm');
            return true
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it("To verify user is able to click on JS Confirm-Cancel button", function () {

        cy.get('ul>li>button').eq(1).click()
        cy.on('window:confirm', (txt) => {
            expect(txt).to.contains('I am a JS Confirm');
            return false
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })
})