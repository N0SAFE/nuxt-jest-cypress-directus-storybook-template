// default Cypress test

describe('My First Test', () => {
    // verify the h1 element
    it('Visits the app root url', () => {
        cy.visit('/')
        cy.contains('button', 'test')
    })
})