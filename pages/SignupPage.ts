import  {Page, Locator} from '@playwright/test';

export class SignupPage {
    
    // locators for signup test
    readonly page: Page;  
    readonly signupLoginLink: Locator;
    readonly signupNameInput: Locator;
    readonly signupEmailInput: Locator;
    readonly signupBtn: Locator;
    readonly accountInfoHeader: Locator;
    readonly newsletterCheckbox: Locator;
    readonly partnersCheckbox: Locator;
    readonly mrRadio: Locator;
    readonly mrsRadio: Locator;
    readonly passwordInput: Locator;
    readonly daysSelect: Locator;
    readonly monthsSelect: Locator;
    readonly yearsSelect: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly address1Input: Locator;
    readonly address2Input: Locator;
    readonly countrySelect: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly createAccountBtn: Locator;
    readonly accountCreatedHeader: Locator;

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
        
        this.newsletterCheckbox = page.locator('#newsletter');
        this.partnersCheckbox = page.locator('#optin');

        // Account Info Form
        this.mrRadio = page.locator('#id_gender1');
        this.mrsRadio = page.locator('#id_gender2');
        this.passwordInput = page.locator('[data-qa="password"]');
        this.daysSelect = page.locator('[data-qa="days"]');
        this.monthsSelect = page.locator('[data-qa="months"]');
        this.yearsSelect = page.locator('[data-qa="years"]');

        // Address Form
        this.firstNameInput = page.locator('[data-qa="first_name"]');
        this.lastNameInput = page.locator('[data-qa="last_name"]');
        this.companyInput = page.locator('[data-qa="company"]');
        this.address1Input = page.locator('[data-qa="address"]');
        this.address2Input = page.locator('[data-qa="address2"]');
        this.countrySelect = page.locator('[data-qa="country"]');
        this.stateInput = page.locator('[data-qa="state"]');
        this.cityInput = page.locator('[data-qa="city"]');
        this.zipcodeInput = page.locator('[data-qa="zipcode"]');
        this.mobileNumberInput = page.locator('[data-qa="mobile_number"]');
        this.createAccountBtn = page.locator('[data-qa="create-account"]');
        this.accountCreatedHeader = page.locator('h2:has-text("Account Created")');
    }

    async signupstep1(name: string, email: string) {
        await this.signupLoginLink.click();
        await this.signupNameInput.fill(name);
        await this.signupEmailInput.fill(email);
        await this.signupBtn.click();
    }

    async signupstep2(password: string, day: string, month: string, year: string, firstName: string, lastName: string, company: string, address1: string, address2: string, country: string, state: string, city: string, zipcode: string, mobileNumber: string) {
        await this.mrRadio.check();
        await this.passwordInput.fill(password);
        await this.daysSelect.selectOption(day);
        await this.monthsSelect.selectOption(month);
        await this.yearsSelect.selectOption(year);
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.companyInput.fill(company);
        await this.address1Input.fill(address1);
        await this.address2Input.fill(address2);
        await this.countrySelect.selectOption(country);
        await this.stateInput.fill(state);
        await this.cityInput.fill(city);
        await this.zipcodeInput.fill(zipcode);
        await this.mobileNumberInput.fill(mobileNumber);
        await this.createAccountBtn.click();
    }

    async getEmailValidationMessage(): Promise<string> {
    return await this.signupEmailInput.evaluate((node) => (node as any).validationMessage);
}

        
}