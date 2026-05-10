import { test, expect } from '@playwright/test';

test('Handle iframe and come back to main page', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/iframe');

    // Step 1: Work inside iframe
    const frame = page.frameLocator('#mce_0_ifr');

    await frame.locator('body').fill('Hello John inside iframe');

    // Step 2: Now come back to main page automatically
    // Just use page.locator()

    await page.locator('a[href="/"]').click();

});