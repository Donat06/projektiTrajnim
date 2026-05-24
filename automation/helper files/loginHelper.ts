export async function openLoginForm(page: any) {
  //Arrange
  const email = 'instructor@cineplex.com';
  const password = 'Cinema123';

  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('password').nth(0).fill(password);
  await page.getByText('Sign In').nth(1).click();
}