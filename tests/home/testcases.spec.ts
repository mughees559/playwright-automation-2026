import { test, expect } from '@playwright/test';
import { TestCasesPage } from '../../pages/TestCasesPage';

test.describe('Test Cases Page', () => {
   

    test('should load the Test Cases page and display the heading', async ({ page }) => {
        const testCasesPage = new TestCasesPage(page);
        await testCasesPage.navigateTo();
        await testCasesPage.waitForLoad();
        await expect(testCasesPage.heading).toBeVisible();
    });
})   
