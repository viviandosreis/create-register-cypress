# Cypress Client Registration Test

This project contains Cypress tests for automating the client registration process on the [teste-qa-devio.vercel.app](https://teste-qa-devio.vercel.app/) website.

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Cypress (if not already installed):
```bash
npx cypress install
```

## Running the Tests

### Open Cypress Test Runner (Interactive Mode)
```bash
npm run cypress:open
```

### Run Tests in Headless Mode
```bash
npm run cypress:run
```

### Run Specific Test File
```bash
npx cypress run --spec "cypress/e2e/register-client.cy.js"
```

## Test Description

The test suite includes:

1. **Client Registration Test** (`register-client.cy.js`):
   - Navigates to the main page
   - Clicks on "Cadastrar Cliente" button
   - Fills all required form fields:
     - Name (Nome)
     - Email
     - Phone (Telefone)
     - Address (Endereço)
     - City (Cidade)
     - State (Estado)
     - ZIP Code (CEP)
     - CPF (if required)
     - Date of Birth (if required)
     - Gender (if required)
   - Submits the form by clicking "Cadastrar"
   - Verifies redirection back to the main page
   - Checks for success messages

2. **Form Validation Test**:
   - Tests form validation by attempting to submit an empty form
   - Verifies error messages are displayed

## Configuration

The test configuration is set in `cypress.config.js`:
- Base URL: https://teste-qa-devio.vercel.app
- Viewport: 1280x720
- Timeouts: 10 seconds for commands, requests, and responses

## Custom Commands

The project includes custom Cypress commands for better test reliability:
- `fillRegistrationForm()`: Fills the entire registration form with provided or default data
- `waitForPageLoad()`: Waits for page to be fully loaded
- `checkElementExists()`: Checks if an element exists on the page
- `fillFieldIfExists()`: Fills a form field only if it exists

## Notes

- The tests use flexible selectors to handle different possible field names and IDs
- Conditional logic is used to handle optional fields that may or may not be present
- The tests include proper error handling and validation checks
- Screenshots are automatically taken on test failures for debugging

## Troubleshooting

If tests fail, check:
1. Internet connection
2. Website availability
3. Field selectors (may need adjustment based on actual page structure)
4. Form validation requirements

For debugging, run tests in interactive mode using `npm run cypress:open` to see the test execution step by step. 