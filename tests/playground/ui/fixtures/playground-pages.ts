import { DynamicTablePage } from '../pages/dynamic-table-page';
import { MouseHoverPage } from '../pages/mouse-hover-page';
import { test as baseTest } from '@playwright/test';
import { VerifyAccountPage } from '../pages/verify-account-page';
import { UploadFilePage } from '../pages/upload-file-page';

type PlaygroundPages = {
    verifyAccountPage: VerifyAccountPage;
    dynamicTablePage: DynamicTablePage;
    mouseHoverPage: MouseHoverPage;
    uploadFilePage: UploadFilePage;
}

export const test = baseTest.extend<PlaygroundPages>({
    verifyAccountPage: async ({ page }, use) => {
        await use(new VerifyAccountPage(page));
    },
    dynamicTablePage: async ({ page }, use) => {
        await use(new DynamicTablePage(page));
    },
    mouseHoverPage: async ({ page }, use) => {
        await use(new MouseHoverPage(page));
    },
    uploadFilePage: async ({ page }, use) => {
        await use(new UploadFilePage(page));
    },
});

export { expect } from '@playwright/test';


