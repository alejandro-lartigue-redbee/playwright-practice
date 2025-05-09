import { test, expect } from './fixtures/playground-pages';
import { TakeCapture } from './fixtures/take-screenshot';
import { Response as PlaywrightResponse } from 'playwright';
import fs from 'fs';

let response: PlaywrightResponse;

test.describe('Redirect chain', () => {

    test.beforeEach(async ({ redirectChainPage }) => {

        const res = await redirectChainPage.goto();
        if (!res) {
            throw new Error('Error navigating to URL app (/apps/redirect)');
        }
        response = res;
    });

    test('Should display correct pages after redirecting', async ({ redirectChainPage }, testInfo) => {

        const redirectChain: string[] = [];

        // Add listen the responses event to capture the redirect chain.
        // Used this instead of 'redirectedFrom()' (https://playwright.dev/docs/api/class-request#request-redirected-from)
        redirectChainPage.page.on('response', async (response) => {
            // Check if the response URL matches the redirect pattern '/apps/redirect/*.html'.
            if (/\/apps\/redirect\/.*\.html/.test(response.url())) {
                redirectChain.push(response.url());
            }
        });

        await redirectChainPage.clickButtonStartRedirection();

        // It waits up to 10 seconds for the last page to load.
        await redirectChainPage.page.waitForURL('**/apps/redirect/last', { timeout: 10000 });

        expect(await redirectChainPage.getTitle()).toContain('Last Page');
        expect(await redirectChainPage.getUrl()).toContain(`${process.env.BASE_URL}apps/redirect/last`);
        expect(await redirectChainPage.getInfoOfPage()).toContain("Welcome to the Last Page");

        expect(redirectChain.length).toBe(6);
        expect(redirectChain[0]).toEqual(`${process.env.BASE_URL}apps/redirect/second.html`);
        expect(redirectChain[1]).toEqual(`${process.env.BASE_URL}apps/redirect/third.html`);
        expect(redirectChain[2]).toEqual(`${process.env.BASE_URL}apps/redirect/fourth.html`);
        expect(redirectChain[3]).toEqual(`${process.env.BASE_URL}apps/redirect/fifth.html`);
        expect(redirectChain[4]).toEqual(`${process.env.BASE_URL}apps/redirect/sixth.html`);
        expect(redirectChain[5]).toEqual(`${process.env.BASE_URL}apps/redirect/last.html`);

        await expect(redirectChainPage.page).toHaveScreenshot();

    });

    test('example iFrame test', async ({ page }) => {
        await page.goto('https://qaplayground.dev/apps/iframe/');
        await expect(page).toHaveScreenshot({ stylePath: 'config/screenshot.css' });
        // await expect(page).toHaveScreenshot();
    });

    test.afterEach(async ({ redirectChainPage }, testInfo) => {
        // Remove the listener to avoid memory leaks.
        redirectChainPage.page.removeAllListeners('response');
    });
});