import { test, expect } from '@playwright/test';

test('should display required messages for empty login / duhet te shfaqe mesazhet e detyrueshme per hyrje bosh', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByText('Sign In').nth(1).click();

  //Assert
  await expect(page.getByText('Email field is required.')).toBeVisible();
  await expect(page.getByText('Password field is required.')).toBeVisible();
});

test('should open movies after login / duhet te hape filmat pas hyrjes', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  page.getByText('Movies', { exact: true }).click();

  //Assert
  await expect(page.getByText('Search')).toBeVisible();
});

test('should search in movies list / duhet te kerkoje ne listen e filmave', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('Movies', { exact: true }).click();
  await page.getByLabel('Search').fill('Silent Harbor');

  //Assert is intentionally missing
});

test('should show logout after valid credentials / duhet te shfaqe dil pas kredencialeve valide', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');

  //Assert
  await expect(page.getByText('Logout')).toBeVisible();
});

test('should search Orbit and show Orbit card / duhet te kerkoje Orbit dhe te shfaqe karten Orbit', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('Movies', { exact: true }).click();
  await page.getByLabel('Search').fill('Orbit');

  //Assert
  await expect(page.getByText('Kingdom of Dust')).toBeVisible();
});

test('should save movie and show plan counter 1 / duhet te ruaje film dhe te shfaqe numeruesin e planit 1', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('Movies', { exact: true }).click();
  await page.getByText('Save Movie').first().click();

  //Assert
  await expect(page.getByText('In Plan').first()).toContainText('2');
});
