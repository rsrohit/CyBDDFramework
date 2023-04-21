var elements = require('./elements')

class SignUpPage {
    verifyOnSignUpPage() {
        return cy.get(elements.SIGNUPPAGE.SIGNUP_PAGE_HEADING)
                    .should('be.visible')
                    .and('have.text', 'Sign Up')
    }

    TypeInFirstNameTextbox(value) {
        return cy.get(elements.SIGNUPPAGE.FIRSTNAME_TEXT).type(value)
    }

    TypeInLastNameTextbox(value) {
        return cy.get(elements.SIGNUPPAGE.LASTNAME_TEXT).type(value)
    }

    TypeInUsernameTextbox(value) {
        return cy.get(elements.SIGNUPPAGE.USERNAME_TEXT).type(value)
    }

    TypeInPasswordTextbox(value) {
        return cy.get(elements.SIGNUPPAGE.PASSWORD_TEXT).type(value)
    }

    TypeInConfirmPasswordTextbox(value) {
        return cy.get(elements.SIGNUPPAGE.CONFIRM_PASSWORD_TEXT).type(value)
    }

    clickOnSignUpButton() {
        return cy.get(elements.SIGNUPPAGE.SIGN_UP_BUTTON).click()
    }
}

export default SignUpPage