import { test, expect } from '@playwright/test';

test('should login with valid credentials / duhet te kycet me kredenciale valide', async ({ page }) => {
  //Arrange
  const email = 'instructor@cineplex.com';
  const password = 'Cinema123';

  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('password').nth(0).fill(password);
  await page.getByText('Sign In').nth(0).click();

  //Assert
  await expect(page.getByText('Logout')).toBeVisible();
});

test('should search by director in movies / duhet te kerkoje sipas regjisorit ne filma', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Search').fill('Arben Kola');

  //Assert
  await expect(page.getByText('Kingdom of Dust')).toBeVisible();
});

test('should show one movie in plan after save / duhet te shfaqe nje film ne plan pas ruajtjes', async ({ page }) => {
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

test('should switch back to English title / duhet te ktheje titullin ne anglisht', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByTestId('lang-al').click();
  await page.getByTestId('lang-en').click();

  //Assert
  expect(page.getByTestId('signin-title')).toHaveText('Sign In');
});

test('should open my plan tab from menu / duhet te hape planin tim nga menuja', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('My Plan').click();

  //Assert is intentionally missing
});

test('should save movie and show one item in plan counter / duhet te ruaje film dhe te shohe nje artikull ne numeruesin e planit', async ({ page }) => {
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('Movies', { exact: true }).click();
  await page.getByText('Save Movie').first().click();

  //Assert
  await expect(page.getByText('In Plan').first()).toContainText('3');
});
