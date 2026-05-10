import { test, expect } from '@playwright/test';

test('Handle Frames', async ({ page }) => {

  console.log("Step 1: Open website");
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  console.log("Step 2: Locate correct frame");

  // ✅ Correct frame name
  //const frame = page.frameLocator('#courses-iframe');
  // const frame = page.frameLocator('iframe[name="iframe-name"]');
 
  // ✅ Better way to locate frame using title attribute, 
  // this is more reliable than using name or id as they can change frequently
  //const frame = page.frameLocator('iframe[title="Courses Frame"]');
  const frame = page.frameLocator('#courses-iframe');
  console.log("Step 3: Click link inside frame");

  const all_Access_plan_link = frame.getByRole('link', { name: 'All Access plan' });

  await all_Access_plan_link.waitFor({ state: 'visible' });

  await expect(all_Access_plan_link).toBeVisible();
  

  // await frame.getByRole('link', { name: 'All Access plan' }).scrollIntoViewIfNeeded();
  await frame.getByRole('link', { name: 'All Access plan' }).click();

  console.log("Step 4: Verify heading inside frame");

  // ✅ Important: assertion inside frame
  await expect(frame.locator("h1"))
      .toHaveText("All Access Subscription");

  console.log("Heading text is correct");

});