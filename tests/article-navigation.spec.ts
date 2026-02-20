
import { expect, test } from '@playwright/test';
import { PageManager } from '../pages/PageManager';
import { articles } from '../utils/test-data';


test('User can open random article from an article page.', async ({ page }) => {
  const poManager = new PageManager(page);
  const homePage = poManager.getHomePage();
  const articlePage = poManager.getArticlePage();
  const article = articles[0];
  let previousUrl: string;

  await test.step('Open an article page', async () => {
  await homePage.searchArticle(article.searchTerm);
  await expect(articlePage.heading).toBeVisible();
  });
  await test.step('Capture current URL before navigation', async () => {
    previousUrl = page.url();
  });

  await test.step('Click Random Article from sidebar', async () => {
    await articlePage.openMainMenu();
    await articlePage.clickRandomArticle();
  });

  await test.step('Validate new page loads', async () => {
    await expect(page).not.toHaveURL(previousUrl);
    await expect(articlePage.heading).toBeVisible();
  });

  await test.step('Validate page title is not empty', async () => {
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });
});