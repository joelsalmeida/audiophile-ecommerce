import { test, expect } from '@playwright/test';

test.describe('Header content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('Header should be visible', async ({ page }) => {
    await expect(page.getByRole('banner')).toBeVisible();
  });

  test('Header logo should be visible', async ({ page }) => {
    await expect(
      page.getByRole('banner').getByRole('link', { name: 'Audiophile logo' }),
    ).toBeVisible();
  });

  test('Header links should be visible', async ({ page }) => {
    await expect(
      page.getByRole('banner').getByText('HomeHeadphonesSpeakersEarphones'),
    ).toBeVisible();

    await expect(
      page.getByRole('banner').getByRole('link', { name: 'Home' }),
    ).toBeVisible();

    await expect(
      page.getByRole('banner').getByRole('link', { name: 'Headphones' }),
    ).toBeVisible();

    await expect(
      page.getByRole('banner').getByRole('link', { name: 'Speakers' }),
    ).toBeVisible();

    await expect(
      page.getByRole('banner').getByRole('link', { name: 'Earphones' }),
    ).toBeVisible();
  });

  test('Header cart button should be visible', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Open cart' })).toBeVisible();
  });
});

test.describe('Categories content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('Headphones category should be visible', async ({ page }) => {
    await expect(page.getByText('HeadphonesShop')).toBeVisible();
  });

  test('Speakers category should be visible', async ({ page }) => {
    await expect(page.getByText('SpeakersShop')).toBeVisible();
  });

  test('Earphones category should be visible', async ({ page }) => {
    await expect(page.getByText('EarphonesShop')).toBeVisible();
  });
});

test.describe('Footer content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('Footer should be visible', async ({ page }) => {
    await expect(page.getByRole('contentinfo')).toBeVisible();
  });

  test('Footer links should be visible', async ({ page }) => {
    await expect(
      page
        .getByRole('contentinfo')
        .getByText('HomeHeadphonesSpeakersEarphones'),
    ).toBeVisible();

    await expect(
      page.getByRole('contentinfo').getByRole('link', { name: 'Home' }),
    ).toBeVisible();

    await expect(
      page.getByRole('contentinfo').getByRole('link', { name: 'Headphones' }),
    ).toBeVisible();

    await expect(
      page.getByRole('contentinfo').getByRole('link', { name: 'Speakers' }),
    ).toBeVisible();

    await expect(
      page.getByRole('contentinfo').getByRole('link', { name: 'Earphones' }),
    ).toBeVisible();
  });
});
