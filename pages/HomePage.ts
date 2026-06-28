import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    // Nav
    readonly navbar: Locator;
    readonly homeLink: Locator;
    readonly productsLink: Locator;
    readonly cartLink: Locator;
    readonly signupLoginLink: Locator;
    readonly contactUsLink: Locator;
    readonly testCasesLink: Locator;

    // Body
    readonly logo: Locator;
    readonly featuredProductsHeading: Locator;
    readonly featuredProductsSection: Locator;
    readonly subscriptionHeading: Locator;

    constructor(page: Page) {
        this.page = page;

        this.navbar = page.locator('.navbar-nav');

        // Scoped to navbar to avoid matching the same text in carousel/footer.
        // Substring regex (no anchors) because Font Awesome icon glyphs are part
        // of the computed accessible name on this site.
        const nav = this.navbar;
        this.homeLink = nav.getByRole('link', { name: /Home/i });
        this.productsLink = nav.getByRole('link', { name: /Products/i });
        this.cartLink = nav.getByRole('link', { name: /Cart/i });
        this.signupLoginLink = nav.getByRole('link', { name: /Signup/i });
        this.contactUsLink = nav.getByRole('link', { name: /Contact us/i });
        this.testCasesLink = nav.getByRole('link', { name: /Test Cases/i });

        this.logo = page.locator('#header .logo img');
        this.featuredProductsHeading = page.getByRole('heading', { name: /Features Items/i });
        this.featuredProductsSection = page.locator('.features_items');
        this.subscriptionHeading = page.getByRole('heading', { name: /Subscription/i });
    }

    async navigate(): Promise<void> {
        await this.page.goto('/');
    }

    async waitForLoad(): Promise<void> {
        await this.navbar.waitFor({ state: 'visible' });
    }

    async clickProducts(): Promise<void> {
        await this.productsLink.click();
    }

    async clickCart(): Promise<void> {
        await this.cartLink.click();
    }

    async clickSignupLogin(): Promise<void> {
        await this.signupLoginLink.click();
    }
}
