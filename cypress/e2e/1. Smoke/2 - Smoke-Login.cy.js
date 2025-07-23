import { gerarNome, generateEmail} from "../../support/utils"

describe('Smoke teste - Login', () => {

    beforeEach( () => {
    cy.visit('')


    })
  it('Usuários válidos e cadastrados são direcionados para a home', () => {
    const Dados = {
       email: generateEmail(),
       nome:gerarNome(),
       senha:'123456'
    }

    cy.CadastroUsuários(Dados)

     //Fechar Modal de cadastro
     cy.contains('a','Fechar').click()

     cy.Login(Dados.email,Dados.senha)

    //Validação de direcionamento da home
    cy.url().should('eq', 'https://bugbank.netlify.app/home');



  })
})