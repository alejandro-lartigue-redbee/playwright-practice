import { Locator, Page } from '@playwright/test';

export class TagsInputBoxPage  {
  readonly page : Page
  readonly inputTag: Locator;
  readonly spanTag: Locator;
  readonly buttonRemoveAll: Locator;
  readonly onclickTag: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputTag = page.locator('input[type="text"]');
    this.spanTag = page.locator('.details span');
    this.buttonRemoveAll = page.locator('button');
    this.onclickTag = page.locator('i[onclick="remove(this, \'node\')"]');
  }

  async goto() {
    await this.page.goto('/apps/tags-input-box');
  };

  async writeTag(name: string){
    await this.inputTag.click();
    await this.inputTag.fill(name);
    await this.inputTag.press('Enter');
  };

  async removeAllTags(){
    await this.buttonRemoveAll.click();
  };

  async removeTag(){
    await this.onclickTag.click();
  };

}