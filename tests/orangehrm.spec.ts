import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test('login page loads correctly', async ({ page }) => {
  await expect(page.getByPlaceholder('Username')).toBeVisible();
  await expect(page.getByPlaceholder('Password')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});

test('shows error for invalid login credentials', async ({ page }) => {
  await page.getByPlaceholder('Username').fill('wronguser');
  await page.getByPlaceholder('Password').fill('wrongpassword');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

test('shows required validation when login form is empty', async ({ page }) => {
  await page.getByRole('button', { name: 'Login' }).click();

  const requiredLabels = page.getByText('Required', { exact: true });
  await expect(requiredLabels).toHaveCount(2);
});

test('successfully logs in with valid credentials', async ({ page }) => {
  // 1. Wpisz dane demonstracyjne podane przez OrangeHRM
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  // 2. Kliknij Login
  await page.getByRole('button', { name: 'Login' }).click();

  // 3. Sprawdź, czy użytkownik trafia do /dashboard
  await expect(page).toHaveURL(/dashboard/);

  // 4. Sprawdź, czy widoczny jest nagłówek Dashboard
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});
