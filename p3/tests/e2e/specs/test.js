// https://docs.cypress.io/api/introduction/api.html

describe('Home', () => {
  it('Visits homepage', () => {
    cy.visit('/')
    cy.contains('h1', 'Detour')
  }),

    it('Visits restaurants page', () => {
      cy.visit('/restaurants')
      cy.contains('h1', 'Detour')
      cy.get('[data-test="restaurant-name"]').should('have.length', 5)
    }),

    it('Visits destinations page', () => {
      cy.visit('/places')
      cy.get('[data-test="place-name"]').should('have.length', 5)
    }),

    it('Visits access denied page', () => {
      cy.visit('/restaurant/new')
      cy.contains('h2', 'Access Denied')
    }),

    it('Visits account page', () => {
      cy.visit('/account')
      cy.contains('h2', 'Login')
    }),

    it('Logs in', () => {
      cy.get('[data-test="login-button"]').click()
    })
})
