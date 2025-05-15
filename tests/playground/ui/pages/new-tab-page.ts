import { Locator, Page } from '@playwright/test';

export class NewTabPage  {
  readonly page : Page
  readonly openNewTabButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.openNewTabButton = page.getByRole('link', { name: 'Open New Tab' });
  }

  async goto() {
    await this.page.goto('/apps/new-tab/');
  }

  async openNewTab() {
    await this.openNewTabButton.click();
  }
}