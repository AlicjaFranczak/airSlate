import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { faker } from "@faker-js/faker";

test.describe("Login - negative path", () => {
  test("should display error message for any invalid credentials", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    // Arrange
    const invalidEmail = faker.internet
      .email()
      .replace("@example.com", "@invalid.pl");
    const invalidPassword = faker.internet.password({ length: 3 });

    console.log(
      `Testing invalid login: Email="${invalidEmail}", Password="${invalidPassword}"`,
    );

    await loginPage.goto();

    // Act
    await loginPage.login(invalidEmail, invalidPassword);

    // Assert
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(page).toHaveURL(/.*sign-in/);
  });
});
