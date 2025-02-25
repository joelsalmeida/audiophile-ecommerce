import { test, expect } from '@playwright/test';

test.describe('Main content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/category/headphones');
  });

  test('Category header should be visible', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'headphones', exact: true }),
    ).toBeVisible();
  });

  test('XX99 Mark II header should be visible', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'XX99 Mark II Headphones' }),
    ).toBeVisible();
  });

  test('XX99 Mark I header should be visible', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'XX99 Mark I Headphones' }),
    ).toBeVisible();
  });

  test('XX59 header should be visible', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'XX59 Headphones' }),
    ).toBeVisible();
  });
});

test.describe('Header, footer and categories', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/category/headphones');
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
