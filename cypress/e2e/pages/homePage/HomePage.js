var elements = require('./elements')

class HomePage {
    verifyOnHomePage() {
        return cy.get(elements.HOMEPAGE.HOME_PAGE_HEADING).should('be.visible')
    }

    verifyUsernameOnHomePage(value) {
        return cy.get(elements.HOMEPAGE.USERNAME_LABEL)
                    .should('be.visible')
                    .and('include.text', value)
    }
}

export default HomePage