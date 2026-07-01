import  {Page, Locator} from '@playwright/test';

export class SignupPage {
    
    // locators for signup test
    readonly page: Page;  
    readonly signupLoginLink: Locator;
    readonly signupNameInput: Locator;
    readonly signupEmailInput: Locator;
    readonly signupBtn: Locator;
    // Headers & Checkboxes
    readonly accountInfoHeader: Locator;
    // readonly newsletterCheckbox: Locator;
    // readonly partnersCheckbox: Locator;
    
    //Account Info Fields
    // readonly mrRadio: Locator;
    // readonly mrsRadio: Locator;
    // readonly passwordInput: Locator;
    // readonly daysSelect: Locator;
    // readonly monthsSelect: Locator;
    // readonly yearsSelect: Locator;

    //Address Info Fields
    // readonly firstNameInput: Locator;
    // readonly lastNameInput: Locator;
    // readonly companyInput: Locator;
    // readonly address1Input: Locator;
    // readonly address2Input: Locator;
    // readonly countrySelect: Locator;
    // readonly stateInput: Locator;
    // readonly cityInput: Locator;
    // readonly zipcodeInput: Locator;
    // readonly mobileNumberInput: Locator;
    // readonly createAccountBtn: Locator;

    //this will navigate to the base URL configured in our playwright.config.ts/.env file
    async navigate(): Promise<void> {
        await this.page.goto('/');
    }

    constructor(page: Page) {

        this.page = page;  
        this.signupLoginLink = this.page.getByRole('link', { name: 'Signup / Login' });
        this.signupNameInput = page.locator('[data-qa="signup-name"]');
        this.signupEmailInput = page.locator('[data-qa="signup-email"]');
        this.signupBtn = page.locator('[data-qa="signup-button"]');
        this.accountInfoHeader = page.locator('h2:has-text("Enter Account Information")');
        
    }

    async signup(name: string, email: string) {
        await this.signupLoginLink.click();
        await this.signupNameInput.fill(name);
        await this.signupEmailInput.fill(email);
        await this.signupBtn.click();
    }

        
}