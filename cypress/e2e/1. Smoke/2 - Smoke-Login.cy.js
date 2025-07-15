import { gerarNome } from "../../support/utils"

describe('Smoke teste - Login', () => {

    beforeEach( () => {
    cy.visit('')


    })
  it('01 - Realizar login com usuário Válido', () => {
   const Dados = {
      email:'testes01aja@gmail.com',
      nome:gerarNome(),
      senha:'123456',
      saldo:'não'
    
    }
    cy.CadastroUsuários(Dados)
    cy.get('.styles__ContainerInformations-sc-8zteav-3')
    cy.get('#btnCloseModal').click()
    cy.Login(Dados)
    //Validar Login
    cy.url().should('eq', 'https://bugbank.netlify.app/home')
     
  })

    it.only('02 - Tentar Realizar login com usuário Não Cadastrado', () => {
   const Dados = {
      email:'testes02aja@gmail.com',
      senha:'123456',
    
    }
    cy.Login(Dados)
    //Validar não Login
    cy.get('.styles__ContainerInformations-sc-8zteav-3').should('exist')
    cy.url().should('not.eq', 'https://bugbank.netlify.app/home')
     
  })
})