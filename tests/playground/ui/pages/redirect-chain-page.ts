import { Locator, Page } from '@playwright/test';

export class RedirectChainPage {
  readonly page: Page
  readonly buttonStartRedirection: Locator;
  readonly infoOfPage: Locator;
  readonly buttonBack: Locator;
  constructor(page: Page) {
    this.page = page;
    this.buttonStartRedirection = page.getByRole('link', { name: 'Start Redirection chain' });
    this.infoOfPage = page.locator('#info');
    this.buttonBack = page.getByRole('link', { name: 'Go Back' });
  }

  async goto() {
    return await this.page.goto('/apps/redirect');
  }

  async clickButtonStartRedirection() {
    await this.buttonStartRedirection.click();
  }
  async clickButtonBack() {
    await this.buttonBack.click();
  }

  async getInfoOfPage() {
    return await this.infoOfPage.textContent();
  }

  async getUrl() {
    return await this.page.url();
  }

  async waitForURL() {
    return await this.page.waitForURL('**/pagina-final', { timeout: 10000 });
  }

  async getTitle() {
    return await this.page.title();
  }
}