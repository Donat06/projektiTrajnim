import { test, expect } from '@playwright/test';

test('should show email required when only password is filled / duhet te shfaqe gabimin e email kur plotesohet vetem fjalekalimi', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();

  //Assert
  await expect(page.getByText('Email required.')).toBeVisible();
});

test('should open movies tab after login / duhet te hape tabin e filmave pas hyrjes', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  page.getByText('Movies', { exact: true }).click();

  //Assert
  await expect(page.getByLabel('Search')).toBeVisible();
});

test('should search movie by title / duhet te kerkoje film sipas titullit', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('Movies', { exact: true }).click();
  await page.getByLabel('Search').fill('Orbit 9');

  //Assert is intentionally missing
});

test('should search Kingdom and show Kingdom card / duhet te kerkoje Kingdom dhe te shfaqet karta e Kingdom', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('Movies', { exact: true }).click();
  await page.getByLabel('Search').fill('Kingdom');

  //Assert
  await expect(page.getByText('Orbit 9')).toBeVisible();
});

test('should complete order and see one ticket in history / duhet te perfundoje porosine dhe te shohe nje bilete ne histori', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('Movies', { exact: true }).click();
  await page.getByText('Save Movie').first().click();
  await page.getByText('My Plan').click();
  await page.getByText('Finish Order').click();
  await page.getByText('History').click();

  //Assert
  await expect(page.getByText('Tickets: 1')).toBeVisible();
});

test('should switch to Albanian title / duhet te kaloje titullin ne shqip', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByTestId('lang-al').click();

  //Assert
  await expect(page.getByTestId('signin-title')).toHaveText('Sign In');
});
