import { Locator, Page } from '@playwright/test';

export class StarsRatingWidgetPage {

    readonly page: Page
    readonly mainContent: Locator;
    readonly labelStars: Locator;
    readonly footerText: Locator;
    readonly footerNumb: Locator;
    readonly slideImg: Locator;

    readonly Star1: Locator;
    readonly Star2: Locator;
    readonly Star3: Locator;
    readonly Star4: Locator;
    readonly Star5: Locator;


    constructor(page: Page) {
        this.page = page;
        this.mainContent = page.locator('.content');
        this.labelStars = page.locator('label');
        this.footerText = page.locator('.footer > .text');
        this.footerNumb = page.locator('.footer > .numb');
        this.slideImg = page.locator('.slideImg');

        this.Star1 = this.labelStars.nth(0);
        this.Star2 = this.labelStars.nth(1);
        this.Star3 = this.labelStars.nth(2);
        this.Star4 = this.labelStars.nth(3);
        this.Star5 = this.labelStars.nth(4);
    }

    async goto() {
        await this.page.goto("/apps/rating/");
    }

    async pressStar1() {
        await this.Star1.click();
    }
    async pressStar2() {
        await this.Star2.click();
    }
    async pressStar3() {
        await this.Star3.click();
    }
    async pressStar4() {
        await this.Star4.click();
    }
    async pressStar5() {
        await this.Star5.click();
    }

    async getCurrentText() {
        return await this.footerText.evaluate(el => window.getComputedStyle(el, '::before').getPropertyValue('content').replace(/^"(.*)"$/, '$1'));
    }

    async getCurrentNumb() {
        return await this.footerNumb.evaluate(el => window.getComputedStyle(el, '::before').getPropertyValue('content').replace(/^"(.*)"$/, '$1'));
    }
}