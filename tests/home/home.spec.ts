import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe('Home Page', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
        await homePage.waitForLoad();
    });

    test('loads with correct URL', async ({ page }) => {
        await expect(page).toHaveURL(/automationexercise\.com/);
    });

    test('displays the site logo', async () => {
        await expect(homePage.logo).toBeVisible();
    });

    test('navigation bar is visible with all key links', async () => {
        await expect(homePage.navbar).toBeVisible();
        await expect(homePage.homeLink).toBeVisible();
        await expect(homePage.productsLink).toBeVisible();
        await expect(homePage.cartLink).toBeVisible();
        await expect(homePage.signupLoginLink).toBeVisible();
        await expect(homePage.contactUsLink).toBeVisible();
    });

    test('displays featured products section', async () => {
        await expect(homePage.featuredProductsHeading).toBeVisible();
        await expect(homePage.featuredProductsSection).toBeVisible();
    });

    test('displays subscription section in footer', async () => {
        await homePage.subscriptionHeading.scrollIntoViewIfNeeded();
        await expect(homePage.subscriptionHeading).toBeVisible();
    });

    test('clicking Products navigates to products page', async ({ page }) => {
        await homePage.clickProducts();
        await expect(page).toHaveURL(/\/products/);
    });

    test('clicking Signup/Login navigates to login page', async ({ page }) => {
        await homePage.clickSignupLogin();
        await expect(page).toHaveURL(/\/login/);
    });
});
