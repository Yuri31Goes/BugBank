 Cypress.Commands.add('CadastroUsuários', (Dados) => {  
   
    cy.contains('button','Registrar').click()

    cy.get('input[name="email"]')
    .eq(1)
    .type(Dados.email, {force: true})

    cy.get('input[name="name"]')
    .type(Dados.nome, {force: true})

    
   cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
   .type(Dados.senha, {force: true})

   cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
   .type(Dados.senha, {force: true})

   if(Dados.saldo=='sim'){
     cy.get('#toggleAddBalance').click({force: true})
   }

   cy.contains('button', 'Cadastrar').click({force: true})



 })

  Cypress.Commands.add('Login', (email,senha) => { 
       cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default')
       .type(email)

       cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
       .type(senha)

       cy.contains('button','Acessar').click()
   })
