import { Locator, Page } from '@playwright/test';

export class ShadowDomPage {
    readonly page: Page
    readonly boostButton: Locator;
    readonly progressBar: Locator;
    readonly progressBarContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.boostButton = page.getByRole('button', { name: 'Boost 🚀' });
        this.progressBar = page.locator('progress-bar');
        this.progressBarContainer = page.locator('div.fill');
    }

    async goto() {
        await this.page.goto("/apps/shadow-dom/");
    }

    async pressBoostButton() {
        return await this.boostButton.click();
    }

    async getPercentInProgressBar() {
        return await this.progressBar.getAttribute("percent");
    }

    async getStyleInProgressContainer() {
        return await this.progressBarContainer.getAttribute("style");
    }
}