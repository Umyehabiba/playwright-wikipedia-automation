import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/PageManager';
import { articles } from '../utils/test-data';
import { SORTUPCLASSES } from '../utils/constants';
import { isSortedAlphabetically } from '../utils/helper';



test('Validate table presence and sorting functionality', async ({ page }) => {
  const article = articles[0];
  const poManager = new PageManager(page);
  const homePage = poManager.getHomePage();
  const tablePage = poManager.getTablePage();

  await test.step('Navigate to list of countries by population article.', async () => {
    await homePage.searchArticle(article.articleWithTable);
    await expect(homePage.heading).toBeVisible();
  });

  await test.step('Validate table exists', async () => {
    await expect(tablePage.populationTable).toBeVisible();
  });

  await test.step('Validate row count greater than zero', async () => {
    const rowCount = await tablePage.getRowCount();
    expect(rowCount).toBeGreaterThan(0);
  });

  await test.step('Click sort by country', async () => {
   
    await tablePage.clickCountrySort();
  });

  await test.step('Validate sorting changes row order', async () => {

    await expect(tablePage.header).toHaveClass(SORTUPCLASSES);
    
    const names = await tablePage.getCountryNames();
    expect(isSortedAlphabetically(names)).toBeTruthy();
  });

});


