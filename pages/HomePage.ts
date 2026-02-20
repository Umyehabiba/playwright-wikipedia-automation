import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly heading: Locator;
  readonly englishLink: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    super(page);
    this.englishLink = page.locator('#js-link-box-en');
    this.searchInput = page.locator('#searchInput');
    this.searchButton = page.locator('#searchform').getByRole('button', { name: 'Search' });
    this.heading = page.locator('#firstHeading')
  }
  async open() {
    await this.navigateTo('/');
  }
  async selectEnglishLanguage() {
    await this.englishLink.click();
  }

  async searchFor(term: string) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
    await this.waitForVisible(this.heading);
  }
// Combined flow helper (navigation + language + search)
  async searchArticle(term: string) {
    await this.open();
    await this.selectEnglishLanguage();
    await this.searchFor(term);
  }
}
