import { DynamicTablePage } from '../pages/dynamic-table-page';
import { MouseHoverPage } from '../pages/mouse-hover-page';
import { test as baseTest } from '@playwright/test';
import { VerifyAccountPage } from '../pages/verify-account-page';
import { SortableListPage } from '../pages/sortable-list-page';
import { TagsInputBoxPage } from '../pages/tags-input-box-page';
import { ShadowDomPage } from '../pages/shadow-dom-page';
import { NewTabPage } from '../pages/new-tab-page';
import { NewPagePage } from '../pages/new-page-page';

type PlaygroundPages = {
    verifyAccountPage: VerifyAccountPage;
    dynamicTablePage: DynamicTablePage;
    mouseHoverPage: MouseHoverPage;
    sortableListPage: SortableListPage;
    tagsInputBoxPage: TagsInputBoxPage;
    shadowDomPage: ShadowDomPage;
    newTabPage: NewTabPage;
    newPagePage: NewPagePage
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
    sortableListPage: async ({ page }, use) => {
        await use(new SortableListPage(page));
    },
    tagsInputBoxPage: async ({ page }, use) => {
        await use(new TagsInputBoxPage(page));
    },
    shadowDomPage: async ({ page }, use) => {
        await use(new ShadowDomPage(page));
    },
    newTabPage: async ({ page }, use) => {
        await use(new NewTabPage(page));
    }
});

export { expect } from '@playwright/test';