describe('Register Multiple Clients', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  function generateClientData(index) {
    return {
      nome: `Cliente Teste ${index}`,
      email: `cliente${index}@example.com`,
      cpf: `123.456.78${index.toString().padStart(2, '0')}-0${index}`,
      telefone: `1199999000${index}`,
      cep: `01234-56${index}`,
      rua: `Rua Teste ${index}`,
      numero: `${100 + index}`,
      complemento: `Apto ${index}`,
      bairro: `Bairro ${index}`,
      cidade: `Cidade ${index}`,
      observacao: `Cadastro automatizado ${index}`
    }
  }

  it('should register 10 new clients successfully', () => {
    for (let i = 1; i <= 10; i++) {
      const client = generateClientData(i)
      cy.contains('Cadastrar Cliente').click()
      cy.get('input[placeholder="Nome do prestador"]').type(client.nome)
      cy.get('input[placeholder="exemplo@email.com"]').type(client.email)
      cy.get('input[placeholder="111.111.111-22"]').type(client.cpf)
      cy.get('input[placeholder="(00) 00000-0000"]').type(client.telefone)
      cy.get('input[placeholder="00000-000"]').type(client.cep)
      cy.get('input[placeholder="Nome da rua"]').type(client.rua)
      cy.get('input[placeholder="000"]').type(client.numero)
      cy.get('input[placeholder="Complemento"]').type(client.complemento)
      cy.get('input[placeholder="Nome do Bairro"]').type(client.bairro)
      cy.get('input[placeholder="Nome da cidade"]').type(client.cidade)
      cy.get('body').then($body => {
        if ($body.find('textarea[placeholder*="Observ"]').length) {
          cy.get('textarea[placeholder*="Observ"]').type(client.observacao)
        }
      })
      cy.contains('Cadastrar').click()
      cy.url().should('eq', 'https://teste-qa-devio.vercel.app/')
    }
  })
}) 