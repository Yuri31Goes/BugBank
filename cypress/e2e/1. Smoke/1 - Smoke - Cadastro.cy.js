import { gerarNome } from "../../support/utils"
describe('Smoke teste - Cadastro', () => {

    beforeEach( () => {
    cy.visit('')
    })

  it('01 - Realizar Cadastro (SEM SALDO)', () => {
    const Dados = {
      email:'testes01aja@gmail.com',
      nome:gerarNome(),
      senha:'123456',
      saldo:'não'

    }
    cy.CadastroUsuários(Dados)

    //Validar Cadastro
    cy.get('.styles__ContainerInformations-sc-8zteav-3')
    .should('exist')
    cy.get('#btnCloseModal').click()
    cy.Login(Dados)
    cy.url().should('eq', 'https://bugbank.netlify.app/home')

    //Validar Saldo 
   cy.get('#textBalance').invoke('text').then((text) => {
  const normalizado = text.trim().replace(/\s+/g, ' ')
  expect(normalizado).to.eq('Saldo em conta R$ 0,00')
})


  })

    it('02 - Realizar Cadastro (COM SALDO)', () => {
    const Dados = {
      email:'testes01aja@gmail.com',
      nome:gerarNome(),
      senha:'123456',
      saldo:'sim'

    }
    cy.CadastroUsuários(Dados)

    //Validar Cadastro
    cy.get('.styles__ContainerInformations-sc-8zteav-3')
    .should('exist')
    cy.get('#btnCloseModal').click()
    cy.Login(Dados)
    cy.url().should('eq', 'https://bugbank.netlify.app/home')

   //Validar Saldo 
   cy.get('#textBalance').invoke('text').then((text) => {
   const normalizado = text.trim().replace(/\s+/g, ' ')
   expect(normalizado).to.not.eq('Saldo em conta R$ 0,00')
    })
    
  })

  it('03 - Tentar realizar cadastro (Dados não preenchidos)', () => {

  cy.contains('button','Registrar').click()
   cy.contains('button', 'Cadastrar').click({force: true})
   //Validar NÃO cadastro
   cy.get('.input__warging').should('exist') 
   cy.url().should('not.eq', 'https://bugbank.netlify.app/#') 
   
  })  

})