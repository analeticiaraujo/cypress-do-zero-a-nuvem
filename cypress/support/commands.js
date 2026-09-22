Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Lucas',
    lastName: 'Silva',
    email: 'lucassilva@gmail.com',
    text: 'Teste'
}) => {
  cy.get('#firstName').type(data.firstName)
  cy.get('#lastName').type(data.lastName)
  cy.get('#email').type(data.email)
  cy.get('#open-text-area').type(data.text)
  cy.get('.button').should('be.visible').click()
})