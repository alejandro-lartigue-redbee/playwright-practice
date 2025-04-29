import { test, expect } from './fixtures/playground-pages';
import { Response as PlaywrightResponse } from 'playwright';

let response: PlaywrightResponse;

test.describe('Redirect chain', () => {

    test.beforeEach(async ({ redirectChainPage }) => {
        const res = await redirectChainPage.goto();
        if (!res) {
            throw new Error('No se pudo navegar a /apps/redirect');
        }
        response = res;
    });

    test('Should display correct page pages after redirecting', async ({ redirectChainPage }) => {

        const redirectChain: string[] = [];

        // Listen for the response event to capture the redirect chain.
        // Use this instead of 'redirectedFrom()' (https://playwright.dev/docs/api/class-request#request-redirected-from) 
        redirectChainPage.page.on('response', async (response) => {
            if (response.url().includes('/apps/redirect/') && response.url().includes('.html')) {
                redirectChain.push(response.url());
            }
        });

        await redirectChainPage.clickButtonStartRedirection();

        await redirectChainPage.page.waitForURL('**/apps/redirect/last', { timeout: 10000 });

        expect(await redirectChainPage.getTitle()).toContain('Last Page');
        expect(await redirectChainPage.getUrl()).toContain("/apps/redirect/last");
        expect(await redirectChainPage.getInfoOfPage()).toContain("Welcome to the Last Page");
        expect(redirectChain.length).toBe(6);
        expect(redirectChain[0]).toContain("/apps/redirect/second");
        expect(redirectChain[1]).toContain("/apps/redirect/third");
        expect(redirectChain[2]).toContain("/apps/redirect/fourth");
        expect(redirectChain[3]).toContain("/apps/redirect/fifth");
        expect(redirectChain[4]).toContain("/apps/redirect/sixth");
        expect(redirectChain[5]).toContain("/apps/redirect/last");
    });
});