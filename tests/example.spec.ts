import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/index.html");

  await expect(page).toHaveTitle("Playwrith POC");
});

test("image is visible", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/index.html");

  await expect(page.getByTestId("visible-image")).toBeVisible();
});

test("image is invisible", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/index.html");

  await expect(page.getByTestId("invisible-image")).not.toBeVisible();
});
