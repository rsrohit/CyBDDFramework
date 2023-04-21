import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../e2e/pages/loginPage/LoginPage'
import SignUpPage from '../../e2e/pages/signUpPage/SignUpPage'
import HomePage from '../../e2e/pages/homePage/HomePage'

const loginPage = new LoginPage()
const signUpPage = new SignUpPage()
const homePage = new HomePage()

Given('I am on the login page', () => {
    cy.visit('/')
    loginPage.verifyOnLoginPage()
})

When('I click on sigh up link', () => {
    loginPage.clickOnSignUpLink()
})

Then('I should be on the sign up page', () => {
    signUpPage.verifyOnSignUpPage()
})

When('I type in my first name {string}', (value) => {
    signUpPage.TypeInFirstNameTextbox(value)
})

When('I type in my last name {string}', (value) => {
    signUpPage.TypeInLastNameTextbox(value)
})

When('I type in my username {string}', (value) => {
    signUpPage.TypeInUsernameTextbox(value)
})

When('I type in my password {string}', (value) => {
    signUpPage.TypeInPasswordTextbox(value)
})

When('I type in my password again {string}', (value) => {
    signUpPage.TypeInConfirmPasswordTextbox(value)
})

When('I click on the sign up button', () => {
    signUpPage.clickOnSignUpButton()
})

Then('I should be on the login page', () => {
    loginPage.verifyOnLoginPage()
})

Then('I should be on the home page', () => {
    homePage.verifyOnHomePage()
})

Then('I should see username - {string} on homepage', (value) => {
    homePage.verifyUsernameOnHomePage(value)
})