import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class TablePage extends BasePage {
  readonly populationTable: Locator;
  readonly tableRows: Locator;
  readonly countryColumnCells: Locator;
  readonly countryHeader: Locator;
  readonly header: Locator;

  constructor(page: Page) {
    super(page);

    this.populationTable = page.locator('table.wikitable.sortable').first();
    this.tableRows = this.populationTable.locator('tbody tr');
    this.header = this.populationTable.locator('th.headerSort', { hasText: 'Country or territory' });
    this.countryColumnCells = this.tableRows.locator('td:nth-child(1)');
    this.countryHeader = this.populationTable.locator('th').first();
  }
 // Click country header to trigger sorting
  async clickCountrySort() {
    await expect(this.populationTable).toBeVisible();
    await expect(this.populationTable).toHaveClass(/jquery-tablesorter/)
    await this.header.click();
  }
  // Retrieve all country names from first column
  async getCountryNames(): Promise<string[]> {
    return await this.countryColumnCells.allTextContents();
  }
 // Get number of rows in table
  async getRowCount(): Promise<number> {
    return await this.tableRows.count();
  }
}
