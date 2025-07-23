import { gerarNome, generateEmail} from "../../support/utils"
describe('Smoke teste - Cadastro', () => {

    beforeEach( () => {
    cy.visit('')
    })

  it('Cadastrar conta com sucesso', () => {
    const Dados = {
       email: generateEmail(),
       nome:gerarNome(),
       senha:'123456'
    }
    
    cy.CadastroUsuários(Dados)
    //Validação - Deve Exibir Número da conta Criada
    cy.get('#modalText').should('exist');
  
})




  

})