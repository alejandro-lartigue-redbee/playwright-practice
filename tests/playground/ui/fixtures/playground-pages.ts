import { DynamicTablePage } from '../pages/dynamic-table-page';
import { MouseHoverPage } from '../pages/mouse-hover-page';
import { test as baseTest } from '@playwright/test';
import { VerifyAccountPage } from '../pages/verify-account-page';
import { StarsRatingWidgetPage } from '../pages/stars-rating-widget-page';
import { TagsInputBoxPage } from '../pages/tags-input-box-page';
import { ShadowDomPage } from '../pages/shadow-dom-page';

type PlaygroundPages = {
    verifyAccountPage: VerifyAccountPage;
    dynamicTablePage: DynamicTablePage;
    mouseHoverPage: MouseHoverPage;
    starsRatingWidgetPage: StarsRatingWidgetPage;
    tagsInputBoxPage: TagsInputBoxPage;
    shadowDomPage: ShadowDomPage;
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
    tagsInputBoxPage: async ({ page }, use) => {
        await use(new TagsInputBoxPage(page));
    },
    shadowDomPage: async ({ page }, use) => {
        await use(new ShadowDomPage(page));
    },
});

export { expect } from '@playwright/test';