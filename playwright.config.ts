import { defineConfig, devices } from '@playwright/test';
import { DEFAULT_TIMEOUT, NAVIGATION_TIMEOUT, VIEWPORT_HEIGHT, VIEWPORT_WIDTH } from './utils/constants';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: undefined,

  reporter: [
    ['html'],
    ['list']
  ],
expect: {
    timeout: DEFAULT_TIMEOUT, 
  },
  use: {
    baseURL: 'https://www.wikipedia.org',

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    actionTimeout: DEFAULT_TIMEOUT,
    navigationTimeout: NAVIGATION_TIMEOUT
    
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT },
      }
      ,

    }, 
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], viewport: { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT }, },
    }
  ],
});
