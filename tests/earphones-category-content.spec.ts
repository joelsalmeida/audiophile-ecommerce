import { test, expect } from '@playwright/test';

test.describe('Main content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/category/earphones');
  });

  test('Category header should be visible', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'earphones', exact: true }),
    ).toBeVisible();
  });

  test('YX1 Wireless header should be visible', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'YX1 Wireless Earphones' }),
    ).toBeVisible();
  });
});

test.describe('Header, footer and categories', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/category/earphones');
  });

  test('Header should be visible', async ({ page }) => {
    await expect(page.getByRole('banner')).toBeVisible();
  });

  test('Categories should be visible', async ({ page }) => {
    await expect(
      page.getByText('HeadphonesShopSpeakersShopEarphonesShop'),
    ).toBeVisible();
  });

  test('Footer should be visible', async ({ page }) => {
    await expect(page.getByRole('contentinfo')).toBeVisible();
  });
});
