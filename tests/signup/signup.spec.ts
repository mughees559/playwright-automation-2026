import { test, expect } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage';

test.describe('Automation Exercise Signup form', () => {

    test('Should fail to submit the initial signup form with invalid email', async ({ page }) => {
        // Initialize the Signup Page Object
        const signupPage = new SignupPage(page);
        // 1. Launch & Navigate to the base URL (configured in our playwright.config.ts/.env)
        await signupPage.navigate();
        // 2. Verify that the page loaded successfully (e.g., checking if the signup/login link is visible)
        await expect(signupPage.signupLoginLink).toBeVisible();
        // 3. Perform the initial signup form (clicks signup link, fills name/email, and clicks signup button)
        //initialize the signup form with a unique email to avoid conflicts
        await signupPage.signupstep1('Test user-ab', `test`);    
        // 4. Retrieve the browser's native warning message
        const validationMessage = await signupPage.getEmailValidationMessage();
        // 5. Assert that the correct warning message is displayed
        expect(validationMessage).toContain("Please include an '@'");
});

    test('Should fail to submit the initial signup form with empty name and email', async ({ page }) => {
        // Initialize the Signup Page Object
        const signupPage = new SignupPage(page);
        // 1. Launch & Navigate to the base URL (configured in our playwright.config.ts/.env)
        await signupPage.navigate();
        // 2. Verify that the page loaded successfully (e.g., checking if the signup/login link is visible)
        await expect(signupPage.signupLoginLink).toBeVisible();
        // 3. Perform the initial signup form (clicks signup link, fills name/email, and clicks signup button)
        //initialize the signup form with empty name and email
        await signupPage.signupstep1('', '');
        // 4. Retrieve the browser's native warning message
        const validationMessage = await signupPage.getEmailValidationMessage();
        // 5. Assert that the correct warning message is displayed
        expect(validationMessage).toContain("Please fill out this field.");
    });

    test('Should successfully navigate and submit the initial signup form', async ({ page }) => {
        
        // Initialize the Signup Page Object
        const signupPage = new SignupPage(page);
        // 1. Launch & Navigate to the base URL (configured in our playwright.config.ts/.env)
        await signupPage.navigate();
        // 2. Verify that the page loaded successfully (e.g., checking if the signup/login link is visible)
        await expect(signupPage.signupLoginLink).toBeVisible();
        // 3. Perform the initial signup form (clicks signup link, fills name/email, and clicks signup button)
        //initialize the signup form with a unique email to avoid conflicts
        await signupPage.signupstep1('Test user-ab', `Testuser-ab+${Date.now()}@example.com`);      
        //confirms that the account information header is visible after successful signup step 1
        await expect(signupPage.accountInfoHeader).toBeVisible();
        
    });
    
     test('Should successfully navigate and submit the 2nd signup form', async ({ page }) => {
        // Initialize the Signup Page Object
        const signupPage = new SignupPage(page);
        // 1. Launch & Navigate to the base URL (configured in our playwright.config.ts/.env)
        await signupPage.navigate();
        // 2. Verify that the page loaded successfully (e.g., checking if the signup/login link is visible)
        await expect(signupPage.signupLoginLink).toBeVisible();
        // 3. Perform the initial signup form (clicks signup link, fills name/email, and clicks signup button)
        //initialize the signup form with a unique email to avoid conflicts
        await signupPage.signupstep1('Test user-ab', `Testuser-ab+${Date.now()}@example.com`);
        // 4. Perform the second signup form (fills out the account information and address details)
        await signupPage.signupstep2(
            process.env.USER_PASSWORD!,
            '1',
            'January',
            '2000',
            'Test',
            'User-ab',
            'Test Company',
            '123 Test Street',
            '',
            'United States',
            'California',
            'Los Angeles',
            '90210',
            '555-555-5555'
        );
        // 5. Assert that the account created header is visible after successful signup step 2
        await expect(signupPage.accountCreatedHeader).toBeVisible();
    });

   });