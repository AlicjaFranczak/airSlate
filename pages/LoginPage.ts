import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByTestId("email-input");
    this.passwordInput = page.locator('input[type="password"]');
    this.submitButton = page.getByTestId("auth-submit-btn");
    this.errorMessage = page.getByText("Error: Username and password");
  }

  async goto() {
    await this.page.goto("https://dochub.com/sign-in");
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
