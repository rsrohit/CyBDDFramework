var elements = require('./elements')

class LoginPage {

    typeInEmailField(value) {
        return cy.get(elements.LOGINPAGE.EMAIL_TEXT).type(value)
    }

    typeInPasswordField(value) {
        return cy.get(elements.LOGINPAGE.PASSWORD_TEXT).type(value)
    }

    clickLoginButton() {
        return cy.get(elements.LOGINPAGE.LOGIN_BUTTON).click()
    }
}

export default LoginPage