import { createVibe } from "./core/browserFactory.js";
import {
  testLoginValidUser,
  testLoginInvalidCredentials,
  testLoginInvalidEmail,
  testLoginInvalidPassword
} from "./tests/login.spec.js";

async function runTest(name, fn, vibe) {
  try {
    console.log(`▶ Running: ${name}`);
    await fn(vibe);
    console.log(`✅ PASS: ${name}`);
  } catch (err) {
    console.error(`❌ FAIL: ${name}`);
    console.error(err?.message || err);
    process.exitCode = 1;
  }
}

async function run() {
  const vibe = await createVibe();

  try {
   //await runTest("Login - Valid user", testLoginValidUser, vibe);
    await runTest("Login - Invalid credentials", testLoginInvalidCredentials, vibe);
    await runTest("Login - Invalid email", testLoginInvalidEmail, vibe);
    await runTest("Login - Invalid password", testLoginInvalidPassword, vibe);
  } finally {
    try { await vibe.quit(); } catch {}
  }
}

run();
