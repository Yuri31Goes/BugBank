
describe('Smoke teste - Cadastro', () => {

    beforeEach( () => {
    cy.visit('')
    })

  it('01 - Realizar Cadastro Válido', () => {
    cy.CadastroUsuários()
  })

})