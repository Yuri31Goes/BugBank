 Cypress.Commands.add('CadastroUsuários', (Dados) => {  
   
    cy.contains('button','Registrar').click()
    cy.get('input[name="email"]')
    .eq(1)
    .type(Dados.email, {force: true})


 

 })