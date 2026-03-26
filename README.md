# airSlate Task - UI Test Automation - Playwright + TypeScript
Test Assignment: QA General 

## 📌 Project Description

This project contains an automated UI test created as part of **Task 3**.
The test verifies the login functionality on the target page:

👉 https://dochub.com/sign-in

The scenario checks that an appropriate error message is displayed when invalid credentials are used. Plus verifies that the user remains on the login page (URL does not change).

---

## 🛠️ Tools & Technologies

* Playwright
* TypeScript
* Faker.js (for generating test data)
* Prettier (code formatting)
* Page Object Model (POM) design pattern

---

## 🧪 Test Scenario

1. Open the login page
2. Enter an invalid email and password
3. Click the login button
4. Verify that an authorization error message is displayed
5. Verify that the login attempt does not redirect the user away from the sign-in page

---

## 📂 Project Structure

* `pages/` – Page Object Models (login page)
* `tests/` – Test files
* `playwright.config.ts` – Playwright configuration

---

## ⚙️ Installation

Create the repository and install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## 🎨 Code Formatting (Prettier)

Install Prettier:

```bash
npm install --save-dev prettier
```

Format all files:

```bash
npx prettier --write .
```

## 🌐 Browser Configuration

Tests are configured to run only on Chromium using Playwright.
Other browsers (Firefox, WebKit) are intentionally disabled in the configuration.

---

## ▶️ Run Tests

Run all tests:

```bash
npx playwright test
```

Run tests in UI mode:

```bash
npx playwright test --ui
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

---

## 📊 View Test Report

After running tests:

```bash
npx playwright show-report
```

---

## 🧩 Notes

* The project uses the Page Object Model (POM) for better maintainability.
* Faker.js is used to generate invalid test data dynamically.
* Code follows clean structure and clear naming conventions.
