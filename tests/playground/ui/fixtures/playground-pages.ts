import { DynamicTablePage } from '../pages/dynamic-table-page';
import { MouseHoverPage } from '../pages/mouse-hover-page';
import { test as baseTest } from '@playwright/test';
import { VerifyAccountPage } from '../pages/verify-account-page';
import { StarsRatingWidgetPage } from '../pages/stars-rating-widget-page';
import { SortableListPage } from '../pages/sortable-list-page';
import { TagsInputBoxPage } from '../pages/tags-input-box-page';
import { ShadowDomPage } from '../pages/shadow-dom-page';
import { NewTabPage } from '../pages/new-tab-page';
import { NewPagePage } from '../pages/new-page-page';
import { UploadFilePage } from '../pages/upload-file-page';
import { RedirectChainPage } from '../pages/redirect-chain-page';
import { NestedIframePage } from '../pages/nested-iframe-page';

type PlaygroundPages = {
    verifyAccountPage: VerifyAccountPage;
    dynamicTablePage: DynamicTablePage;
    mouseHoverPage: MouseHoverPage;
    starsRatingWidgetPage: StarsRatingWidgetPage;
    sortableListPage: SortableListPage;
    tagsInputBoxPage: TagsInputBoxPage;
    shadowDomPage: ShadowDomPage;
    newTabPage: NewTabPage;
    newPagePage: NewPagePage;
    uploadFilePage: UploadFilePage;
    redirectChainPage: RedirectChainPage;
    nestedIframePage: NestedIframePage;
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
    starsRatingWidgetPage: async ({ page }, use) => {
        await use(new StarsRatingWidgetPage(page));
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
    },
    nestedIframePage: async ({ page }, use) => {
        await use(new NestedIframePage(page));
    },
    uploadFilePage: async ({ page }, use) => {
        await use(new UploadFilePage(page));
    },
    redirectChainPage: async ({ page }, use) => {
        await use(new RedirectChainPage(page));
    }
});

export { expect } from '@playwright/test';