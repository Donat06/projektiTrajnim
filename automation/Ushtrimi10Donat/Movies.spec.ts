import { test, expect } from 'playwright/test'
import { opentoMovies } from './HelperFile'

test ('should be able to search movie', async ({ page }) => {
  //Arrange

  const moviename = 'Kingdom of Dust'
  
  //Act
  
  await opentoMovies(page)
  await page.getByLabel('Search').fill(moviename)
  await page.getByText(moviename).nth(1).click()

  //Assert

  await expect(page.getByText(moviename).nth(1)).toBeVisible()

})

test ('should be able to save movie', async ({ page }) => {
  
  //Act

  await opentoMovies(page)
  await page.getByText('Save Movie').nth(0).click()

  //Assert

  await expect(page.getByText('Saved Already')).toBeVisible()

})

test ('should translate Movies page to Albanian', async ({ page }) => {
  
  //Act

  await opentoMovies(page)
  await page.getByText('AL').nth(0).click()

  //Assert
  
  await expect(page.getByText('Zhanri')).toBeVisible()
    
})

test ('should show error after clicking already saved', async ({ page }) => {
  
  //Act

  await opentoMovies(page)
  await page.getByText('Save Movie').nth(0).click()
  await page.getByText('Saved Already').click()

  //Assert

  await expect (page.getByText('Movie is already saved.')).toBeVisible()

})