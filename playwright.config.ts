import { defineConfig, devices } from '@playwright/test';
import { ENV } from './config/environment.config';
import dotenv from 'dotenv';
import path from 'path';

// Read from .env file
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL: ENV.APP_URL,
    viewport: null,
    // 2. Pass browser launch arguments to maximize the OS window
    launchOptions: {
      args: ['--start-maximized'],
    },
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    trace: 'on-first-retry',
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
    javaScriptEnabled: true,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: null,
        deviceScaleFactor: undefined,
        launchOptions: {
          args: ['--start-maximized'],
        },
        ignoreHTTPSErrors: true,
      },
    },
    /*{
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        ignoreHTTPSErrors: true,
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        ignoreHTTPSErrors: true,
      },
    },*/
  ],
});
