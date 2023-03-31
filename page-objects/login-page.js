class LoginPage {
    visit() {
        cy.visit('https://www.linkedin.com/login')
    }

    fillEmail(email) {
        cy.get('#username').type(email)
    }

    fillPassword(password) {
        cy.get('#password').type(password)
    }

    submit() {
        cy.get('button[type="submit"]').click()
    }
}

export default new LoginPage()
