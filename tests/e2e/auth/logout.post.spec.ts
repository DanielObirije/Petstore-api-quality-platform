// import { expect, test } from "@playwright/test";
// import { AuthClient } from "api/clients/AuthClient";
// test.describe("auth/logout POST request @auth", async () => {
//   let token;
//   const authClient = new AuthClient();
//   test.beforeEach(async () => {
//     token = await authClient.createToken("admin", "password");
//   });

//   test("POST with valid token @happy", async ({ request }) => {
//     const res = await request.post("auth/logout", {
//       data: {
//         token: token,
//       },
//     });
//     expect(res.status()).toBe(200);
//   });
// });
