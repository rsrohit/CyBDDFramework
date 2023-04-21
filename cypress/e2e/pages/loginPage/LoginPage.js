var elements = require('./elements')

class LoginPage {

    verifyOnLoginPage() {
        return cy.get(elements.LOGINPAGE.LOGIN_PAGE_HEADING)
                    .should('be.visible')
                    .and('have.text', 'Sign in')
    }

    typeInUsernameTextbox(value) {
        return cy.get(elements.LOGINPAGE.USERNAME_TEXT).type(value)
    }

    typeInPasswordTextbox(value) {
        return cy.get(elements.LOGINPAGE.PASSWORD_TEXT).type(value)
    }

    checkRememberMeCheckbox() {
        return cy.get(elements.LOGINPAGE.REMEMBER_ME_CHECKBOX).check()
    }

    clickOnSignInButton() {
        return cy.get(elements.LOGINPAGE.SIGN_IN_BUTTON).click()
    }

    clickOnSignUpLink() {
        return cy.get(elements.LOGINPAGE.SIGN_UP_LINK).click()
    }
}

export default LoginPage