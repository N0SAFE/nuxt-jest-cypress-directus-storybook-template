// default Cypress test

describe('My First Test', () => {
    // verify the h1 element
    it('Visits the app root url', async () => {
        cy.visit('/')
        const btn = cy.get('#button')
        const helloArr = ['Hello world', 'Hola mundo', "Bonjour monde"]
        for(let i = 0; i < helloArr.length; i++){
            btn.contains(helloArr[i])
            btn.click()
        }
    })
})