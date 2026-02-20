import { expect, test } from '@playwright/test';
import { PageManager } from '../pages/PageManager';
import { articles } from '../utils/test-data';
import { normalize } from '../utils/helper';

const article = articles[0];


test('User can search and validate Playwright article', async ({ page }) => {
  const poManager = new PageManager(page);
  const homePage = poManager.getHomePage();
  const articlePage = poManager.getArticlePage();

  await test.step('Navigate to Wikipedia', async () => {
    await homePage.open();
  });

  await test.step('Select English', async () => {
    await homePage.selectEnglishLanguage();
  });

  await test.step('Search for Playwright', async () => {
    await homePage.searchFor(article.searchTerm);
    await expect(articlePage.heading).toBeVisible();
  });

  await test.step('Validate article page contain required keyword.', async () => {
    await expect(articlePage.heading).toContainText(article.searchTerm);
  });

  await test.step('Validate Table of Contents exists', async () => {
    await expect(articlePage.tableOfContents).toBeVisible();
  });

  await test.step('Validate first paragraph contains expected keyword', async () => {

    await expect(articlePage.firstParagraph).toContainText(normalize(article.expectedKeyword));
  });
});



