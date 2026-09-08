import { Page, Locator } from '@playwright/test';

export class TestCasesPage {
    readonly page: Page;
    readonly heading: Locator;

    async navigateTo(): Promise<void> {
        await this.page.goto('/test_cases');
    }

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByRole('heading', {name: 'Test Cases', exact: true});
    }

     async waitForLoad(): Promise<void> {
        await this.heading.waitFor({ state: 'visible' });
    }

   
}


