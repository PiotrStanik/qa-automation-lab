import { test, expect } from '@playwright/test';

test('returns 401 for shortcuts endpoint without authenticated session', async ({ request }) => {
  const response = await request.get(
    'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts'
  );

  expect(response.status()).toBe(401);

  const body = await response.json();

  expect(body.error.status).toBe(401);
  expect(body.error.message).toBe('Session expired');
});

test('returns shortcuts data for authenticated session', async ({ page, context }) => {
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard/);

  const response = await context.request.get(
    'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.data).toBeDefined();
  expect(body.data['leave.apply_leave']).toBe(true);
  expect(body.data['time.my_timesheet']).toBe(true);
});