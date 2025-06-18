// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Add custom commands for better test reliability
Cypress.Commands.add('fillRegistrationForm', (userData = {}) => {
  const defaultData = {
    nome: 'Maria Silva',
    email: 'maria.silva@example.com',
    telefone: '11987654321',
    endereco: 'Rua das Flores, 123',
    cidade: 'São Paulo',
    estado: 'SP',
    cep: '01234-567',
    cpf: '12345678901',
    dataNascimento: '1990-01-01',
    genero: 'Feminino'
  }

  const data = { ...defaultData, ...userData }

  // Fill each field if it exists
  Object.entries(data).forEach(([field, value]) => {
    cy.get(`input[name="${field}"], input[placeholder*="${field}"], #${field}, input[type="${field === 'email' ? 'email' : 'text'}"]`).then(($el) => {
      if ($el.length > 0) {
        cy.wrap($el).clear().type(value)
      }
    })
  })

  // Handle select fields
  cy.get('select[name="genero"], #genero').then(($select) => {
    if ($select.length > 0) {
      cy.wrap($select).select(data.genero)
    }
  })
}) 