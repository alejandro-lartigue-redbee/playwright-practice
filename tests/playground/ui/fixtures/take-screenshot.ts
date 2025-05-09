import { Locator, Page, TestInfo } from "@playwright/test";
import fs from 'fs';

/**
 * Utility class to capture a screenshot and attach it to the Playwright report.
 */
export class TakeCapture {

    /**
     * Takes a full-page screenshot, attaches it to the test report, and deletes the local file afterwards.
     *
     * @param screenshotPath - The file system path where the screenshot will be temporarily saved.
     * @param screenshotName - The name that will appear in the Playwright test report.
     * @param page - The Playwright `Page` object from which the screenshot will be taken.
     * @param testInfo - The Playwright `TestInfo` object used to attach artifacts to the test report.
     * @param deleteAfterAttach - Optional. If true, deletes the screenshot file after attaching it to the report. Default is true.
     */
    async TakeFullCaptureAndAttach(
        screenshotPath: string,
        screenshotName: string,
        page: Page,
        testInfo: TestInfo,
        deleteAfterAttach: boolean = true
    ) {
        // Create the screenshots folder if it doesn't exist
        if (!fs.existsSync('screenshots')) {
            fs.mkdirSync('screenshots');
        }

        // Take screenshot
        await page.screenshot({ path: screenshotPath, fullPage: true });
        // Attach to the report
        await testInfo.attach(screenshotName, {
            path: screenshotPath,
            contentType: 'image/png',
        });

        // Optionally, remove the screenshot after attaching it to the report.
        // It helps to keep the screenshots folder clean.
        if (deleteAfterAttach && fs.existsSync(screenshotPath)) {
            fs.unlinkSync(screenshotPath);
        }
    }

    /**
     * Takes a element screenshot, attaches it to the test report, and deletes the local file afterwards.
     *
     * @param screenshotPath - The file system path where the screenshot will be temporarily saved.
     * @param screenshotName - The name that will appear in the Playwright test report.
     * @param element - The Playwright `Element` object from which the screenshot will be taken.
     * @param testInfo - The Playwright `TestInfo` object used to attach artifacts to the test report.
     * @param deleteAfterAttach - Optional. If true, deletes the screenshot file after attaching it to the report. Default is true.
     */
    async TakeElementCaptureAndAttach(
        screenshotPath: string,
        screenshotName: string,
        element: Locator,
        testInfo: TestInfo,
        deleteAfterAttach: boolean = true
    ) {
        // Create the screenshots folder if it doesn't exist
        if (!fs.existsSync('screenshots')) {
            fs.mkdirSync('screenshots');
        }

        // Take screenshot
        await element.screenshot({ path: screenshotPath });
        // Attach to the report
        await testInfo.attach(screenshotName, {
            path: screenshotPath,
            contentType: 'image/png',
        });

        // Optionally, remove the screenshot after attaching it to the report.
        // It helps to keep the screenshots folder clean.
        if (deleteAfterAttach && fs.existsSync(screenshotPath)) {
            fs.unlinkSync(screenshotPath);
        }
    }
}