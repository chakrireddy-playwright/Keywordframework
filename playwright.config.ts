import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 60000,

  retries: 1,

  use: {

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  },

  reporter: [

    ['list'],

    ['allure-playwright']
  ],

  projects: [

    {
      name: 'chromium',

      use: {
        browserName: 'chromium'
      }
    }
  ]
});