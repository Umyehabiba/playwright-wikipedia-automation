import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ArticlePage extends BasePage {
  readonly heading: Locator;
  readonly tableOfContents: Locator;
  readonly firstParagraph: Locator;
  readonly randomArticleLink: Locator;
  readonly mainMenuButton: Locator;

  constructor(page: Page) {
    super(page);

    this.heading = page.locator('#firstHeading');
    this.tableOfContents = page.locator('#mw-panel-toc');
    this.firstParagraph = page.locator('#mw-content-text p').first();
    this.mainMenuButton = page.getByRole('button', { name: 'Main menu' });
    this.randomArticleLink = page.locator('#n-randompage a');
  }

  async clickRandomArticle() {
    await this.randomArticleLink.click();
  }
  async openMainMenu() {
    await this.mainMenuButton.click();
  }
}
