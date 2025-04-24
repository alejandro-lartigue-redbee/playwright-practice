import { Locator, FrameLocator, Page } from '@playwright/test';

export class NestedIframePage  {
    readonly page : Page

    readonly iFrame1_byLocator: Locator;
    readonly iFrame2_byLocator: Locator;
    readonly buttonClickMe_byLocator: Locator;
    readonly successMessage_byLocator: Locator;

    readonly iFrame1_byFrameLocator: FrameLocator;
    readonly iFrame2_byFrameLocator: FrameLocator;
    readonly buttonClickMe_byFrameLocator: Locator;
    readonly successMessage_byFrameLocator: Locator;

    constructor(page: Page) {
        this.page = page;

        this.iFrame1_byLocator = page.locator('iframe[name="frame1"]');
        this.iFrame2_byLocator = this.iFrame1_byLocator.contentFrame().locator('iframe[name="frame2"]');
        this.buttonClickMe_byLocator = this.iFrame2_byLocator.contentFrame().getByRole('link', { name: 'Click Me' });
        this.successMessage_byLocator = this.iFrame2_byLocator.contentFrame().getByText('Button Clicked');

        this.iFrame1_byFrameLocator = page.frameLocator('iframe[name="frame1"]');
        this.iFrame2_byFrameLocator = this.iFrame1_byFrameLocator.frameLocator('iframe[name="frame2"]');
        this.buttonClickMe_byFrameLocator = this.iFrame2_byFrameLocator.getByRole('link', { name: 'Click Me' });
        this.successMessage_byFrameLocator = this.iFrame2_byFrameLocator.getByText('Button Clicked');
    }

    async goto() {
        await this.page.goto('/apps/iframe');
    }

    async clickButtonClickMe_byLocator() {
        await this.buttonClickMe_byLocator.click();
    }

    async clickButtonClickMe_byFrameLocator() {
        await this.buttonClickMe_byFrameLocator.click();
    }
}