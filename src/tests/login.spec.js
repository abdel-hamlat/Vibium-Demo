import { LoginPage } from "../pages/login.page.js";
import { expectContains } from "../core/assert.js";

/**
 * Full login test suite:
 * - Positive: valid username/password
 * - Negative: invalid credentials
 * - Negative: invalid email
 * - Negative: invalid password
 *
 * Target: https://the-internet.herokuapp.com/login
 * Valid creds: tomsmith / SuperSecretPassword!
 */

export async function testLoginValidUser(vibe) {
  const login = new LoginPage(vibe);

  await login.open();
  await login.login("tomsmith", "SuperSecretPassword!");

  const message = await login.getFlashMessage();
  expectContains(
    message,
    "You logged into a secure area",
    "Expected successful login message"
  );
}

export async function testLoginInvalidCredentials(vibe) {
  const login = new LoginPage(vibe);

  await login.open();
  await login.login("invalid@test.com", "InvalidPassword");

  const error = await login.getFlashMessage();
  expectContains(
    error,
    "Your username is invalid!",
    "Expected error message to contain 'Your username is invalid!'"
  );
}

export async function testLoginInvalidEmail(vibe) {
  const login = new LoginPage(vibe);

  await login.open();
  // invalid email/username, any password
  await login.login("invalid@test.com", "ValidPassword");

  const error = await login.getFlashMessage();
  expectContains(
    error,
    "Your username is invalid!",
    "Expected error message to contain 'Your username is invalid!'"
  );
}

export async function testLoginInvalidPassword(vibe) {
  const login = new LoginPage(vibe);

  await login.open();
  // valid username, invalid password
  await login.login("tomsmith", "InvalidPassword");

  const error = await login.getFlashMessage();
  expectContains(
    error,
    "Your password is invalid!",
    "Expected error message to contain 'Your password is invalid!'"
  );
}
