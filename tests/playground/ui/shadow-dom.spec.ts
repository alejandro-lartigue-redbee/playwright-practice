import { test, expect } from './fixtures/playground-pages';

//Click on the button and assert that progress is on the 95 percent
test.describe('Shadow DOM', () => {
    test.beforeEach(async ({ shadowDomPage }) => {
        await shadowDomPage.goto();
    });

    test('Should have progress is on the 95% when click on Boost - outside of "shadow-root"', async ({ shadowDomPage }) => {
        await shadowDomPage.pressBoostButton();
        await expect(async () => {
            expect(await shadowDomPage.getPercentInProgressBar()).toBe('95');
          }).toPass({ timeout: 15000 });
    });

    test('Should have progress is on the 95% when click on Boost - within of "shadow-root"', async ({ shadowDomPage }) => {
        await shadowDomPage.pressBoostButton();
        await expect(async () => {
            expect(await shadowDomPage.getStyleInProgressContainer()).toContain('95');
          }).toPass({ timeout: 15000 });
    });
});