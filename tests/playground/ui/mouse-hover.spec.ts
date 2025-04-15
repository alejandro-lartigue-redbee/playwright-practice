import { test, expect } from './fixtures/playground-pages';

test.describe('Mouser Hover', () => {

    test.beforeEach(async ({ mouseHoverPage }) => {
        await mouseHoverPage.goto();
     });

     test("Should display the Spiderman's movie price as $24.96", async ({ mouseHoverPage }) => {
        await mouseHoverPage.hoverOnPoster();
        const currentPriceShown = await mouseHoverPage.getCurrentPrice();
        const expectedPrice = '$24.96';
        await expect(currentPriceShown).toBe(expectedPrice);
     });
});