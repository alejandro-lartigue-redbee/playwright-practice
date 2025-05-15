import { Page, Locator, expect } from '@playwright/test';

export class PopUpWindowPage {
  readonly page: Page;
  readonly buttonOpenPop: Locator;
  readonly messagePopup: Locator;
  readonly buttonSubmitPopup: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonOpenPop = page.getByRole('link', { name: 'OPEN' });
    this.messagePopup = page.locator('#info');
    this.buttonSubmitPopup = page.getByRole('button', { name: 'Submit' });
  }

  async goto() {
    await this.page.goto('/apps/popup');
  }

  async openPopup() {
    await this.buttonOpenPop.click();
  }

  async submitPopup() {
    await this.buttonSubmitPopup.click();
  }
}