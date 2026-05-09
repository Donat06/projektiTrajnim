import { test, expect } from '@playwright/test';

test('should change title text when language is switched', async ({ page }) => {
  //Act
  await page.goto('/');

  //Assert
  await expect(page.getByTestId('signin-title')).toHaveText('Sign In');

  //Act
  await page.getByTestId('lang-al').click();

  //Assert
  await expect(page.getByTestId('signin-title')).toHaveText('Hyr');

  //Act
  await page.getByTestId('lang-en').click();

  //Assert
  await expect(page.getByTestId('signin-title')).toHaveText('Sign In');
});
