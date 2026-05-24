import { test, expect } from '@playwright/test';
import { openLoginForm } from './helper files/loginHelper';

test('should login with valid credentials / duhet te kycet me kredenciale valide', async ({ page }) => {
  //Act
  await openLoginForm(page)
  

  //Assert
  await expect(page.getByText('Logout')).toBeVisible();
});