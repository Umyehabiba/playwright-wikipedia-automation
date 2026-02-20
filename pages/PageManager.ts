
import { Page } from '@playwright/test';
import { ArticlePage } from './ArticlePage';
import { HomePage } from './HomePage';
import { TablePage } from './TablePage';

export class PageManager {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getHomePage() {
        return new HomePage(this.page);
    }

    getArticlePage() {
        return new ArticlePage(this.page);
    }

    getTablePage() {
        return new TablePage(this.page);
    }
}
