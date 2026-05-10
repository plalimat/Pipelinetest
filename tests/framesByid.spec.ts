import { test, expect } from '@playwright/test';

test('Handle Frames', async ({ page }) => {

  console.log("Step 1: Open Oracle Java Docs");
  await page.goto('https://docs.oracle.com/javase/8/docs/api/');

  console.log("Step 2: Switch to frame using frameLocator");

  // ✅ frameLocator (no await needed) bcoz this is not async action, 
  // we are just locating the frame here, not switching to it
  const frame = page.frameLocator('frame[name="packageListFrame"]');

  console.log("Step 3: Click link inside frame");

  /* avoid using xpath for text this is the best way to locate element by text in playwright*/
  await frame.locator('text=java.applet').click();

  /* Why we are not closing the page in playwright as it will the page automatically after the test is completed, 
  this is the best part of playwright we don't have to worry about closing the page or 
  browser after the test is completed */

  console.log("Frame interaction completed");

});