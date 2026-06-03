import { expect, test } from "@playwright/test";
import { BaseClient } from "../../../resources/clients/BaseClient";

test.describe("auth/login POST request @auth", async () => {
  const username = BaseClient.ADMIN_NAME;
  const password = BaseClient.ADMIN_PASSWORD;

  test("POST with valid credentails @happy", async ({ request }) => {
    const response = await request.post("api/auth/login", {
      data: {
        username: username,
        password: password,
      },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty("token");
  });

  test("POST with invalid username and password", async ({ request }) => {
    const response = await request.post("api/auth/login", {
      data: {
        username: "invalidusername",
        password: "invalidpass",
      },
    });

    expect(response.status()).toBe(401);
    const body = await response.json();
    expect(body).toHaveProperty("error");
  });

  test("POST with valid username and  invalid password", async ({ request }) => {
    const response = await request.post("api/auth/login", {
      data: {
        username: username,
        password: "invalidpass",
      },
    });

    expect(response.status()).toBe(401);
    const body = await response.json();
    expect(body).toHaveProperty("error");
  });

  test("POST with invalid username and  valid password", async ({ request }) => {
    const response = await request.post("api/auth/login", {
      data: {
        username: username,
        password: "invalidpass",
      },
    });

    expect(response.status()).toBe(401);
    const body = await response.json();
    expect(body).toHaveProperty("error");
  });

  test("POST with no username and  valid password", async ({ request }) => {
    const response = await request.post("api/auth/login", {
      data: {
        password: "invalidpass",
      },
    });

    expect(response.status()).toBe(401);
    const body = await response.json();
    expect(body).toHaveProperty("error");
  });

  test("POST with valid username and no password", async ({ request }) => {
    const response = await request.post("api/auth/login", {
      data: {
        password: "invalidpass",
      },
    });

    expect(response.status()).toBe(401);
    const body = await response.json();
    expect(body).toHaveProperty("error");
  });

  test("POST with no body", async ({ request }) => {
    const response = await request.post("api/auth/login", {
      data: {},
    });

    expect(response.status()).toBe(401);
    const body = await response.json();
    expect(body).toHaveProperty("error");
  });
});
