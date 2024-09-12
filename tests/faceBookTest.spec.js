import test, { page, expect } from '@playwright/test';

test("Facebook test @Charm", async ({ page }) => {

  test.setTimeout(60000);
    await page.goto("https://web.facebook.com/");

    await expect(page).toHaveTitle("Facebook – log in or sign up");
  
    //click on the create-button
    await page
      .locator('//a[@data-testid="open-registration-form-button"]')
      .click();

      //fill in your name to the firstname input
    await page.locator('//input[@name="firstname"]').fill("Adeola");

    //fill in your name to the lastname input
    await page.locator("//input[@name='lastname']").fill("Oni");

    //fill in your email to the email or number input
    await page.locator('//input[@name="reg_email__"]').fill("oni.adeola@yahoo.com");

    //fill your password to the password input
    await page.locator('//input[@data-type="password"]').fill("Goodcharming13");

    //click your birthday day
    await page.locator('#day').selectOption({index: 15});

    //click your birthday month
    await page.locator('#month').selectOption({label: 'May'});

    //click your birthday year
    await page.locator('#year').selectOption({index: 26});
  
    //click to specify your gender 
    await page.locator("//span[2]//input[1]").check();
  
    //click the sign-up button to submit your information
    await page.locator('//button[@name="websubmit"]').click();

    test.slow();
    
    //await page.waitForTimeout(50000);
  });
  




  