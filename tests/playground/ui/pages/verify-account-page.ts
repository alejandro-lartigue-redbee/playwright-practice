import { Locator, Page } from '@playwright/test';

export class VerifyAccountPage  {
    readonly page : Page
    readonly firstDigit: Locator;
    readonly secondDigit: Locator;
    readonly thirdDigit: Locator;
    readonly fourthDigit: Locator;
    readonly fifthDigit: Locator;
    readonly sixthDigit: Locator;
    readonly confirmationCodeMessage: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstDigit = page.locator('//input[1]');
        this.secondDigit = page.locator('//input[2]');
        this.thirdDigit = page.locator('//input[3]');
        this.fourthDigit = page.locator('//input[4]');
        this.fifthDigit = page.locator('//input[5]');
        this.sixthDigit = page.locator('//input[6]');
        this.confirmationCodeMessage = page.locator('.info');
        this.successMessage = page.locator('.success');
    }

    async goto() {
        await this.page.goto('/apps/verify-account');
    }

    async getConfirmationCode() {
        const confirmationCodeMessage = await this.confirmationCodeMessage.textContent();
        const digits = confirmationCodeMessage?.match(/\d/g) ?? [];
        const [firstDigit = '', secondDigit = '', thirdDigit = '', fourthDigit = '', fifthDigit = '', sixthDigit = ''] = digits;
        return { firstDigit, secondDigit, thirdDigit, fourthDigit, fifthDigit, sixthDigit };
    }

    async enterFirstDigit(digit: string) {
        await this.firstDigit.focus(); 
        await this.firstDigit.press(digit);
    }

    async enterSecondDigit(digit: string) {
        await this.secondDigit.focus(); 
        await this.secondDigit.press(digit);
    }

    async enterThirdDigit(digit: string) {
        await this.thirdDigit.focus(); 
        await this.thirdDigit.press(digit);
    }

    async enterFourthDigit(digit: string) {
        await this.fourthDigit.focus(); 
        await this.fourthDigit.press(digit);
    }

    async enterFifthDigit(digit: string) {
        await this.fifthDigit.focus(); 
        await this.fifthDigit.press(digit);
    }

    async enterSixthDigit(digit: string) {
        await this.sixthDigit.focus(); 
        await this.sixthDigit.press(digit);
    }
    
}