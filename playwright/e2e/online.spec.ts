import { test, expect } from '@playwright/test';

test('a webapp deve estar online', async ({ page }) => {
  await page.goto('https://localhost:5173');

  await expect(page).toHaveTitle(/velô by papito/);
});

