import { test, expect } from './fixtures/playground-pages';

test.describe('Nested Iframe', () => {

   test.beforeEach(async ({ nestedIframePage }) => {
      await nestedIframePage.goto();
   });


   test.describe('Verify using "contentFrame()"', () => {

      test('ContentFrame - Should display "IFrame 1"', async ({ nestedIframePage }) => {
         await expect(nestedIframePage.iFrame1_byLocator).toBeVisible();
      });

      test('ContentFrame - Should display "IFrame 2"', async ({ nestedIframePage }) => {
         await expect(nestedIframePage.iFrame2_byLocator).toBeVisible();
      });

      test('ContentFrame - Should display "Click Me" button', async ({ nestedIframePage }) => {
         await expect(nestedIframePage.buttonClickMe_byLocator).toBeVisible();
      });

      test('ContentFrame - After click in "Click Me", should display success message', async ({ nestedIframePage }) => {
         await nestedIframePage.clickButtonClickMe_byLocator();
         await expect(nestedIframePage.successMessage_byLocator).toBeVisible();
      });

   });

   test.describe('Verify using "FrameLocator"', () => {

      //expect(byFrameLocator).toBeVisible(); is not working in this case, because frameLocator() does not represent a visible DOM element 
      // it's a context for locating elements inside the iframe.

      test('FrameLocator - Should display "Click Me" button', async ({ nestedIframePage }) => {
         await expect(nestedIframePage.buttonClickMe_byLocator).toBeVisible();
      });

      test('FrameLocator - After click in "Click Me", should display success message', async ({ nestedIframePage }) => {
         await nestedIframePage.clickButtonClickMe_byFrameLocator();
         await expect(nestedIframePage.successMessage_byFrameLocator).toBeVisible();
      });
   });
});