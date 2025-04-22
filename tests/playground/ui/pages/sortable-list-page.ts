import { Locator, Page } from '@playwright/test';

export class SortableListPage  {

    readonly page : Page
    readonly listItems: Locator;
    readonly checkButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.listItems = page.getByRole('listitem');
        this.checkButton = page.getByRole('button', { name: 'Check Order' });
    }


    async goto() {
        await this.page.goto("/apps/sortable-list/");
        await this.page.evaluate(() => {
        document.body.style.zoom = '50%';
        });
    }

    async pressCheckButton() {
        return await this.checkButton.click();
    }

    async getLisItem(personName: string) {
        return await this.listItems.filter({hasText: personName});;
    }

    async dragAndDrop(personName: string, rank: number) {
        // Get the source item locator
        const sourceItem: Locator = await this.getLisItem(personName);
        // Get the target item locator
        const targetItem: Locator = await this.listItems.nth(rank-1);
        // Move the mouse to the center of the source item
        await sourceItem.hover();
        // Press the mouse button down to start the drag
        await this.page.mouse.down();
        // Move the mouse to the target position, we need to subtract 1 from the target position because the list is 0-indexed
        // and the target position is 1-indexed
        await targetItem.hover();
        // Release the mouse button to drop the item
        await this.page.mouse.up();
    }
}
