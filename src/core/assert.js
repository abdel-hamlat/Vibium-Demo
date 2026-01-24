export function expectTrue(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message);
}

export function expectContains(actual, expectedSubstring, message) {
  if (!String(actual).includes(expectedSubstring)) {
    throw new Error(message || `Expected "${actual}" to include "${expectedSubstring}"`);
  }
}
