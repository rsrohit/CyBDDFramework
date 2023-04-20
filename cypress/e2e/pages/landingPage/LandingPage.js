var elements = require('./elements')

class LangingPage {
    clickLoginWithEmail() {
        return cy.get(elements.LANDINGPAGE.LOGIN_WITH_EMAIL_BUTTON).click()
    }

    clickLoginWithGithub() {
        return cy.get(elements.LANDINGPAGE.LOGIN_WITH_GITHUB_BUTTON).click()
    }

    verifyLandingPageHeading() {
        return cy.get(elements.LANDINGPAGE.LANDING_PAGE_HEADING).should("be.visible")
    }
}

export default LangingPage