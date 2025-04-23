import { Locator, Page } from '@playwright/test';

export class StarsRatingWidgetPage {

    readonly page: Page
    readonly mainContent: Locator;
    readonly labelStars: Locator;
    readonly footerText: Locator;
    readonly footerNumb: Locator;
    readonly slideImg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mainContent = page.locator('.content');
        this.labelStars = page.locator('label');
        this.footerText = page.locator('.footer > .text');
        this.footerNumb = page.locator('.footer > .numb');
        this.slideImg = page.locator('.slideImg');
    }

    async goto() {
        await this.page.goto("/apps/rating/");
    }

    async pressLabelStars(index: number) {
        await this.labelStars.nth(index).click();
    }

    async getCurrentText() {
        return await this.footerText.evaluate(el => window.getComputedStyle(el, '::before').getPropertyValue('content').replace(/^"(.*)"$/, '$1'));
    }

    async getCurrentNumb() {
        return await this.footerNumb.evaluate(el => window.getComputedStyle(el, '::before').getPropertyValue('content').replace(/^"(.*)"$/, '$1'));
    }
}