import { gerarNome, generateEmail} from "../../support/utils"

describe('Smoke teste - Login', () => {

    beforeEach( () => {
    cy.visit('')
    const Dados = {
       email: generateEmail(),
       nome:gerarNome(),
       senha:'123456',
       saldo:'Sim'
    }
    
    cy.CadastroUsuários(Dados)
    //Fechar Modal de cadastro
    cy.contains('a','Fechar').click()
    cy.Login(Dados.email,Dados.senha)

    })
  it('Ao realizar transferência com sucesso deve ser debitado o valor da conta e exibir a mensagem de "Transferência realizada com sucesso"', () => {


})
})