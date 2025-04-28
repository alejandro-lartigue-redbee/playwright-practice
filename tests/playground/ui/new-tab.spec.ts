import { test, expect } from './fixtures/playground-pages';
import { NewPagePage } from './pages/new-page-page';

test.describe('New Tab', () => {

    test.beforeEach(async ({ newTabPage }) => {
        await newTabPage.goto();
     });

     test("Should open a new tab succesfull", async ({ newTabPage}) => {
        // Prepare the wait event for the new tab. With this line, you are telling Playwright that this event will occur.
        const newTabPromise = newTabPage.page.waitForEvent('popup');
        await newTabPage.openNewTab();
        // In this case, NewPagePage needs to receive a Promise<Page> because the page is being created from an event
        const newPagePage: NewPagePage = new NewPagePage(await newTabPromise);
        await expect(await newPagePage.getWelcomeMessage()).toBeVisible();
        await expect(await newPagePage.getUrl()).toBe('https://qaplayground.dev/apps/new-tab/new-page')
        await expect(await newPagePage.getTitle()).toBe('New Page');
     });
});
