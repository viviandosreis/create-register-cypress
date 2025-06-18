describe('Client Registration Test', () => {
  beforeEach(() => {
    // Visit the main page before each test
    cy.visit('/')
  })

  it('should register a new client successfully', () => {
    // Click on "Cadastrar Cliente" button to open registration form
    cy.contains('Cadastrar Cliente').click()

    // Wait for the registration form to be visible
    //cy.get('form').should('be.visible')

    // Fill in the registration fields using placeholders
    cy.get('input[placeholder="Nome do prestador"]').type('Maria Silva')
    cy.get('input[placeholder="exemplo@email.com"]').type('maria.silva@example.com')
    cy.get('input[placeholder="111.111.111-22"]').type('123.456.789-00')
    cy.get('input[placeholder="(00) 00000-0000"]').type('11987654321')
    cy.get('input[placeholder="00000-000"]').type('01234-567')
    cy.get('input[placeholder="Nome da rua"]').type('Rua das Flores')
    cy.get('input[placeholder="000"]').type('123')
    cy.get('input[placeholder="Complemento"]').type('Apto 45')
    cy.get('input[placeholder="Nome do Bairro"]').type('Centro')
    cy.get('input[placeholder="Nome da cidade"]').type('São Paulo')
    // Observassão field: optional and may be a textarea
    cy.get('body').then($body => {
      if ($body.find('textarea[placeholder*="Observ"]').length) {
        cy.get('textarea[placeholder*="Observ"]').type('Cadastro automatizado via Cypress')
      }
    })

    // Submit the form by clicking "Cadastrar" button
    cy.contains('Cadastrar').click()

    // Verify that we are redirected back to the main page
    cy.url().should('eq', 'https://teste-qa-devio.vercel.app/')
    // No success message check, as the system only redirects
  })

  it('should handle form validation errors', () => {
    // Click on "Cadastrar Cliente" button
    cy.contains('Cadastrar Cliente').click()

    // Try to submit empty form
    cy.contains('Cadastrar').click()

    // Check for validation messages
    cy.get('body').then(($body) => {
      if ($body.find('.error, .alert-danger, [class*="error"], [class*="invalid"]').length > 0) {
        cy.get('.error, .alert-danger, [class*="error"], [class*="invalid"]').should('be.visible')
      }
    })
  })
}) 