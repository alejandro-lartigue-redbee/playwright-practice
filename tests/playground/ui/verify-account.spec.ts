import { test, expect } from './fixtures/playground-pages';
test.describe('Verify Account', () => {
    test.beforeEach(async ({ verifyAccountPage }) => {
        await verifyAccountPage.goto();
    });

    test('Should display Success Message if the correct code is entered', async ({ verifyAccountPage }) => {
        const { firstDigit, secondDigit, thirdDigit, fourthDigit, fifthDigit, sixthDigit } 
        = await verifyAccountPage.getConfirmationCode();
        
        await verifyAccountPage.enterFirstDigit(firstDigit);
        await verifyAccountPage.enterSecondDigit(secondDigit);
        await verifyAccountPage.enterThirdDigit(thirdDigit);
        await verifyAccountPage.enterFourthDigit(fourthDigit);
        await verifyAccountPage.enterFifthDigit(fifthDigit);
        await verifyAccountPage.enterSixthDigit(sixthDigit);
        await expect(verifyAccountPage.successMessage).toBeVisible();
        await expect(verifyAccountPage.successMessage).toHaveText('Success');
    });
});

