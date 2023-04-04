
const userName = '#username'
const pass = '#password'
const submitButton = 'button[type="submit"]'


class LoginPage {
    visit() {
        cy.visit('https://www.linkedin.com/login')
    }

    fillEmail(email) {
        cy.get(userName).type(email)
    }

    fillPassword(password) {
        cy.get(pass).type(password)
    }

    submit() {
        cy.get(submitButton).click()
    }

    verifyHomePageIsLoaded() {
        return cy.url().should('include', '/feed')
    }
}

export default new LoginPage()
