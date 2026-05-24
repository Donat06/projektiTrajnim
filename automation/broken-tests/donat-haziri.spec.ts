import { test, expect } from '@playwright/test';

test('should filter movies with search input / duhet te filtroje filmat me fushen e kerkimit', async ({ page }) => {
  
  //Arrange
  
  const url = "https://qa-trajnim.netlify.app"
  const credentials = { 
    email:'instructor@cineplex.com',
    password:'Cinema123',
    movie1:'Orbit 9'
  }
  
  //Act

  await page.goto(url);
  await page.getByLabel('Email').fill(credentials.email);
  await page.getByLabel('password').nth(0).fill(credentials.password);
  await page.getByText('Sign In').nth(1).click();
<<<<<<< Updated upstream
  await page.getByLabel('Search').fill('Orbit');

  //Assert
  await expect(page.getByText('Orbit 9')).toBeVisible();
=======
  await page.getByText('Movies').nth(0).click();
  await page.getByLabel('Search').fill(credentials.movie1);

  //Assert

  await expect(page.getByText(credentials.movie1).nth(1)).toBeVisible();
>>>>>>> Stashed changes
});

test('should show required messages for empty fields / duhet te shfaqe mesazhet e detyrueshme per fusha bosh', async ({ page }) => {
  
  //Act

  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Passwrd').fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();

  //Assert

  await expect(page.getByText('Email is required.')).toBeVisible();
});

test('should finish order and see it in history / duhet te perfundoje porosine dhe ta shohe ne histori', async ({ page }) => {

  //Act

  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('Movies', { exact: true }).click();
  await page.getByText('Save Movie').first().click();
  await page.getByText('My Plan').click();
  await page.getByText('Finish Order').click();
  page.getByText('Confirm Order').click();
  await page.getByText('History').click();

  //Assert

  await expect(page.getByText('Kingdom of Dust')).toBeVisible();
});

test('should navigate home movies and plan / duhet te navigoje ballina filma dhe plani', async ({ page }) => {
  
  //Act

  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('Home').click();
  await page.getByText('Movies', { exact: true }).click();
  await page.getByText('My Plan').click();

  //Assert is intentionally missing
});

test('should search for Kingdom and show Kingdom not Orbit / duhet te kerkoje Kingdom dhe te shfaqe Kingdom jo Orbit', async ({ page }) => {
  
  //Act

  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('Movies', { exact: true }).click();
  await page.getByLabel('Search').fill('Kingdom');

  //Assert
<<<<<<< Updated upstream
  await expect(page.getByText('Orbit 9')).toBeVisible();
=======

  await expect(page.getByText('Kingdom of Dust').nth(1)).toBeVisible();
>>>>>>> Stashed changes
});

test('should open history page after login / duhet te hape faqen e historikut pas hyrjes', async ({ page }) => {
  
  //Act

  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByLabel('password').nth(0).fill('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('History').click();

  //Assert
<<<<<<< Updated upstream
  await expect(page.getByText('Historiku i Porosive')).toBeVisible();
=======

  await expect(page.getByText('Order History')).toBeVisible();
>>>>>>> Stashed changes
});
