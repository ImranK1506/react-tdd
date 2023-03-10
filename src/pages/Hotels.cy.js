import React from 'react'
import Hotels from './Hotels'

describe('<Hotels />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.visit('http://localhost:3000')
  })
})