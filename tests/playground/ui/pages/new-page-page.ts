import { Locator, Page } from '@playwright/test';

export class NewPagePage  {
  readonly page : Page
  readonly welcomeMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeMessage = page.getByRole('heading', { name: 'Welcome to the new page!' });
  }

  async getWelcomeMessage(): Promise<Locator> {
    return await this.welcomeMessage;
  }

  async getTitle(): Promise<string>{
    return await this.page.title();
  }

  async getUrl(): Promise<string>{
    return await this.page.url();
  }
}