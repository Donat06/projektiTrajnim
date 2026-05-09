import { test, expect } from '@playwright/test';

test('should show password required when only email is filled', async ({ page }) => {
  //Act
  await page.goto('/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByText('Sign In').nth(1).click();

  //Assert
  await expect(page.getByText('Password is required.')).toBeVisible();
});

test('should show email required when only password is filled', async ({ page }) => {
  //Act
  await page.goto('/');
  await page.getByText('Password').click();
  await page.keyboard.type('Cinema123');
  await page.getByText('Sign In').nth(1).click();

  //Assert
  await expect(page.getByText('Email is required.')).toBeVisible();
});
