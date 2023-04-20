import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const loginPageUrl = "https://identity.devmissiongraph.io"

Given('I am on the landing page', () => {
    cy.visit('/')
    cy.origin(loginPageUrl, () => cy.contains('Log in to MissionGraph'))
})

When('I click on the login with email button', () => { 
    cy.origin(loginPageUrl, () => {
        cy.get('body > div.dex-container > div > div > div:nth-child(1) > a > button').click()
    })
})

When('I type in my email address {string}', (value) => {
    cy.origin(loginPageUrl, {args: {value}}, ({ value }) => {
        cy.get('#login').type(value)
        cy.wait(500)
    })
})

When('I type in my password {string}', (value) => {
    cy.origin(loginPageUrl, {args: {value}}, ({ value }) => {
        cy.get('#password').type(value)
        cy.wait(500)
    })
})

When('I click on the login button', () => {
    cy.origin(loginPageUrl, () => {
        cy.get('#submit-login').click()
        cy.wait(500)
    })
})