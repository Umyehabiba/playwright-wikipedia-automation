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

    // Wikipedia sortable table
    this.populationTable = page.locator('table.wikitable.sortable').first();

    this.tableRows = this.populationTable.locator('tbody tr');
     this.header = this.populationTable.locator('th.headerSort', { hasText: 'Country or territory' });

    // First column = Country name
    this.countryColumnCells = this.tableRows.locator('td:nth-child(1)');

    // Header for sorting by country name
    this.countryHeader = this.populationTable.locator('th').first();
  }

  async clickCountrySort() {
    await expect(this.populationTable).toBeVisible();
    await expect(this.populationTable).toHaveClass(/jquery-tablesorter/)
    await this.header.click();
   
    
  }
  

  async getCountryNames(): Promise<string[]> {
    return await this.countryColumnCells.allTextContents();
  }

  async getRowCount(): Promise<number> {
    return await this.tableRows.count();
  }
}
