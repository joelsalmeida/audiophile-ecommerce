import { test, expect } from '@playwright/test';

test.describe('Main content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/category/speakers');
  });

  test('Category header should be visible', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'speakers', exact: true }),
    ).toBeVisible();
  });

  test('ZX9 header should be visible', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'ZX9 Speaker' }),
    ).toBeVisible();
  });

  test('ZX7 header should be visible', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'ZX7 Speaker' }),
    ).toBeVisible();
  });
});

test.describe('Header, footer and categories', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/category/speakers');
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
