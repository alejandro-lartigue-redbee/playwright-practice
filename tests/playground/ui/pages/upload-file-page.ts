import { Locator, Page } from '@playwright/test';

export class UploadFilePage  {
  readonly page : Page
  readonly inputFile: Locator;
  readonly numOfFiles: Locator;
  readonly figures: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputFile = page.locator('#file-input');
    this.numOfFiles = page.locator('#num-of-files');
    this.figures = page.locator('#images').locator('figure');
  }

  async goto() {
    await this.page.goto('/apps/upload');
  }

  async uploadFile(filePath: string) {
    await this.inputFile.setInputFiles(filePath);
  }

  async uploadFiles(filesPath: string[]) {
    await this.inputFile.setInputFiles(filesPath);
  }

  async getNumOfFiles() {
    return await this.numOfFiles.textContent();
  }

  async existUploadesFiles() {
    return await this.figures.count() > 0;
  }

  async existUploadesFile(name: string) {
    return await this.figures.locator('figcaption').filter({ hasText: name }).count() > 0;
  }

  async getCountploadesFiles() {
    return await this.figures.count();
  }

  async getUploadesFiles(index: number) {
    
    try {
      return await this.figures.nth(index).locator('figcaption').textContent();
    } catch (error) {
      return 'No existe, o no está visible, un elemento con el index: ' + index;
    }
  }
}