import { browser } from "vibium";

export async function createVibe() {
  // Vibium is visible by default (good for debugging)
  const vibe = await browser.launch();
  return vibe;
}
