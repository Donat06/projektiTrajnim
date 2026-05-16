import { test, expect } from '@playwright/test';

test('should login with valid credentials', async ({ page }) => {
  //Arrange
  const email = 'instructor@cineplex.com';
  const password = 'Cinema123';

  //Act
  await page.goto('/');
  await page.getByLabel('Email').fill(email);
  await page.getByText('Password').click();
  await page.keyboard.type(password);
  await page.getByText('Sign In').nth(1).click();

  //Assert
  await expect(page.getByText('Logout').nth(0)).toBeVisible();
});
