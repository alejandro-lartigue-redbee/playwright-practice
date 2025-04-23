import { DynamicTablePage } from '../pages/dynamic-table-page';
import { MouseHoverPage } from '../pages/mouse-hover-page';
import { test as baseTest } from '@playwright/test';
import { VerifyAccountPage } from '../pages/verify-account-page';
import { TagsInputBoxPage } from '../pages/tags-input-box-page';

type PlaygroundPages = {
    verifyAccountPage: VerifyAccountPage;
    dynamicTablePage: DynamicTablePage;
    mouseHoverPage: MouseHoverPage;
    tagsInputBoxPage: TagsInputBoxPage;
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
    tagsInputBoxPage: async ({ page }, use) => {
        await use(new TagsInputBoxPage(page));
    },
});

export { expect } from '@playwright/test';


