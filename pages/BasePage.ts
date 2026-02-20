import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(path: string) {
    await this.page.goto(path);
  }


  async getText(locator: Locator): Promise<string> {
    return await locator.textContent() || '';
  }

  async waitForVisible(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
  }
  async waitForPageReady() {
    await this.page.waitForLoadState('domcontentloaded');
  }
}
