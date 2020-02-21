describe("basic tests",function()
{
    it('first test case',()=>
    {
        cy.visit('localhost:3006')
    })

    it('heading check',()=>
    {
        cy.get('h3').should('have.text','Logged Exercises')
    })

    it('create exercise log',()=>
    {
        cy.get(':nth-child(2) > .nav-link').should('have.text','Create Exercise Log').click()
    })

    it('Url check',()=>
    {
        cy.url().should('include','create')
    })
})