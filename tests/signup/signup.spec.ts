import { test, expect } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage';

test.describe('Automation Exercise Signup form step 1', () => {

    test('Should successfully navigate and submit the initial signup form', async ({ page }) => {
        
        // Initialize the Signup Page Object
        const signupPage = new SignupPage(page);
        // 1. Launch & Navigate to the base URL (configured in our playwright.config.ts/.env)
        await signupPage.navigate();
        // 2. Verify that the page loaded successfully (e.g., checking if the signup/login link is visible)
        await expect(signupPage.signupLoginLink).toBeVisible();
        // 3. Perform the initial signup form (clicks signup link, fills name/email, and clicks signup button)
        //initialize the signup form with a unique email to avoid conflicts
        await signupPage.signup('Ahmed Bilal-Test', `ahmed-test+${Date.now()}@example.com`);      
        //confirms that the account information header is visible after successful signup step 1
        await expect(signupPage.accountInfoHeader).toBeVisible();
        
    });
    
});