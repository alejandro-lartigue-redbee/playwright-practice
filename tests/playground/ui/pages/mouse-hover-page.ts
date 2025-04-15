import { Locator, Page } from '@playwright/test';

export class MouseHoverPage  {
  readonly page : Page
  readonly spidermanPoster: Locator;
  readonly currentPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.spidermanPoster = page.locator(".poster")
    this.currentPrice = page.locator(".current-price");
  }

  async goto() {
    await this.page.goto('/apps/mouse-hover');
  }

  async hoverOnPoster() {
    await this.spidermanPoster.hover();
  }

  async getCurrentPrice() {
    return await this.currentPrice.textContent();
  }
}