
import { test, expect } from '@playwright/test';

import { HomePage } from '../../pages/HomePage';

import { ENV } from '../../config/environment.config';
import dotenv from 'dotenv';
dotenv.config();




let homePage: HomePage;


test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);

    await page.goto(ENV.APP_URL);
});


test('HomePage', async ({ page }) => {
    // Verify that the home page is displayed
   // await expect(page).toHaveURL(ENV.APP_URL);
});  