import { test, expect } from './fixtures/playground-pages';

test.describe('Pop-Up Window', () => {

  test.beforeEach(async ({ popUpWindowPage }) => {
    await popUpWindowPage.goto();
  });

  test("Should open and close pop-up window", async ({ popUpWindowPage }) => {
    const [popup] = await Promise.all([
      popUpWindowPage.page.waitForEvent('popup'),
      popUpWindowPage.openPopup(),
    ]);
    await popup.getByRole('button', { name: 'Submit' }).click();
    await expect(popUpWindowPage.messagePopup).toHaveText('Button Clicked');
  });
});