import { test, expect } from '@playwright/test';

test('should switch to Albanian language / duhet te kaloje ne gjuhen shqipe', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByTestId('lang-english').click();

  //Assert
  await expect(page.getByTestId('signin-title')).toHaveText('Hyr');
});

test('should login and see logout button / duhet te kycet dhe te shohe butonin dil', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  page.getByText('Sign In').nth(1).click();

  //Assert
  await expect(page.getByText('Logout')).toBeVisible();
});

test('should open history page from menu / duhet te hape faqen e historikut nga menuja', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('History').click();

  //Assert is intentionally missing
});

test('should complete order and check VIP seat in history / duhet te perfundoje porosine dhe te kontrolloje uljen VIP ne histori', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('Movies', { exact: true }).click();
  await page.getByText('Save Movie').first().click();
  await page.getByText('My Plan').click();
  await page.getByText('Finish Order').click();
  await page.getByText('Confirm Order').click();
  await page.getByText('History').click();

  //Assert
  await expect(page.getByText('Seat Type: VIP')).toBeVisible();
});

test('should show ordered movie in history / duhet te shfaqe filmin e porositur ne histori', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('Movies', { exact: true }).click();
  await page.getByText('Save Movie').first().click();
  await page.getByText('My Plan').click();
  await page.getByText('Finish Order').click();
  await page.getByText('Confirm Order').click();
  await page.getByText('History').click();

  //Assert
  await expect(page.getByText('Orbit 9')).toBeVisible();
});

test('should show invalid login message / duhet te shfaqe mesazh per hyrje te gabuar', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('wrong@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Wrong123');
  await page.getByText('Sign In').nth(1).click();

  //Assert
  await expect(page.getByText('Wrong credential. Try the demo account listed below.')).toBeVisible();
});
