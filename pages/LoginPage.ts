import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly deleteAccountButton: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.deleteAccountButton = page.locator('a[href="/delete_account"]'); 
    this.logoutButton = page.locator('a[href="/logout"]');
  }

  async navigate() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async deleteAccount() { // New method to delete the account
    await this.deleteAccountButton.waitFor({ state: 'visible', timeout: 10000 }); // Wait for the delete account button to be visible before clicking
    await this.deleteAccountButton.click();
    await this.page.waitForSelector('text=Account Deleted!'); // Wait for the confirmation message to appear
  }

  async logout() {
    await this.logoutButton.waitFor({ state: 'visible', timeout: 10000 });          
    await this.logoutButton.click();
    await this.page.$('text=Login to your account'); // Wait for the login page to be visible after logout
  }
}