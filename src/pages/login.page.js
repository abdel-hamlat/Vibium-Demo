import { ENV } from "../../config/env.js";

export class LoginPage {
  constructor(vibe) {
    this.vibe = vibe;
  }

  async open() {
    await this.vibe.go(ENV.baseUrl);
  }

  async login(username, password) {
    const userInput = await this.vibe.find("#username");
    await userInput.type(username);

    const passInput = await this.vibe.find("#password");
    await passInput.type(password);

    const loginBtn = await this.vibe.find("button[type='submit']");
    await loginBtn.click();
  }

  async getFlashMessage() {
  const flash = await this.vibe.find("#flash");
  return await flash.text();
}


}
