import LoginPage from "../../page-objects/login-page";

describe('Login', () => {

  it('should login successfully', () => {
    LoginPage.visit()
    LoginPage.fillEmail('your_username')
    LoginPage.fillPassword('your_password')
    LoginPage.submit()
    LoginPage.verifyHomePageIsLoaded()
  })
})